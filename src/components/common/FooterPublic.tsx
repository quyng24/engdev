export default function FooterPublic() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t px-6 py-4 text-center text-sm text-gray-500">© {currentYear} EngDev</footer>
    )
}