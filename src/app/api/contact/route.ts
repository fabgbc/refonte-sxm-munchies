import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { headers } from "next/headers";
import { Resend } from "resend";
import { contactInfo, siteInfo } from "@/data/contact";

// Rate limiting store
// NOTE: In serverless environments (Vercel), each instance has its own memory.
// This means rate limiting is per-instance, not global. For production-grade
// rate limiting, consider using Vercel KV, Upstash Redis, or similar.
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour

const isDev = process.env.NODE_ENV !== "production";

// Valid enum values for subject and serviceType
const VALID_SUBJECTS = ["villa", "yacht", "week", "event", "other"];
const VALID_SERVICE_TYPES = [
  // Booking form
  "villa", "yacht", "event", "buffet",
  // Menu pages
  "surf-turf-menu", "bourgogne-menu", "caribbean-menu", "mediterranean-menu",
  "gourmet-menu", "weekly-menu", "grill-menu",
  // Service pages
  "breakfast-brunch", "buffet-patisserie", "gourmet-platters",
  "salads-tapas-buffet", "wine", "buffets",
  "floater-contact", "chefs", "private-chef-services",
  "book-your-chef-in-saint-martin", "villa-chef",
];

// Spam keywords to filter
const SPAM_KEYWORDS = [
  "viagra",
  "cialis",
  "casino",
  "lottery",
  "bitcoin",
  "crypto",
  "investment opportunity",
  "make money fast",
  "work from home",
  "click here",
  "free money",
  "nigerian prince",
  "inheritance",
  "wire transfer",
  "western union",
  "moneygram",
  "SEO services",
  "backlinks",
  "web traffic",
];

// Suspicious patterns
const SUSPICIOUS_PATTERNS = [
  /\[url=/i, // BBCode links
  /\[link=/i,
  /<a\s+href/i, // HTML links
  /<script/i,
  /href\s*=/i,
  /http[s]?:\/\/[^\s]+/gi, // Count URLs
];

// Schema flexible pour accepter les deux types de formulaires
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  // Formulaire booking (homepage)
  date: z.string().optional(),
  serviceType: z.string().optional(),
  guests: z.string().optional(),
  // Formulaire contact simple (page contact)
  subject: z.string().optional(),
  message: z.string().optional(),
  // Anti-spam fields
  _honeypot: z.string().optional(), // Should be empty
  _timestamp: z.number().optional(), // Form load time
  _turnstileToken: z.string().optional(), // Cloudflare Turnstile
});

function getClientIP(headersList: Headers): string {
  const forwarded = headersList.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headersList.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function containsSpamKeywords(text: string): boolean {
  const lowerText = text.toLowerCase();
  return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword.toLowerCase()));
}

function countUrls(text: string): number {
  const urlPattern = /http[s]?:\/\/[^\s]+/gi;
  const matches = text.match(urlPattern);
  return matches ? matches.length : 0;
}

function isGibberish(text: string): boolean {
  if (!text || text.length < 4) return false;

  const words = text.trim().split(/\s+/);

  for (const word of words) {
    if (word.length < 4) continue;

    // Long single word with no spaces (real names are rarely 15+ chars without spaces)
    if (word.length > 15) return true;

    // Check vowel ratio — gibberish strings have very few vowels
    const letters = word.match(/[a-zA-Z]/g) || [];
    const vowels = word.match(/[aeiouyAEIOUY]/gi) || [];
    if (letters.length > 5 && vowels.length / letters.length < 0.15) return true;

    // Detect random casing patterns (e.g. "IYCCVrgAvxiKuqdvC")
    if (word.length > 6) {
      let transitions = 0;
      for (let i = 1; i < word.length; i++) {
        const prevUpper = word[i - 1] >= "A" && word[i - 1] <= "Z";
        const currUpper = word[i] >= "A" && word[i] <= "Z";
        if (prevUpper !== currUpper) transitions++;
      }
      if (transitions / word.length > 0.4) return true;
    }

    // 3+ consecutive consonants repeated (e.g. "qIrIjrJVSkKMF")
    if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(word)) return true;
  }

  return false;
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // If Turnstile is not configured, skip verification
    if (isDev) console.log("TURNSTILE_SECRET_KEY not set, skipping verification");
    return true;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await response.json();
    return data.success === true;
  } catch {
    console.error("Turnstile verification failed");
    return false;
  }
}

