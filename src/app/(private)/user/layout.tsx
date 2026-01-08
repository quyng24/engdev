import { auth } from "@/auth/auth";
import HeaderPrivate from "@/components/common/HeaderPrivate";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function UserLayout({children}: {children: ReactNode}) {
  const session = await auth();

  if (!session) redirect("/login");
  if (session.user.role !== "user" && session.user.role !== "admin") redirect("/403");
  return (
    <>
      <HeaderPrivate/>
      <main>{children}</main>
    </>
  );
}
