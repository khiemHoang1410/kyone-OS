"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { dockItems } from "@/data/navigation";
// 1. Import dữ liệu từ file mới tạo

export function FloatingDock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={cn(
          "flex h-20 items-end gap-5 rounded-2xl px-5 pb-4 border backdrop-blur-xl",
          "bg-zinc-900/90 border-zinc-800",
          "dark:bg-white/90 dark:border-zinc-200",
          "dark:shadow-[0_10px_30px_-10px_rgb(var(--neon-glow)/0.6)]"
        )}
      >
        {/* 2. Dùng dockItems thay vì navItems */}
        {dockItems.map((item) => (
          // Lưu ý: Dùng item.title làm key
          <DockItem key={item.title} mouseX={mouseX} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function DockItem({ mouseX, item }: { mouseX: any; item: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [50, 100, 50]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "aspect-square rounded-full flex items-center justify-center relative group transition-colors duration-200",
          "bg-black/10 border-black/10",
          "dark:bg-white/10 dark:border-white/10",
          "dark:hover:bg-[rgb(var(--neon-accent)/0.5)] hover:border-[rgb(var(--grid-color)/0.9)]",
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: -50, x: "-50%" }}
              exit={{ opacity: 0, y: 2 }}
              className={cn(
                  "absolute left-1/2 -top-2 w-max px-3 py-1.5 rounded-md text-sm pointer-events-none font-bold",
                  "bg-zinc-900/80 text-white dark:bg-white dark:text-black"
              )}
            >
              {/* 3. Sửa item.name thành item.title ở đây nữa */}
              {item.title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="flex items-center justify-center w-full h-full">
          <item.icon className={cn(
            "w-1/2 h-1/2 transition-colors duration-200",
            "text-zinc-400 group-hover:text-[rgb(var(--neon-accent))]",
            "dark:text-zinc-500 dark:group-hover:text-[rgb(var(--neon-accent))]"
          )} />
        </motion.div>

      </motion.div>
    </Link>
  );
}