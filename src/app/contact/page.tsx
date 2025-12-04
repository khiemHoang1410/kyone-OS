"use client";

import { motion } from "framer-motion";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { ContactForm } from "@/components/dashboard/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pb-32 pt-20 px-4">
      {/* Background Grid */}
      <AnimatedGrid />

      <main className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- CỘT TRÁI: TEXT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              Live Signal
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-800 dark:text-zinc-100 mb-4">
              Let's Start a <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Project Together</span>
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md mx-auto lg:mx-0">
              Bạn có ý tưởng táo bạo? Hay chỉ muốn rủ tôi đi uống bia? Gửi tín hiệu ngay, tôi đang trực tổng đài 24/7.
            </p>
          </div>

          {/* Contact Info (Trang trí) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
             <ContactItem icon={Mail} title="Email" value="zehel@gmail.com" delay={0.1} />
             <ContactItem icon={Phone} title="Phone" value="+84 999 999 999" delay={0.2} />
             <ContactItem icon={MapPin} title="Base" value="Saigon, VN" delay={0.3} />
          </div>
        </motion.div>

        {/* --- CỘT PHẢI: FORM --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

      </main>
    </div>
  );
}

// Component con hiển thị thông tin liên hệ nhỏ
function ContactItem({ icon: Icon, title, value, delay }: { icon: any, title: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay }}
      className="flex flex-col items-center lg:items-start p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800"
    >
      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3">
        <Icon size={18} />
      </div>
      <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">{title}</div>
      <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{value}</div>
    </motion.div>
  )
}