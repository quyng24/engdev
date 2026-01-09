import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";

export default async function RedirectPage() {
  const session = await auth();

  if (session?.user.role === "admin") {
    redirect("/admin/dashboard");
  }

  redirect("/user/dashboard");
}