function hasSuspiciousPatterns(text: string): boolean {
  return SUSPICIOUS_PATTERNS.some((pattern) => {
    if (pattern.global) {
      const matches = text.match(pattern);
      // More than 3 URLs is suspicious
      return matches && matches.length > 3;
    }
    return pattern.test(text);
  });
}

function isSpam(data: {
  name: string;
  email: string;
  subject?: string;
  serviceType?: string;
  message?: string;
  _honeypot?: string;
  _timestamp?: number;
}): { isSpam: boolean; reason: string } {
  // 1. Honeypot check - should be empty
  if (data._honeypot && data._honeypot.length > 0) {
    return { isSpam: true, reason: "honeypot" };
  }

  // 2. Time-based check - form should take at least 3 seconds to fill
  if (data._timestamp) {
    const timeTaken = Date.now() - data._timestamp;
    if (timeTaken < 3000) {
      return { isSpam: true, reason: "too_fast" };
    }
  }

  // 3. Gibberish detection — random strings like "IYCCVrgAvxiKuqdvC"
  if (isGibberish(data.name)) {
    return { isSpam: true, reason: "gibberish_name" };
  }
  if (data.subject && isGibberish(data.subject)) {
    return { isSpam: true, reason: "gibberish_subject" };
  }
  if (data.message && isGibberish(data.message)) {
    return { isSpam: true, reason: "gibberish_message" };
  }

  // 4. Enum validation — subject and serviceType must be known values
  if (data.subject && !VALID_SUBJECTS.includes(data.subject)) {
    return { isSpam: true, reason: "invalid_subject" };
  }
  if (data.serviceType && !VALID_SERVICE_TYPES.includes(data.serviceType)) {
    return { isSpam: true, reason: "invalid_service_type" };
  }

  // 5. Check name for spam
  if (containsSpamKeywords(data.name)) {
    return { isSpam: true, reason: "spam_keywords_name" };
  }

  // 6. Check email domain for known spam domains
  const spamDomains = ["tempmail", "throwaway", "guerrillamail", "mailinator", "10minutemail"];
  const emailDomain = data.email.split("@")[1]?.toLowerCase() || "";
  if (spamDomains.some((domain) => emailDomain.includes(domain))) {
    return { isSpam: true, reason: "spam_email_domain" };
  }

  // 7. Check message for spam
  if (data.message) {
    if (containsSpamKeywords(data.message)) {
      return { isSpam: true, reason: "spam_keywords_message" };
    }

    if (hasSuspiciousPatterns(data.message)) {
      return { isSpam: true, reason: "suspicious_patterns" };
    }

    if (countUrls(data.message) > 2) {
      return { isSpam: true, reason: "too_many_urls" };
    }

    // Message too long (likely spam)
    if (data.message.length > 5000) {
      return { isSpam: true, reason: "message_too_long" };
    }
  }

  // 8. Check for all caps (often spam)
  const capsRatio = (data.message?.match(/[A-Z]/g)?.length || 0) / (data.message?.length || 1);
  if (data.message && data.message.length > 50 && capsRatio > 0.7) {
    return { isSpam: true, reason: "excessive_caps" };
  }

  return { isSpam: false, reason: "" };
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers();
    const clientIP = getClientIP(headersList);

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { message: "Trop de demandes. Veuillez réessayer plus tard." },
        { status: 429 }
      );
    }

    const body = await request.json();
    if (isDev) console.log("Received body:", JSON.stringify(body, null, 2));

    // Validate the data
    const validatedData = contactSchema.parse(body);
    if (isDev) console.log("Validated data:", JSON.stringify(validatedData, null, 2));

    // Turnstile verification
    if (validatedData._turnstileToken) {
      const isValidToken = await verifyTurnstileToken(validatedData._turnstileToken);
      if (!isValidToken) {
        console.log(`Turnstile verification failed for IP: ${clientIP}`);
        return NextResponse.json(
          { message: "Demande envoyée avec succès" },
          { status: 200 }
        );
      }
    } else if (process.env.TURNSTILE_SECRET_KEY) {
      // Turnstile is configured but no token provided — likely a bot
      console.log(`No Turnstile token from IP: ${clientIP}`);
      return NextResponse.json(
        { message: "Demande envoyée avec succès" },
        { status: 200 }
      );
    }

    // Spam check
    const spamCheck = isSpam(validatedData);
    if (spamCheck.isSpam) {
      console.log(`Spam detected from IP ${clientIP}: ${spamCheck.reason}`, {
        name: validatedData.name,
        email: validatedData.email,
      });
      // Return success to not alert spammers, but don't process
      return NextResponse.json(
        { message: "Demande envoyée avec succès" },
        { status: 200 }
      );
    }

    // Clean data (remove anti-spam fields)
    const cleanData = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      date: validatedData.date,
      serviceType: validatedData.serviceType,
      guests: validatedData.guests,
      subject: validatedData.subject,
      message: validatedData.message,
    };

    // Determine form type
    const isBookingForm = !!(cleanData.date && cleanData.serviceType && cleanData.guests);

    // Log the data (dev only)
    if (isDev) {
      console.log("New contact form submission:", cleanData);
      console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceTypeLabels: Record<string, string> = {
      // Booking form types
      villa: "Villa privée",
      yacht: "Yacht / Bateau",
      event: "Événement",
      buffet: "Buffet / Réception",
      // Menu pages
      "surf-turf-menu": "Menu Surf & Turf",
      "bourgogne-menu": "Menu Bourguignon",
      "caribbean-menu": "Menu Caribéen",
      "mediterranean-menu": "Menu Méditerranéen",
      "gourmet-menu": "Menu Gastronomique",
      "weekly-menu": "Menu Semaine",
      "grill-menu": "Menu Grill",
      // Service pages
      "breakfast-brunch": "Breakfast & Brunch",
      "buffet-patisserie": "Buffet Pâtisserie",
      "gourmet-platters": "Plateaux Gourmands",
      "salads-tapas-buffet": "Salades, Tapas & Buffet",
      "wine": "Sélection Vins",
      "buffets": "Page Buffets",
      "floater-contact": "Floater Contact",
      "chefs": "Page Chefs",
      "private-chef-services": "Services Chef Privé",
      "book-your-chef-in-saint-martin": "Réserver un Chef",
    };

    const subjectLabels: Record<string, string> = {
      villa: "Chef privé en villa",
      yacht: "Chef privé à bord",
      week: "Forfait semaine",
      event: "Événement / Traiteur",
      other: "Autre demande",
    };

    // Format date for display (only for booking form)
    const formattedDate = cleanData.date
      ? new Date(cleanData.date).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

    // Build email subject based on form type
    const pageOrigin = cleanData.serviceType ? serviceTypeLabels[cleanData.serviceType] || cleanData.serviceType : null;
    const emailSubject = isBookingForm
      ? `🍽️ Nouvelle réservation — ${cleanData.name} | ${serviceTypeLabels[cleanData.serviceType!] || cleanData.serviceType} | ${cleanData.guests} pers.`
      : `📩 Nouveau message — ${cleanData.name} | ${subjectLabels[cleanData.subject!] || cleanData.subject}${pageOrigin ? ` | ${pageOrigin}` : ''}`;

    const { error } = await resend.emails.send({
      from: `${siteInfo.name} <${contactInfo.emailFrom}>`,
      to: contactInfo.email,
      replyTo: cleanData.email,
      subject: emailSubject,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #0C0A09; padding: 40px 40px 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #D4A574; font-size: 28px; font-weight: 300; letter-spacing: 2px;">
                ${siteInfo.name.toUpperCase()}
              </h1>
              <p style="margin: 10px 0 0 0; color: #A8A29E; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                Nouvelle demande de réservation
              </p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #D4A574; padding: 15px 40px; text-align: center;">
              <p style="margin: 0; color: #0C0A09; font-size: 14px; font-weight: 600;">
                ${isBookingForm
                  ? `📅 ${formattedDate} • ${cleanData.guests} convives • ${serviceTypeLabels[cleanData.serviceType!] || cleanData.serviceType}`
                  : `📩 ${subjectLabels[cleanData.subject!] || cleanData.subject}${cleanData.serviceType ? ` • via ${serviceTypeLabels[cleanData.serviceType] || cleanData.serviceType}` : ''}`
                }
              </p>
            </td>
          </tr>

          <!-- Client Info -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 25px 0; color: #0C0A09; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
                👤 Informations client
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nom</span><br>
                    <span style="color: #0C0A09; font-size: 16px; font-weight: 500;">${cleanData.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span><br>
                    <a href="mailto:${cleanData.email}" style="color: #D4A574; font-size: 16px; text-decoration: none;">${cleanData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Téléphone</span><br>
                    <a href="tel:${cleanData.phone}" style="color: #D4A574; font-size: 16px; text-decoration: none;">${cleanData.phone}</a>
                  </td>
                </tr>
              </table>

              ${isBookingForm ? `
              <h2 style="margin: 35px 0 25px 0; color: #0C0A09; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
                🍽️ Détails de la réservation
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAFAF9; border-radius: 8px; padding: 20px;">
                <tr>
                  <td style="padding: 15px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding: 8px 0;">
                          <span style="color: #888; font-size: 11px; text-transform: uppercase;">Date souhaitée</span><br>
                          <span style="color: #0C0A09; font-size: 15px; font-weight: 500;">${formattedDate}</span>
                        </td>
                        <td width="50%" style="padding: 8px 0;">
                          <span style="color: #888; font-size: 11px; text-transform: uppercase;">Type de prestation</span><br>
                          <span style="color: #0C0A09; font-size: 15px; font-weight: 500;">${serviceTypeLabels[cleanData.serviceType!] || cleanData.serviceType}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding: 8px 0;">
                          <span style="color: #888; font-size: 11px; text-transform: uppercase;">Nombre de convives</span><br>
                          <span style="color: #0C0A09; font-size: 15px; font-weight: 500;">${cleanData.guests} personnes</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              ` : `
              <h2 style="margin: 35px 0 25px 0; color: #0C0A09; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
                📋 Objet de la demande
              </h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAFAF9; border-radius: 8px;">
                <tr>
                  <td style="padding: 20px;">
                    <span style="color: #0C0A09; font-size: 15px; font-weight: 500;">${subjectLabels[cleanData.subject!] || cleanData.subject}</span>
                  </td>
                </tr>
              </table>
              `}

              ${cleanData.message ? `
                <h2 style="margin: 35px 0 20px 0; color: #0C0A09; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4A574; padding-bottom: 10px;">
                  💬 Message du client
                </h2>
                <div style="background-color: #FAFAF9; border-left: 4px solid #D4A574; padding: 20px; border-radius: 0 8px 8px 0;">
                  <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6; font-style: italic;">
                    "${cleanData.message.replace(/\n/g, "<br>")}"
                  </p>
                </div>
              ` : ""}

              <!-- Action Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 35px;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right: 10px;">
                          <a href="mailto:${cleanData.email}?subject=Re: Votre demande de réservation - SXM Private Chef" style="display: inline-block; background-color: #D4A574; color: #0C0A09; text-decoration: none; padding: 14px 28px; border-radius: 4px; font-size: 14px; font-weight: 600;">
                            ✉️ Répondre par email
                          </a>
                        </td>
                        <td style="padding-left: 10px;">
                          <a href="https://wa.me/${cleanData.phone.replace(/[^0-9]/g, "")}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 4px; font-size: 14px; font-weight: 600;">
                            📱 WhatsApp
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0C0A09; padding: 25px 40px; text-align: center;">
              <p style="margin: 0; color: #A8A29E; font-size: 12px;">
                Demande reçue via <a href="${siteInfo.url}" style="color: #D4A574; text-decoration: none;">${siteInfo.url.replace('https://', '')}</a>
              </p>
              <p style="margin: 8px 0 0 0; color: #666; font-size: 11px;">
                ${contactInfo.address.locality}, ${contactInfo.address.countryName}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Demande envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Données invalides", errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
