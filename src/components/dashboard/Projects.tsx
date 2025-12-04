"use client";

import Link from "next/link";
import { ExternalLink, Github, FolderOpen, Star } from "lucide-react"; // Thêm icon Folder
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Định nghĩa Project
interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl: string;
  stars?: number; // Thêm cái này chém gió cho vui
}

// Data mẫu (Ngài sửa lại link thật sau nhé)
const projects: Project[] = [
  {
    title: "Zehel OS",
    description: "Khu vườn số (Digital Garden) kiêm Portfolio cá nhân. Giao diện hệ điều hành tương tác.",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"],
    repoUrl: "https://github.com/zehel/zehel-os",
    demoUrl: "#",
    stars: 120,
  },
  {
    title: "E-Commerce API",
    description: "Hệ thống Backend bán hàng chuẩn chỉnh. Có Auth, Payment, và Inventory management.",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    repoUrl: "https://github.com/zehel/ecommerce-api",
    stars: 85,
  },
  {
    title: "AI Chat Bot",
    description: "Bot chat thông minh tích hợp OpenAI, biết đùa giỡn và code dạo.",
    tags: ["Python", "LangChain", "React", "Vercel SDK"],
    repoUrl: "https://github.com/zehel/ai-chat",
    demoUrl: "#",
    stars: 200,
  }
];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className={cn(
        "group relative flex flex-col h-full overflow-hidden border transition-all duration-300",
        // Glassmorphism chuẩn chỉ (thay vì màu đặc)
        "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md",
        "border-zinc-200 dark:border-zinc-800",
        "hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20", // Glow nhẹ màu xanh
        "hover:-translate-y-1" // Nhấc lên nhẹ khi hover
      )}>
        
        {/* Đường viền Gradient ẩn, hiện ra khi hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-xl transition-colors pointer-events-none" />

        <CardHeader>
          <div className="flex justify-between items-start">
            {/* Folder Icon + Title */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <FolderOpen size={20} />
              </div>
              <CardTitle className="text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </CardTitle>
            </div>

            {/* Link Github */}
            <Link 
                href={project.repoUrl} 
                target="_blank" 
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </Link>
          </div>

          <CardDescription className="text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-2 flex justify-between items-center border-t border-zinc-100 dark:border-zinc-800/50 mt-auto bg-zinc-50/50 dark:bg-zinc-900/50">
           {/* Fake Stars cho uy tín */}
           <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
              <Star size={12} className="text-yellow-500 fill-yellow-500" />
              {project.stars} stars
           </div>

          {project.demoUrl && (
             <Link href={project.demoUrl} target="_blank" className="w-full sm:w-auto">
                <Button size="sm" variant="ghost" className="text-xs group/btn hover:text-blue-600 dark:hover:text-blue-400">
                  Live Demo 
                  <ExternalLink size={12} className="ml-1 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
             </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    // Grid system: Mobile 1 cột, Tablet trở lên 2 cột
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}