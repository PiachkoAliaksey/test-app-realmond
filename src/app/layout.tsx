import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Media Search App",
  description: "Search your lovely  music, books, and other media just a click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-1 sm:px-4 gap-4 md:gap-8 font-[family-name:var(--font-geist-sans)]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
