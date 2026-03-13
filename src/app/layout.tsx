import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timeline Pesantren Ramadhan 2026 | MI Islamic Centre Indramayu",
  description: "Timeline kegiatan Pesantren Ramadhan 1447H - Kelas VI Al-Qowiy MI Islamic Centre Indramayu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
