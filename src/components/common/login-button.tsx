"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button onClick={() => signIn("github", { redirectTo: "/redirect"})}>
      Login with GitHub
    </button>
  );
}
