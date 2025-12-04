import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/layout/FloatingDock"; // Đảm bảo đường dẫn đúng
import { ThemeProvider } from "@/features/theme/theme-provider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { TopBar } from "@/components/layout/TopBar";

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
    <html lang="en" className="scroll-smooth dark">
      {/* 1. antialiased: Chữ mượt.
         2. overflow-x-hidden: CẤM nội dung lòi sang 2 bên (Fix lỗi scroll ngang).
         3. selection:bg-cyan-500/30: Bôi đen văn bản có màu đẹp (bonus).
      */}
      <body className={`${inter.className} antialiased overflow-x-hidden selection:bg-cyan-500/30`}>

        {/* Main để w-full để thằng con page.tsx được bung lụa thoải mái */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="...">
            {children}
            <TopBar />
            <CommandMenu />
            <ModeToggle />
            <FloatingDock />
          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}