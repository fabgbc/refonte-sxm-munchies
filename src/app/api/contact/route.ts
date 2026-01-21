import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { headers } from "next/headers";

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour

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

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  date: z.string().min(1),
  serviceType: z.string().min(1),
  guests: z.string().min(1),
  message: z.string().optional(),
  // Anti-spam fields
  _honeypot: z.string().optional(), // Should be empty
  _timestamp: z.number().optional(), // Form load time
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

  // 3. Check name for spam
  if (containsSpamKeywords(data.name)) {
    return { isSpam: true, reason: "spam_keywords_name" };
  }

  // 4. Check email domain for known spam domains
  const spamDomains = ["tempmail", "throwaway", "guerrillamail", "mailinator", "10minutemail"];
  const emailDomain = data.email.split("@")[1]?.toLowerCase() || "";
  if (spamDomains.some((domain) => emailDomain.includes(domain))) {
    return { isSpam: true, reason: "spam_email_domain" };
  }

  // 5. Check message for spam
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

  // 6. Check for all caps (often spam)
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

    // Validate the data
    const validatedData = contactSchema.parse(body);

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
      message: validatedData.message,
    };

    // Log the data (in production, you would send an email here)
    console.log("New contact form submission:", cleanData);

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'SXM Private Chef <contact@sxmprivatechef.com>',
    //   to: 'sxmprivatechef@gmail.com',
    //   subject: `Nouvelle demande de ${cleanData.name}`,
    //   html: `...`,
    // });

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
