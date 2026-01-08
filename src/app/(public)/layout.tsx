import FooterPublic from "@/components/common/FooterPublic";
import HeaderPublic from "@/components/common/HeaderPublic";
import { ReactNode } from "react";

export default function PublicLayout({children}: {children: ReactNode}) {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderPublic/>
            <main className="flex-1">{children}</main>
            <FooterPublic/>
        </div>
    )
}