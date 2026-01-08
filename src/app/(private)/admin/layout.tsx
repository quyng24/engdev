import { auth } from "@/auth/auth";
import HeaderPrivate from "@/components/common/HeaderPrivate";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminLayout({children}: {children: ReactNode}) {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/403");
  }

  return (
    <>
      <HeaderPrivate/>
      <main>{children}</main>
    </>
  );
}
