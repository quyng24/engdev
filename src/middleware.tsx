import { NextResponse } from "next/server";
import { auth } from "./auth/auth";

export default auth((req) => {
    const role = req.auth?.user?.role;
    const path = req.nextUrl.pathname;
    const isPublic = path === "/" || path.startsWith("/login") || path.startsWith("/register");
    const isUser = path.startsWith("user");
    const isAdmin = path.startsWith("login");

    if(role && isPublic) {
        if(role === "admin") {
            return NextResponse.redirect(new URL("/admin/dashboard", req.url));
        }
        return NextResponse.redirect(new URL("/user/dashboard", req.url));
    }

    if (isAdmin && role !== "admin") return NextResponse.redirect(new URL("/403", req.url));

    if(!role && (isUser || isAdmin)) return NextResponse.redirect(new URL("/login", req.url));
    return NextResponse.next();
})

export const config = {
    matcher: ["/", "/login", "/register","/user/:path*", "/admin/:path*"],
};