here"use client";

import {
  Home,
  Clapperboard,
  Radio,
  GraduationCap,
  Tv,
  ListVideo,
  FolderKanban,
  ClipboardCheck,
  Users,
  Sparkles,
  StickyNote,
  Award,
  Network,
  MoreHorizontal,
  Crown,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Clapperboard, label: "Shorts" },
  { icon: Radio, label: "Live" },
  { icon: GraduationCap, label: "Courses" },
  { icon: Tv, label: "Channels" },
  { icon: ListVideo, label: "Playlists" },
  { icon: FolderKanban, label: "Projects" },
  { icon: ClipboardCheck, label: "Quizzes" },
  { icon: Users, label: "Community" },
  { icon: Sparkles, label: "AI Tutor" },
  { icon: StickyNote, label: "Notes" },
  { icon: Award, label: "Certificates" },
  { icon: Network, label: "Skill Tree" },
  { icon: MoreHorizontal, label: "More" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 h-[calc(100vh-64px)] sticky top-16 border-r border-white/10 px-3 py-4 justify-between overflow-y-auto">
      <nav className="flex flex-col gap-0.5">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`flex items-center gap-4 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
              active
                ? "bg-white/10 text-white font-medium"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon size={18} strokeWidth={2} />
            {label}
          </button>
        ))}
      </nav>

      <button className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 px-3 py-3 text-left hover:bg-amber-400/10 transition-colors">
        <Crown size={20} className="text-amber-400 shrink-0" />
        <span className="text-sm">
          <span className="block font-medium text-white">Upgrade to Pro</span>
          <span className="block text-xs text-gray-400">
            Unlock all features
          </span>
        </span>
      </button>
    </aside>
  );
   }
