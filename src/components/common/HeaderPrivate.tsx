"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function HeaderPrivate() {
    return (
        <header className="shadow-lg">
            <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-[#0edbca] flex items-end">
                <Image src="/images/logo-header-public.webp" width={50} height={50} alt="Logo Header Public" className="remove-bg"/>
                Learn English
                </Link>
                <div className="flex gap-6">
                <Link href="/admin/lessons" className="hover:text-blue-600">
                    Manage Lessons
                </Link>
                <Link href="/admin/setting" className="hover:text-blue-600">
                    Setting
                </Link>
                <ThemeToggle/>
                <Button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</Button>
                </div>
            </div>
            </nav>
        </header>
    )
}