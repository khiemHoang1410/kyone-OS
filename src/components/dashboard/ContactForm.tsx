"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Lock, ShieldCheck, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Các bước giả lập gửi tin nhắn cho ngầu
const sendingSteps = [
  "Encrypting data packages...",
  "Handshaking with server...",
  "Routing through proxies...",
  "Delivering payload...",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [stepIndex, setStepIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStepIndex(0);

    // Giả lập quy trình gửi tin nhắn (Mỗi bước 800ms)
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= sendingSteps.length - 1) {
          clearInterval(interval);
          setStatus("success");
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  // Reset form để gửi lại
  const handleReset = () => {
    setStatus("idle");
    setStepIndex(0);
  };

  return (
    <Card className={cn(
      "relative overflow-hidden border p-8 w-full max-w-lg mx-auto",
      "bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md",
      "border-zinc-200 dark:border-zinc-800",
      status === "success" ? "border-emerald-500/50" : ""
    )}>
      {/* Header trang trí: Secure Connection */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      <div className="flex items-center justify-between mb-8 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === 'idle' ? 'bg-zinc-400' : 'bg-emerald-500 animate-pulse'}`} />
          <span>STATUS: {status === 'idle' ? 'STANDBY' : status === 'sending' ? 'TRANSMITTING' : 'SECURED'}</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
          <Lock size={12} />
          <span>E2E ENCRYPTED</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* TRẠNG THÁI 1: FORM NHẬP LIỆU */}
        {status === "idle" && (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Codename / Name</label>
              <input 
                required 
                type="text" 
                placeholder="Agent Zehel..." 
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Secure Channel / Email</label>
              <input 
                required 
                type="email" 
                placeholder="contact@example.com" 
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Payload / Message</label>
              <textarea 
                required 
                rows={4} 
                placeholder="Classified information goes here..." 
                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none placeholder:text-zinc-400"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              <Send size={18} className="mr-2" />
              Initialize Transmission
            </Button>
          </motion.form>
        )}

        {/* TRẠNG THÁI 2: ĐANG GỬI (Hacker Style) */}
        {status === "sending" && (
          <motion.div
            key="sending"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center justify-center py-10 space-y-6"
          >
            <div className="relative">
              <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Wifi className="text-blue-500 animate-pulse" size={32} />
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Establishing Uplink</h3>
              <div className="h-6 overflow-hidden">
                <motion.p 
                  key={stepIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-sm font-mono text-blue-500"
                >
                  {`> ${sendingSteps[stepIndex]}`}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}

        {/* TRẠNG THÁI 3: THÀNH CÔNG */}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 space-y-6"
          >
            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-2">
              <ShieldCheck className="w-12 h-12 text-emerald-500" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-black text-zinc-800 dark:text-zinc-100">Transmission Secured</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 max-w-[250px] mx-auto">
                Dữ liệu đã được gửi thành công đến trụ sở của Zehel.
              </p>
            </div>

            <Button onClick={handleReset} variant="outline" className="mt-6 rounded-xl border-zinc-200 dark:border-zinc-800">
              Send Another Signal
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}