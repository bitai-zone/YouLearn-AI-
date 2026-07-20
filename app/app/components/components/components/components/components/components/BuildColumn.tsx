"use client";

import { Users2, ChevronRight } from "lucide-react";

const filters = ["Projects", "Community", "Study Groups", "Mentors"];

const studyGroups = [
  { name: "AI & Deep Learning Study Group", members: "12.5K members" },
  { name: "System Design Study Group", members: "8.7K members" },
  { name: "Python Developers Community", members: "24.3K members" },
];

const contributors = [
  { name: "Aria", xp: "125,430 XP", rank: 1 },
  { name: "Sara", xp: "98,760 XP", rank: 2 },
  { name: "Reza", xp: "87,400 XP", rank: 2 },
  { name: "Mina", xp: "76,890 XP", rank: 4 },
  { name: "John", xp: "65,320 XP", rank: 5 },
];

const avatarGradients = [
  "from-blue-400 to-violet-500",
  "from-pink-400 to-rose-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-fuchsia-400 to-purple-500",
];

export default function BuildColumn() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Users2 size={20} className="text-orange-400" />
        <h2 className="text-lg font-semibold text-white">Build</h2>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        Build skills, projects, and connect with others
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f, i) => (
          <button
            key={f}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              i === 0
                ? "bg-orange-600/90 text-white"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white leading-snug mb-3">
            Build a Real-time Chat App with WebSockets
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
            <span>⚛️</span>
            <span>🟢</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>👤 1.2K learners</span>
            <span>Intermediate</span>
          </div>
          <div className="h-1 rounded-full bg-white/10 mt-1.5 overflow-hidden">
            <div className="h-full w-2/3 bg-orange-500 rounded-full" />
          </div>
        </div>
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-indigo-600/40 to-purple-900/60 shrink-0" />
      </div>

      <div className="flex items-center justify-between mt-6 mb-3">
        <h3 className="text-sm font-semibold text-white">
          Active Study Groups
        </h3>
        <button className="text-xs text-violet-400 hover:underline flex items-center">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {studyGroups.map((g, i) => (
          <div
            key={g.name}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
          >
            <p className="text-xs font-medium text-white leading-tight mb-1">
              {g.name}
            </p>
            <p className="text-[11px] text-gray-500 mb-2">{g.members}</p>
            <div className="flex -space-x-2">
              {[0, 1, 2].map((n) => (
                <div
                  key={n}
                  className={`w-6 h-6 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br ${
                    avatarGradients[(i + n) % avatarGradients.length]
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 mb-3">
        <h3 className="text-sm font-semibold text-white">Top Contributors</h3>
        <button className="text-xs text-violet-400 hover:underline">
          View all
        </button>
      </div>
      <div className="flex gap-2">
        {contributors.map((c, i) => (
          <div key={c.name} className="flex flex-col items-center gap-1 flex-1">
            <div className="relative">
              <div
                className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradients[i]}`}
              />
              <span className="absolute -bottom-1 -right-1 bg-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-white/20 text-amber-400">
                {c.rank}
              </span>
            </div>
            <span className="text-[11px] text-gray-200">{c.name}</span>
            <span className="text-[9px] text-gray-500">{c.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
