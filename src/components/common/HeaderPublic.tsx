import Image from "next/image";
import Link from "next/link";

export default function HeaderPublic() {
    return (
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#0edbca] flex items-end">
              <Image src="/images/logo-header-public.webp" width={50} height={50} alt="Logo Header Public"/>
              Learn English
            </Link>
            <div className="flex gap-6">
              <Link href="/login" className="bg-[#0edbca] px-5 py-2 rounded text-white text-lg font-bold">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
}