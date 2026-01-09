import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const {handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            const devRole = process.env.DEV_ROLE;

            if (devRole) {
                token.role = devRole;
            } else if (user?.email === "nquy50771@gmail.com") {
                token.role = "admin";
            } else {
                token.role = "user";
            }

            return token;
        },
        async session({ session, token }) {
            session.user.role = token.role as "user" | "admin";
            return session;
        },
    }
})