import type { Metadata } from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";

export const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
export const poppins = Poppins({subsets: ["latin"], variable: "--font-poppins", weight: ["600", "700"]});

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
