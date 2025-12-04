import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Server } from "lucide-react"; // Icon tượng trưng

// 1. DATA: Khai báo dữ liệu ở một chỗ riêng (sau này lấy từ API cũng dễ)
const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "PostgreSQL", "Prisma ORM"],
  },
  {
    category: "Tools & Others",
    icon: Code2,
    items: ["Git", "Docker", "Linux", "VS Code", "Figma"],
  },
];

export function TechStack() {
  return (
    // Grid System: Chia cột (Mobile 1 cột, PC 3 cột)
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
      
      {/* 2. LOOP: Lặp qua từng nhóm skill để render ra Card */}
      {skills.map((skill, index) => (
        <Card key={index} className="bg-zinc-900 border-zinc-800 flex flex-col">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="p-2 bg-zinc-800 rounded-lg">
              <skill.icon size={20} className="text-blue-400" />
            </div>
            <CardTitle className="text-lg font-medium text-white">
              {skill.category}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {/* Lặp tiếp qua các items nhỏ bên trong */}
              {skill.items.map((item) => (
                <Badge key={item} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}