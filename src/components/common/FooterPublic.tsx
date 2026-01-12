export default function FooterPublic() {
    const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-16 text-sm">
      <div className="text-center text-md md:text-lg text-muted">
        © {year} English Pathways Inc. All rights reserved.
      </div>
    </footer>
  );
}
