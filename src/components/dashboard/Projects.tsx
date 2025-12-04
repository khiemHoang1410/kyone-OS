import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Định nghĩa khuôn mẫu cho dữ liệu Project
interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string; // Dấu ? nghĩa là có thể có hoặc không
  repoUrl: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 flex flex-col h-full hover:border-zinc-700 transition-colors">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-zinc-100">{project.title}</CardTitle>
          {/* Icon Github nhỏ dẫn link repo */}
          <Link href={project.repoUrl} target="_blank" className="text-zinc-400 hover:text-white">
            <Github size={20} />
          </Link>
        </div>
        <CardDescription className="text-zinc-400 mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {/* Lặp qua các tags (React, Node...) */}
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-zinc-700 text-zinc-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        {project.demoUrl && (
          <Button asChild className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
            <Link href={project.demoUrl} target="_blank">
              View Demo <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

const projects: Project[] = [
  {
    title: "Zehel OS",
    description: "A personal digital garden and portfolio built with Next.js 14 and Shadcn UI.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn"],
    repoUrl: "https://github.com/zehel/zehel-os",
    demoUrl: "#",
  },
  {
    title: "E-Commerce API",
    description: "Backend RESTful API for an online store with authentication and payment.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    repoUrl: "https://github.com/zehel/ecommerce-api",
    // Cái này ko có demoUrl nên nó sẽ ko hiện nút View Demo -> Logic chuẩn
  },
];

export function ProjectsSection() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-zinc-100">Featured Projects 🚀</h3>
      
      {/* Grid: Mobile 1 cột, Tablet trở lên 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          // Truyền cục data 'project' vào cho thằng con 'ProjectCard' xử lý
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}