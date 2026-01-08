import type { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github"

export const authConfig: NextAuthConfig = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
    ],
    pages: {
        signIn: 'login',
        error: "/auth/error",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.id = user.id;
            }
            return token;
        },
        async session({session, token}) {
            if(session.user) {
                session.user.id = token.id as string;
            }
            return session;
        }
    }
}