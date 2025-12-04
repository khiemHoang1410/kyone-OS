"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { Home, User, Code, Layers, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Config danh sách menu
const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "/about" },
    { name: "Projects", icon: Code, href: "/projects" },
    { name: "Stack", icon: Layers, href: "/stack" },
    { name: "Contact", icon: Mail, href: "/contact" },
];

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

                // --- CSS TẮC KÈ HOA & NEON ---
                className={cn(
                    "flex h-16 items-end gap-4 rounded-2xl px-4 pb-3",
                    // Sử dụng biến CSS cho màu nền và viền
                    "bg-[rgb(var(--dock-bg)/0.6)] border-[rgb(var(--dock-border)/0.3)]",
                    "backdrop-blur-xl border",
                    // Hiệu ứng NEON nhẹ cho cả cái Dock (Shadow màu neon)
                    "shadow-[0_10px_30px_-10px_rgb(var(--neon-glow)/0.2)]"
                )}
            >
                {navItems.map((item) => (
                    <DockItem key={item.name} mouseX={mouseX} item={item} />
                ))}
            </motion.div>
        </div>
    );
}

// Copy đè hàm DockItem này vào code cũ là xong
function DockItem({ mouseX, item }: { mouseX: any; item: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    // Tinh chỉnh lại lò xo một tí cho nó "nảy" hơn
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
                    "aspect-square rounded-full flex items-center justify-center relative group",
                    // QUAN TRỌNG: Dùng transition-colors thay vì transition-all
                    // Để CSS không đánh nhau với Framer Motion
                    "transition-colors duration-200",

                    // Màu nền & Viền (Dùng biến CSS)
                    "bg-[rgb(var(--item-bg)/0.8)] border border-[rgb(var(--item-border)/0.2)]",

                    // Hover Effects (Neon)
                    "hover:bg-[rgb(var(--neon-glow)/0.15)] hover:border-[rgb(var(--neon-glow)/0.5)]",
                    "hover:shadow-[0_0_20px_0_rgb(var(--neon-glow)/0.4)]"
                )}
            >
                {/* Tooltip */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: -50, x: "-50%" }}
                            exit={{ opacity: 0, y: 2 }}
                            className="bg-background/50 absolute left-1/2 -top-1 w-max px-2 py-1 rounded-2xl text-xl pointer-events-none font-medium"
                        >
                            {item.name}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div className="flex items-center justify-center w-full h-full">
                    <item.icon className={cn(
                        "w-1/2 h-1/2 transition-colors duration-200", // Chỉ transition màu
                        "text-[rgb(var(--icon-color))] group-hover:text-[rgb(var(--neon-glow))]"
                    )} />
                </motion.div>

            </motion.div>
        </Link>
    );
}