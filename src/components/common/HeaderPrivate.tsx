"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function HeaderPrivate() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                Learn English
                </Link>
                <div className="flex gap-6">
                <Link href="/admin/lessons" className="hover:text-blue-600">
                    Manage Lessons
                </Link>
                <Link href="/admin/setting" className="hover:text-blue-600">
                    Setting
                </Link>
                <button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</button>
                </div>
            </div>
            </nav>
        </header>
    )
}