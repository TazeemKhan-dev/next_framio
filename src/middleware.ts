// import { clerkMiddleware } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


const isProtectedRoute = createRouteMatcher(['/', '/api/webhooks/clerk', '/api/webhooks/stripe'])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
