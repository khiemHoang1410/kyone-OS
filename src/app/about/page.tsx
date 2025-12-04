"use client";

import { motion } from "framer-motion";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";
import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/dashboard/Timeline";
import { aboutData } from "@/data/about";
import { cn } from "@/lib/utils";
import { User, Gamepad2, Coffee, Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full pb-40">
      <AnimatedGrid />

      <main className="relative z-10 max-w-4xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* --- 1. HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            <User size={12} />
            User Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-800 dark:text-zinc-100">
            {aboutData.title}
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            {aboutData.description}
          </p>
        </motion.div>

        {/* --- 2. BIO & STATS (Bento Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Cột trái: Bio Text */}
          <Card className="md:col-span-2 p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-zinc-200 dark:border-zinc-800">
            <div className="space-y-4">
              {aboutData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 flex gap-4 items-start">
               <Quote className="text-indigo-500 shrink-0 fill-indigo-500/20" size={24} />
               <p className="text-sm text-indigo-700 dark:text-indigo-300 italic font-medium">
                 "Code là nghệ thuật, còn người code là nghệ sĩ... hoặc là nạn nhân của deadline."
               </p>
            </div>
          </Card>

          {/* Cột phải: Stats & Fun facts */}
          <div className="space-y-6">
             {/* Stats Card */}
             <Card className="p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-zinc-200 dark:border-zinc-800">
                <h3 className="text-sm font-bold uppercase text-zinc-400 mb-4 tracking-wider">Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {aboutData.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-black text-zinc-800 dark:text-zinc-100">{stat.value}</div>
                      <div className="text-xs text-zinc-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
             </Card>

             {/* Hobbies Card */}
             <Card className="p-6 bg-linear-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20">
                <h3 className="text-sm font-bold uppercase text-pink-600/70 dark:text-pink-400/70 mb-4 tracking-wider flex items-center gap-2">
                  <Gamepad2 size={16} /> Side Quests
                </h3>
                <div className="flex flex-wrap gap-2">
                   {["Gaming", "Gym", "Music", "Travel", "Movie"].map((hobby) => (
                     <span key={hobby} className="px-2 py-1 rounded-md bg-white/50 dark:bg-black/20 text-xs font-medium text-pink-700 dark:text-pink-300">
                       {hobby}
                     </span>
                   ))}
                </div>
             </Card>
          </div>
        </div>

        {/* --- 3. EXPERIENCE TIMELINE --- */}
        <div className="pt-10">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-zinc-800 dark:text-zinc-100">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <Coffee size={18} />
            </span>
            History Log
          </h2>
          <Timeline />
        </div>

      </main>
    </div>
  );
}