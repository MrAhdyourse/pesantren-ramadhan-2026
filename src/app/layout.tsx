import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Portal Ramadhan 2026 | MI Islamic Centre Indramayu",
  description: "Portal Digital Pesantren Ramadhan 1447H - Kelas VI Al-Qowiy MI Islamic Centre Indramayu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`antialiased bg-[#FDFCF8] min-h-screen font-sans`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
