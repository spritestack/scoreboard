import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const COOKIE_NAME = "scoreboard_admin";

export function middleware(request: NextRequest) {
  const admin = request.cookies.get(COOKIE_NAME);

  if (!admin) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

