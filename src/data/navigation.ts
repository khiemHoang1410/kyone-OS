import { Home, User, Code, Layers, Mail, Settings } from "lucide-react";

export const dockItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "About", icon: User, href: "/about" },
  { title: "Projects", icon: Code, href: "/projects" },
  { title: "Stack", icon: Layers, href: "/stack" },
  { title: "Contact", icon: Mail, href: "/contact" },
];

export const sidebarItems = [
  ...dockItems,
  { title: "Settings", icon: Settings, href: "/settings" },
];