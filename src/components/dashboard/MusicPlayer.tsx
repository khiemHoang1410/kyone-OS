"use client";

import { Play, SkipBack, SkipForward, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function MusicPlayer() {
  return (
    <div className="h-full flex flex-col justify-between relative overflow-hidden p-6">
      
      {/* Background mờ ảo (Album Art Blur) */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 z-0" />
      
      {/* --- INFO BÀI HÁT --- */}
      <div className="relative z-10 flex gap-4 items-center">
        {/* Album Cover xoay xoay */}
        <div className="relative w-12 h-12 shrink-0">
           <div className="absolute inset-0 rounded-full bg-zinc-900 border-2 border-zinc-800 animate-[spin_8s_linear_infinite]" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-violet-500" />
           </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-zinc-800 dark:text-white leading-tight">
            Fixing Bugs at 2AM
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Lofi Girl • Chill Beats
          </p>
        </div>
      </div>

      {/* --- SÓNG NHẠC (VISUALIZER) --- */}
      <div className="relative z-10 flex items-end justify-center gap-1 h-8 my-2">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-violet-500/80 rounded-full"
            animate={{
              height: ["20%", "80%", "40%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* --- CONTROLS --- */}
      <div className="relative z-10 flex justify-between items-center mt-2">
         <Heart size={18} className="text-zinc-400 hover:text-pink-500 hover:fill-pink-500 transition-colors cursor-pointer" />
         
         <div className="flex gap-4 items-center">
            <SkipBack size={20} className="text-zinc-600 dark:text-zinc-300 hover:text-white cursor-pointer" />
            
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-violet-500/30">
               <Play size={18} fill="currentColor" className="ml-0.5" />
            </div>

            <SkipForward size={20} className="text-zinc-600 dark:text-zinc-300 hover:text-white cursor-pointer" />
         </div>
      </div>
    </div>
  );
}