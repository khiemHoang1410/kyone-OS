"use client";

import Link from "next/link";
import { ExternalLink, Github, FolderOpen, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// Import dữ liệu
import { projects } from "@/data/projects"; 

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className={cn(
        "group relative flex flex-col h-full overflow-hidden border transition-all duration-300",
        "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md",
        "border-zinc-200 dark:border-zinc-800",
        "hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20",
        "hover:-translate-y-1"
      )}>
        
        {/* Glow border ẩn */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-xl transition-colors pointer-events-none" />

        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <FolderOpen size={20} />
              </div>
              <CardTitle className="text-lg font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </CardTitle>
            </div>

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
            {project.tags.map((tag: string) => (
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}