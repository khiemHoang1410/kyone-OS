"use client";

import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";
import { technologies } from "@/data/tech-stack";
// Định nghĩa kiểu dữ liệu cho xịn
interface TechItem {
  name: string;
  icon: string;
  color: string; // Thêm cái này để định màu chủ đạo cho từng tech
  className?: string;
}


const row1 = technologies.slice(0, technologies.length / 2);
const row2 = technologies.slice(technologies.length / 2);

export function TechStack() {
  return (
    <div className="relative flex flex-col gap-8 py-10 overflow-hidden">
      
      {/* Mask fade 2 bên trông mượt hơn */}
      <div className="absolute inset-0 z-10 pointer-events-none [mask-image:linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)] bg-gradient-to-r from-background via-transparent to-background"></div>

      {/* Hàng 1 - Tốc độ vừa phải */}
      <InfiniteLoop direction="left" speed="normal">
        {row1.map((tech, idx) => (
          <TechPill key={idx} tech={tech} />
        ))}
      </InfiniteLoop>

      {/* Hàng 2 - Chậm hơn chút cho nghệ */}
      <InfiniteLoop direction="right" speed="slow">
        {row2.map((tech, idx) => (
          <TechPill key={idx} tech={tech} />
        ))}
      </InfiniteLoop>

    </div>
  );
}

// Logic cuộn giữ nguyên nhưng tối ưu css
function InfiniteLoop({ 
  children, 
  direction = "left", 
  speed = "fast" 
}: { 
  children: React.ReactNode; 
  direction?: "left" | "right"; 
  speed?: "fast" | "normal" | "slow";
}) {
  const speedClass = {
    fast: "duration-[20s]",
    normal: "duration-[40s]",
    slow: "duration-[60s]",
  };

  return (
    <div className="flex overflow-hidden w-full group select-none">
      <div
        className={cn(
          "flex gap-4 pr-4 w-max flex-nowrap",
          direction === "left" ? "animate-scroll" : "animate-scroll-reverse",
          "group-hover:[animation-play-state:paused]", // Dừng khi hover
          // Thay vì hardcode giây trong CSS, ta dùng class utility nếu config tailwind, 
          // nhưng ở đây tui giữ logic animation css thuần bên dưới cho ông dễ hiểu
          speed === "fast" && "animation-duration-[20s]",
          speed === "normal" && "animation-duration-[40s]",
          speed === "slow" && "animation-duration-[60s]"
        )}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

function TechPill({ tech }: { tech: TechItem }) {
  return (
    <div
      style={{ "--glow-color": tech.color } as React.CSSProperties}
      className={cn(
        "shrink-0 whitespace-nowrap",
        "group/pill relative flex items-center gap-3 px-6 py-3 rounded-2xl border cursor-pointer transition-all duration-500",
        
        // --- KHU VỰC FIX MÀU NỀN ---
        
        // 1. Light Mode (Nền sáng): 
        // - Dùng bg-zinc-50 (xám khói cực nhẹ) để tách biệt với nền web trắng tinh.
        // - Thêm shadow-sm để tạo độ nổi nhẹ (depth).
        // - Viền xám nhẹ border-zinc-200.
        "bg-zinc-50 border-zinc-200 shadow-sm",
        
        // 2. Dark Mode (Nền tối):
        // - Giữ style kính mờ cũ vì nó hợp với nền tối.
        "dark:bg-zinc-900/50 dark:border-zinc-800/50",
        
        // --- HIỆU ỨNG HOVER GIỮ NGUYÊN ---
        "hover:border-[var(--glow-color)]",
        "hover:shadow-[0_0_20px_-5px_var(--glow-color)]",
        "hover:-translate-y-1 hover:scale-105",
        
        // Hover vào thì nền sáng lên theo màu brand một chút xíu
        "hover:bg-[var(--glow-color)]/5" 
      )}
    >
      <img 
        src={tech.icon} 
        alt={tech.name} 
        className={cn(
          "w-8 h-8 object-contain transition-transform duration-300 group-hover/pill:scale-110",
          tech.className
        )} 
      />
      
      <span className={cn(
        "text-sm font-bold tracking-wide transition-colors duration-300",
        // Chữ màu đậm hơn tí cho dễ đọc trên nền sáng
        "text-zinc-700 dark:text-zinc-400", 
        "group-hover/pill:text-[var(--glow-color)]" 
      )}>
        {tech.name}
      </span>
    </div>
  );
}