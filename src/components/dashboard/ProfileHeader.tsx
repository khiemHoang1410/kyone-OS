import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Nút bấm cài từ đầu rồi
import { Terminal, ArrowRight } from "lucide-react"; // Icon

export function ProfileHeader() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-zinc-100 overflow-hidden">
      <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
        {/* 1. Avatar / Image Area */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Terminal size={48} className="text-white" />
        </div>

        {/* 2. Info Area */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h2 className="text-3xl font-bold">Hi, I'm Zehel 👋</h2>
            <p className="text-zinc-400 mt-2 text-lg">
              IT Student & Full-stack Developer wannabe
            </p>
          </div>
          
          <p className="text-sm text-zinc-500 max-w-xl">
            Chào mừng đến với Zehel OS. Đây là khu vườn số nơi tôi lưu trữ kiến thức, dự án và những dòng code tâm huyết.
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            <Button className="bg-white text-black hover:bg-zinc-200">
              Contact Me <ArrowRight size={16} className="ml-2"/>
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 hover:text-white">
              View CV
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}