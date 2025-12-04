"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Fix lỗi hydration (chờ client load xong mới hiện nút)
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Hoặc render một cái nút placeholder
    }

    const isDark = theme === "dark";

    return (
        <motion.button
            // Vị trí: Góc phải trên cùng (Fixed)
            className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300"

            // Style màu sắc theo theme
            style={{
                backgroundColor: isDark ? "rgba(30, 30, 30, 0.5)" : "rgba(255, 255, 255, 0.5)",
                boxShadow: isDark
                    ? "0 0 20px -5px rgba(255, 165, 0,1)"   // Glow cam khi sáng
                    : "0 0 20px -5px rgba(100, 100, 255,1)"  // Glow xanh khi tối
            }}

            onClick={() => setTheme(isDark ? "light" : "dark")}

            // Animation khi bấm nút (Nút nhún xuống 1 cái)
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {/* --- MẶT TRỜI (Sun) --- */}
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 0 : 1, // Tối thì thu nhỏ về 0
                        rotate: isDark ? 90 : 0, // Tối thì xoay đi chỗ khác
                        opacity: isDark ? 0 : 1
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute inset-0"
                >
                    <Sun className="w-6 h-6 text-orange-500 fill-orange-500/20" />
                </motion.div>

                {/* --- MẶT TRĂNG (Moon) --- */}
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0, // Tối thì phóng to ra
                        rotate: isDark ? 0 : -90, // Tối thì xoay về chính diện
                        opacity: isDark ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute inset-0"
                >
                    <Moon className="w-6 h-6 text-indigo-400 fill-indigo-400/20" />
                </motion.div>
            </div>

            {/* Đường viền trang trí xoay vòng vòng (Option thêm cho VIP) */}
            <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
        </motion.button>
    );
}