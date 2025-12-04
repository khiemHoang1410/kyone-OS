// src/components/layout/Sidebar.tsx
import Link from "next/link";
import { Home, User, Code, Layers, Settings } from "lucide-react"; // Import icon

// Định nghĩa menu để sau này dễ thêm bớt
const menuItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "About Me", icon: User, href: "/about" },
  { title: "Projects", icon: Code, href: "/projects" },
  { title: "Tech Stack", icon: Layers, href: "/stack" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-zinc-900 text-white flex flex-col fixed left-0 top-0 border-r border-zinc-800">
      {/* 1. Logo Area */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Zehel OS
        </h1>
        <p className="text-xs text-zinc-400 mt-1">Personal Digital Garden</p>
      </div>

      {/* 2. Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-200"
          >
            <item.icon size={20} />
            <span className="font-medium">{item.title}</span>
          </Link>
        ))}
      </nav>

      {/* 3. Footer Area (Optional) */}
      <div className="p-4 border-t border-zinc-800">
        <div className="text-xs text-zinc-500 text-center">
          © 2024 Zehel Dev
        </div>
      </div>
    </aside>
  );
}