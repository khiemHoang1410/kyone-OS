"use client";

import { ProfileHeader } from "@/components/dashboard/ProfileHeader";
import { TechStack } from "@/components/dashboard/TechStack";
import { ProjectsSection } from "@/components/dashboard/Projects";
import { Socials } from "@/components/dashboard/Socials";
import { motion, Variants } from "framer-motion"; // Import Variants để fix lỗi đỏ
import { cn } from "@/lib/utils";

// --- CẤU HÌNH ANIMATION ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  },
};

export default function Home() {
  return (
    // Wrapper ngoài cùng giữ chiều cao
    <div className="relative min-h-screen w-full">

      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none
    /* 1. NỀN GỐC */
    bg-white dark:bg-black
    
    /* 2. LỚP LƯỚI (Gọi đúng tên vừa tạo) */
    grid-light-test dark:grid-dark-test">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* --- NỘI DUNG CHÍNH (Nằm đè lên trên background) --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto p-6 md:p-12 space-y-12 pb-40"
      >

        {/* Header Title */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
            Hello, It's Zehel!
          </h1>
          <span className="text-3xl animate-bounce">👋</span>
        </motion.div>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard className="md:col-span-2 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
            <ProfileHeader />
          </BentoCard>

          <BentoCard className="md:col-span-1 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20">
            <Socials />
          </BentoCard>
        </section>

        {/* Skills */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-bold dark:text-zinc-100 text-zinc-800">My Arsenal</h3>
            <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-700">
              Đồ chơi công nghệ
            </span>
          </div>
          <BentoCard className="p-0 border-none bg-transparent hover:shadow-none hover:scale-100">
            <TechStack />
          </BentoCard>
        </motion.section>

        {/* Projects */}
        <motion.section variants={itemVariants}>
          <h3 className="text-xl font-bold mb-6 dark:text-zinc-100 text-zinc-800 flex items-center gap-2">
            Cool Stuff I Built
            <span className="text-sm font-normal text-zinc-500">(Nơi chứa bug)</span>
          </h3>
          <ProjectsSection />
        </motion.section>

      </motion.div>
    </div>
  );
}

// Component vỏ bọc BentoCard
function BentoCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border p-6",
        "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm",
        "border-zinc-200 dark:border-zinc-800",
        "shadow-sm hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}