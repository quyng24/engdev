import Link from "next/link";

export default function HeaderPublic() {
    return (
        <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Learn English
            </Link>
            <div className="flex gap-6">
              <Link href="/login" className="hover:text-blue-600">
                Login
              </Link>
              <Link href="/register" className="hover:text-blue-600">
                Register
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
}