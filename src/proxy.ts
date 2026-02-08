import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "sxmprivatechef.com";

export default function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // Redirect .netlify.app (and any non-canonical host) to the canonical domain
  if (host && !host.includes(CANONICAL_HOST) && !host.includes("localhost")) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and internal Next.js routes
    "/((?!_next/static|_next/image|favicon.ico|images/|icons/|manifest.json|llms.txt|llms-full.txt|robots.txt|sitemap.xml).*)",
  ],
};
