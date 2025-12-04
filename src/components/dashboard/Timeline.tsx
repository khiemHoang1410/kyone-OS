"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/about";

export function Timeline() {
  return (
    <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
      {experienceData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="relative"
    >
      {/* Cái chấm tròn trên dòng kẻ */}
      <div className="absolute -left-[29px] top-1 h-6 w-6 rounded-full border-4 border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
          {item.title}
        </h3>
        <span className="text-xs font-mono font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700">
          {item.year}
        </span>
      </div>

      <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
        @ {item.company}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.tech.map((tech: string) => (
          <Badge 
            key={tech} 
            variant="outline" 
            className="text-[10px] bg-white/50 dark:bg-zinc-900/50"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}