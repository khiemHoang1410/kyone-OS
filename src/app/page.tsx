"use client";

import { ProfileHeader } from "@/components/dashboard/ProfileHeader";
import { TechStack } from "@/components/dashboard/TechStack";
import { ProjectsSection } from "@/components/dashboard/Projects";
import { Socials } from "@/components/dashboard/Socials";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Cấu hình Animation xuất hiện lần lượt (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Mỗi thằng con hiện cách nhau 0.1s
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
};

export default function Home() {
  return (
    // 1. BACKGROUND CHẤM BI (DOT PATTERN)
    // dark:bg-grid-white/[0.05] nghĩa là vẽ lưới chấm trắng mờ 5%
    <div className="relative min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
      
      {/* Lớp phủ mờ (Radial Mask) để làm dịu background ở giữa */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Nội dung chính */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto p-8 space-y-12 pb-40" // pb-40 để né cái Dock ra
      >
        
        {/* --- HEADER TITLE VUI NHỘN --- */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
           <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
             Hello, It's Zehel! 
           </h1>
           <span className="text-3xl animate-bounce">👋</span> {/* Icon vẫy tay nhảy tưng tưng */}
        </motion.div>

        {/* --- BENTO GRID SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cục Profile: Hover vào hơi nghiêng và sáng viền */}
          <BentoCard className="md:col-span-2 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
            <ProfileHeader />
          </BentoCard>
          
          {/* Cục Social: Style khác tí cho đỡ chán */}
          <BentoCard className="md:col-span-1 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20">
            <Socials />
          </BentoCard>
        </section>

        {/* --- SKILLS SECTION --- */}
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

        {/* --- PROJECTS SECTION --- */}
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

// --- COMPONENT CON: BENTO CARD (Cái vỏ bọc thần thánh) ---
// Tác dụng: Tạo khung viền, hiệu ứng hover, glassmorphism
function BentoCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }} // Hover vào phóng to nhẹ 2%
      whileTap={{ scale: 0.98 }}   // Bấm vào co lại
      className={cn(
        "relative overflow-hidden rounded-3xl border p-6",
        // Glassmorphism cơ bản
        "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm", 
        "border-zinc-200 dark:border-zinc-800",
        // Shadow nhẹ
        "shadow-sm hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}