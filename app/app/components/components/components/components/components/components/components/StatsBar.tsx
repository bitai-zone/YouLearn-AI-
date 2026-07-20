"use client";

import { Sparkles, Zap, Flame, Award, FolderCheck, Trophy } from "lucide-react";

const stats = [
  { icon: Sparkles, label: "Skills Mastered", value: "24", color: "text-violet-400" },
  { icon: Zap, label: "XP Earned", value: "12,450", color: "text-emerald-400" },
  { icon: Flame, label: "Study Streak", value: "15 days", color: "text-orange-400" },
  { icon: Award, label: "Certificates", value: "8", color: "text-blue-400" },
  { icon: FolderCheck, label: "Projects Completed", value: "12", color: "text-amber-400" },
  { icon: Trophy, label: "Global Rank", value: "Top 2%", color: "text-fuchsia-400" },
];

export default function StatsBar() {
  return (
    <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 flex flex-wrap items-center justify-between gap-4">
      {stats.map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center ${color}`}>
            <Icon size={16} />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 leading-none mb-1">{label}</p>
            <p className="text-sm font-semibold text-white leading-none">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
