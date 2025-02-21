import { clerkMiddleware } from "@clerk/nextjs/server";
 
export default clerkMiddleware({
  // Array of routes to be ignored by the authentication middleware
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  
  // Optional: Prevent middleware running on static files & images
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+..+)",
    "/api/webhooks(.*)",
    "/favicon.ico",
    "/images(.*)",
  ],
});
 
export const config = {
  matcher: [
    // Exclude files with . extension (e.g. images, CSS, JS)
    "/((?!.*\\..*|_next).*)",
    "/(api|trpc)(.*)"
  ],
};