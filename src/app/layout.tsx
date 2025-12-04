import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar"; // <--- Import vào

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zehel OS",
  description: "Personal Workspace of Zehel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
          {/* Sidebar nằm cố định bên trái */}
          <Sidebar />

          {/* Nội dung chính nằm bên phải, cách lề trái 64 (w-64) bằng độ rộng sidebar */}
          <main className="flex-1 ml-64 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}