"use client";

import { Search, Flame, Bell, MessageSquare, ChevronDown, Play } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between gap-6 px-6 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
          <Play size={16} className="text-white fill-white" />
        </div>
        <span className="font-semibold text-white text-[15px] tracking-tight">
          YouLearn AI
        </span>
      </div>

      <div className="flex-1 max-w-xl relative hidden sm:block">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          placeholder="Search for anything..."
          className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-violet-500/50 transition-colors"
        />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="flex items-center gap-1.5 text-orange-400 text-sm font-medium">
          <Flame size={18} className="fill-orange-400" />
          12
        </div>
        <Bell size={19} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
        <MessageSquare size={19} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
