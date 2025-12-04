"use client";

import { useState, useEffect } from "react";
import { Wifi, Battery, Command } from "lucide-react";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [time, setTime] = useState<string>("");

  // Logic đồng hồ nhảy giây
  useEffect(() => {
    // Fix hydration error bằng cách chỉ chạy ở client
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false 
      }));
    };
    
    updateTime(); // Chạy ngay lập tức
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 w-full h-8 z-50 flex items-center justify-between px-4 text-xs font-medium select-none",
      // Glassmorphism nhẹ nhàng + Border dưới
      "bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/10 dark:border-white/5",
      "text-zinc-600 dark:text-zinc-300"
    )}>
      
      {/* TRÁI: Logo / Apple Menu */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 font-bold hover:text-black dark:hover:text-white cursor-pointer transition-colors">
          <Command size={14} />
          <span>Zehel OS</span>
        </div>
        
        {/* Menu giả trân cho giống OS */}
        <div className="hidden md:flex gap-4">
           {["File", "Edit", "View", "Go", "Window", "Help"].map(item => (
             <span key={item} className="hover:bg-white/20 px-2 py-0.5 rounded cursor-default transition-colors">
               {item}
             </span>
           ))}
        </div>
      </div>

      {/* PHẢI: Status Icons */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
           <Wifi size={14} />
           <Battery size={14} className="rotate-90" />
        </div>
        
        {/* Đồng hồ */}
        <div className="w-10 text-center">
           {time || "--:--"}
        </div>
      </div>
    </div>
  );
}