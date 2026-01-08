import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EngDev",
  description: "Learn English through real-life situations experienced by programmers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='min-h-screen'
      >
        {children}
      </body>
    </html>
  );
}
