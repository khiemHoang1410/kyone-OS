import Link from "next/link";
import { Github, Linkedin, Facebook, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socials = [
  { name: "Github", icon: Github, url: "https://github.com/yourusername", color: "hover:bg-black hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername", color: "hover:bg-blue-600 hover:text-white" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "hover:bg-blue-500 hover:text-white" },
  { name: "Email", icon: Mail, url: "mailto:zehel@gmail.com", color: "hover:bg-red-500 hover:text-white" },
];

export function Socials() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 h-full flex flex-col justify-between">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-zinc-100 mb-4">Connect 🌐</h3>
        
        {/* Lưới 2 cột cho các nút mạng xã hội */}
        <div className="grid grid-cols-2 gap-3">
          {socials.map((item) => (
            <Button
              key={item.name}
              variant="outline"
              asChild
              className={`w-full justify-start gap-2 border-zinc-700 bg-zinc-800/50 text-zinc-300 transition-all duration-300 ${item.color}`}
            >
              <Link href={item.url} target="_blank">
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>

        {/* Một dòng trạng thái nhỏ ở dưới */}
        <div className="mt-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-green-400 font-medium">Open to Work</span>
        </div>
      </CardContent>
    </Card>
  );
}