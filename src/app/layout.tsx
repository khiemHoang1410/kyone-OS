import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Hoặc font ngài thích
import "./globals.css";
import { FloatingDock } from "@/components/layout/FloatingDock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zehel OS",
  description: "Playful Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        {/* Bỏ Sidebar, chỉ còn children */}
        <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto relative">
          {children}
          {/* Tí nữa mình nhét cái Dock vào đây sau */}
          <FloatingDock />
        </main>
      </body>
    </html>
  );
}