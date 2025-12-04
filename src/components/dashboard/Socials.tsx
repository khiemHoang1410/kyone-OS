"use client";

import Link from "next/link";
import { Github, Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Config màu sắc chuẩn Brand cho từng thằng
const socials = [
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/yourusername",
    // Gradient đen xám ngầu lòi
    gradient: "from-zinc-700 to-black",
    shadow: "shadow-zinc-500/20"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    // Xanh LinkedIn chuẩn
    gradient: "from-blue-500 to-blue-700",
    shadow: "shadow-blue-500/20"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com",
    // Xanh Facebook
    gradient: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-400/20"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:zehel@gmail.com",
    // Đỏ Gmail
    gradient: "from-red-400 to-rose-600",
    shadow: "shadow-red-500/20"
  },
];

export function Socials() {
  return (
    <Card className={cn(
      "h-full flex flex-col justify-between overflow-hidden border",
      // Glassmorphism đồng bộ với các card khác
      "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md",
      "border-zinc-200 dark:border-zinc-800"
    )}>
      <CardContent className="p-6 h-full flex flex-col">
        {/* Title có icon xoay nhẹ */}
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Connect</h3>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(var(--neon-accent))] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[rgb(var(--neon-accent))]"></span>
          </span>
        </div>

        {/* Lưới nút bấm */}
        <div className="grid grid-cols-1 gap-3 mb-auto">
          {socials.map((item, idx) => (
            <Link key={item.name} href={item.url} target="_blank" className="w-full">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative group flex items-center gap-3 p-3 rounded-xl border cursor-pointer overflow-hidden transition-all duration-300",
                  // Mặc định: Nền nhạt
                  "bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700",
                  // Hover: Shadow màu tương ứng
                  `hover:shadow-lg ${item.shadow} hover:border-transparent`
                )}
              >
                {/* LỚP MÀU NỀN (Ẩn đi, Hover mới hiện ra) */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r",
                  item.gradient
                )} />

                {/* ICON */}
                <div className="relative z-10 p-1.5 rounded-lg bg-white/20 text-zinc-600 dark:text-zinc-400 group-hover:text-white transition-colors">
                  <item.icon size={18} />
                </div>

                {/* TEXT */}
                <span className="relative z-10 font-semibold text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-white transition-colors">
                  {item.name}
                </span>

                {/* Arrow Icon nhỏ xíu ở góc (Trang trí) */}
                <ArrowUpRight className="absolute top-2 right-2 w-3 h-3 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-1 group-hover:translate-x-0" />

              </motion.div>
            </Link>
          ))}
        </div>

        {/* Status Bar "Open to Work" - Nhìn như terminal log */}
        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/50">
          <div className="relative overflow-hidden p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group cursor-default">
            {/* Hiệu ứng quét sáng chạy qua chạy lại */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-50" />
                </div>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}