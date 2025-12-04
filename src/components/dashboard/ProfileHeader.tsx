"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowRight, Download, Cpu, Coffee, Bug } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Hiệu ứng Glow (Hào quang) phía sau khi hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      
      {/* --- CÁI CỬA SỔ OS (CARD) --- */}
      <Card className={cn(
        "relative overflow-hidden rounded-3xl border",
        // Glassmorphism xịn (Light/Dark mode)
        "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md", 
        "border-white/20 dark:border-white/10",
        "shadow-xl"
      )}>
        
        {/* --- WINDOW CONTROLS (3 nút Mac OS) --- */}
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
        </div>

        {/* --- DECORATION (Chữ System chìm) --- */}
        <div className="absolute top-3 right-5 text-[10px] font-mono font-bold tracking-widest text-zinc-400/50 uppercase select-none">
          System Info_v2.0
        </div>

        <div className="p-8 pt-12 flex flex-col md:flex-row items-center gap-8 relative z-10">
          
          {/* 1. AVATAR KHUNG TRANH (Interactive) */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative"
          >
            {/* Vòng tròn xoay xoay */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-400/30 animate-[spin_10s_linear_infinite]" />
            
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 overflow-hidden relative group/avatar">
               {/* Icon Terminal */}
               <Terminal size={48} className="text-white relative z-10" />
               
               {/* Hiệu ứng quét sáng khi hover avatar */}
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/avatar:translate-y-0 transition-transform duration-300 rounded-full" />
            </div>

            {/* Status Online */}
            <div className="absolute bottom-1 right-1 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center">
               <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-zinc-900 animate-pulse" />
            </div>
          </motion.div>

          {/* 2. INFO AREA */}
          <div className="flex-1 text-center md:text-left space-y-5">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Freelance
              </motion.div>
              
              <h2 className="text-4xl font-black tracking-tight text-zinc-800 dark:text-zinc-100">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Zehel</span> <span className="inline-block hover:animate-waving-hand cursor-default origin-[70%_70%]">👋</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-lg font-medium">
                Full-stack Developer <span className="text-zinc-300 px-2">|</span> UI/UX Enthusiast
              </p>
            </div>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed">
              Chào mừng đến với <span className="font-semibold text-zinc-900 dark:text-white">Zehel OS</span>. 
              Đây là khu vườn số (Digital Garden) nơi tôi trồng bug 🐛 và gặt hái kinh nghiệm.
            </p>

            {/* --- STATS VUI NHỘN (Đúng chất OS) --- */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-md mx-auto md:mx-0">
               <StatBadge icon={Cpu} label="Focus" value="ADHD 100%" color="text-red-500" />
               <StatBadge icon={Coffee} label="Fuel" value="Coffee" color="text-yellow-500" />
               <StatBadge icon={Bug} label="Bugs" value="Feature" color="text-green-500" />
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Button className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-transform shadow-lg shadow-zinc-500/20">
                Contact Me <ArrowRight size={16} className="ml-2"/>
              </Button>
              <Button variant="outline" className="rounded-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 backdrop-blur-sm">
                <Download size={16} className="mr-2"/> View CV
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Component con hiển thị chỉ số (Stats)
function StatBadge({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
  return (
    <div className="flex flex-col items-center md:items-start p-2 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
       <div className="flex items-center gap-1.5 text-xs text-zinc-500 uppercase font-bold tracking-wider mb-1">
          <Icon size={12} className={color} /> {label}
       </div>
       <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          {value}
       </div>
    </div>
  )
}