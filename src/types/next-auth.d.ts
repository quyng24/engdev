import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: "admin" | "user";
    } & DefaultSession["user"];
  }

  interface User {
    role: "admin" | "user";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "admin" | "user";
  }
}
