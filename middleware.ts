import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

// Protecting route via auth token
const protectedRouteIfTokenExist = ["/auth/sign-in", "/auth/sign-up"];
const protectedRouteIfTokenNotExist = [
  "/profile",
  "/profile/user/addressbook",
  "/profile/user/paymentoptions",
];

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // Getting the auth token, then conditionally protecting some route based on token
  const token = await getToken({ req });
  if (token) {
    if (protectedRouteIfTokenExist.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  if (!token) {
    if (protectedRouteIfTokenNotExist.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  }
  return;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - start file with /assets
     * - start file with /fonts
     */
    "/((?!api|_next/static|_next/image|favicon.ico|^/assets|^/fonts).*)/",
  ],
};
