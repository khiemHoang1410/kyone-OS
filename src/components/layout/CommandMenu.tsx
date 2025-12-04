"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import { 
  Calculator, 
  Calendar, 
  CreditCard, 
  Settings, 
  Smile, 
  User, 
  Code, 
  Home, 
  Mail, 
  Layers, 
  Laptop, 
  Moon, 
  Sun,
  Copy,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  // Bắt sự kiện phím tắt Cmd + K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Hàm xử lý khi chọn item
  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Gợi ý phím tắt nhỏ ở góc màn hình (cho người chưa biết) */}
      <div className="fixed bottom-4 right-4 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-md text-xs text-muted-foreground select-none pointer-events-none">
        <span className="text-xs">Press</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Ctrl + </span>K
        </kbd>
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-[90vw] bg-white dark:bg-zinc-950 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-[9999] overflow-hidden"
      >
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Command.Input 
            placeholder="Type a command or search..." 
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
          <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground px-2 py-1.5">
            <Item onSelect={() => runCommand(() => router.push("/"))}>
              <Home className="mr-2 h-4 w-4" /> Home
            </Item>
            <Item onSelect={() => runCommand(() => router.push("/about"))}>
              <User className="mr-2 h-4 w-4" /> About Me
            </Item>
            <Item onSelect={() => runCommand(() => router.push("/projects"))}>
              <Code className="mr-2 h-4 w-4" /> Projects
            </Item>
            <Item onSelect={() => runCommand(() => router.push("/stack"))}>
              <Layers className="mr-2 h-4 w-4" /> Tech Stack
            </Item>
          </Command.Group>

          <Command.Group heading="System" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
            <Item onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" /> Light Mode
            </Item>
            <Item onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" /> Dark Mode
            </Item>
            <Item onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop className="mr-2 h-4 w-4" /> System Theme
            </Item>
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
            <Item onSelect={() => runCommand(() => {
                navigator.clipboard.writeText("zehel@gmail.com");
                alert("Copied email to clipboard! 📋"); 
            })}>
              <Copy className="mr-2 h-4 w-4" /> Copy Email
            </Item>
            <Item onSelect={() => runCommand(() => window.open("https://github.com/yourusername", "_blank"))}>
              <Code className="mr-2 h-4 w-4" /> Visit Github
            </Item>
          </Command.Group>

        </Command.List>
      </Command.Dialog>
    </>
  );
}

// Component con để đỡ lặp code style
function Item({ children, onSelect }: { children: React.ReactNode, onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800", // Màu khi hover/chọn bằng phím
        "aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "transition-colors duration-200 cursor-pointer"
      )}
    >
      {children}
    </Command.Item>
  );
}