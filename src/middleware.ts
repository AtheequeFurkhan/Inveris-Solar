import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/api/webhooks(.*)",
    "/docs(.*)"
  ],
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+..+)",
    "/api/webhooks(.*)",
    "/favicon.ico",
    "/images(.*)"
  ],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};