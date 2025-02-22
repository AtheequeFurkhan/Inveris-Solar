import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/signin",
    "/signup",
    "/api/webhooks(.*)",
    "/docs(.*)"
  ],
  
  // Routes that can be ignored by authentication
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+..+)",
    "/api/webhooks(.*)",
    "/_next(.*)",
    "/favicon.ico",
    "/images(.*)"
  ],

  // Optional: Add afterAuth callback for custom authentication logic
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
    return NextResponse.next();
  }
});

// Specify routes that will be matched
export const config = {
  matcher: [
    "/((?!.*\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};