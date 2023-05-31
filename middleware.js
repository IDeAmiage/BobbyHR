import { NextResponse } from "next/server"
import { initPocketBaseSSR } from "@/lib/pocketbasessr";

export async function middleware(req) {
  const pb = await initPocketBaseSSR(req);
  const isAuth = pb.authStore.isValid;
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(
      new URL(`/internal`, req.url)
    );
  }

  if (!isAuth && !isAuthPage) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }

    return NextResponse.redirect(
      new URL(`/auth`, req.url)
    );
  }
}

export const config = {
  matcher: ['/internal/:path*', '/internal', '/auth'],
};
