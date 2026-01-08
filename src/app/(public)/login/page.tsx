import { auth } from "@/auth/auth";
import LoginButton from "@/components/common/login-button";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user.role === "admin") {
    redirect("/admin/dashboard");
  }

  if (session?.user.role === "user") {
    redirect("/user/dashboard");
  }

  return <LoginButton />;
}
