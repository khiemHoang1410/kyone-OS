"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
      {/* 1. NỀN GỐC */}
      <div className="absolute inset-0 bg-white dark:bg-black" />

      {/* 2. LỚP LƯỚI CHUYỂN ĐỘNG */}
      <motion.div 
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: ["0 0", "40px 40px"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #888 1px, transparent 1px),
            linear-gradient(to bottom, #888 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 3. VIGNETTE (Làm tối góc để tập trung vào giữa) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,var(--background)_90%)]" />
    </div>
  );
}