"use client";

import { BookOpen, MoreVertical, ChevronRight } from "lucide-react";

const filters = ["For You", "Courses", "Playlists", "Top Videos"];

const recommended = [
  {
    title: "Python",
    subtitle: "Full Course",
    tag: "Beginner to Advanced",
    duration: "6:02:15",
    gradient: "from-yellow-600/40 to-yellow-900/60",
  },
  {
    title: "Data Structures",
    subtitle: "and Algorithms in Python",
    tag: "",
    duration: "3:28:47",
    gradient: "from-cyan-600/40 to-slate-900/60",
  },
  {
    title: "Web Development",
    subtitle: "Full Course 2024",
    tag: "",
    duration: "5:15:30",
    gradient: "from-fuchsia-700/40 to-purple-950/60",
  },
];

export default function LearnColumn() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <BookOpen size={20} className="text-violet-400" />
        <h2 className="text-lg font-semibold text-white">Learn</h2>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        Discover the best content to learn anything
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f, i) => (
          <button
            key={f}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              i === 0
                ? "bg-violet-600 text-white"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
        <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="relative z-10 p-4 text-white text-xl font-bold leading-tight">
            Machine
            <br />
            Learning
            <br />
            <span className="text-lg font-semibold text-gray-200">
              Full Course
            </span>
          </span>
          <span className="absolute bottom-2 right-2 bg-black/70 text-[11px] px-1.5 py-0.5 rounded text-white">
            4:35:20
          </span>
        </div>
        <div className="flex items-start gap-3 p-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white leading-snug">
              Machine Learning Full Course for Beginners
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              YouLearn AI · 2.4M views · 2 months ago
            </p>
          </div>
          <MoreVertical size={16} className="text-gray-500 shrink-0 mt-1" />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-white mt-6 mb-3">
        Recommended for you
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {recommended.map((v) => (
          <div
            key={v.title}
            className={`relative aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br ${v.gradient} border border-white/10 p-2.5 flex flex-col justify-between`}
          >
            <div>
              <p className="text-white text-xs font-bold leading-tight">
                {v.title}
              </p>
              <p className="text-white text-xs font-bold leading-tight">
                {v.subtitle}
              </p>
              {v.tag && (
                <p className="text-[10px] text-gray-300 mt-1">{v.tag}</p>
              )}
            </div>
            <span className="text-[10px] text-white/90 bg-black/50 self-start px-1 py-0.5 rounded">
              {v.duration}
            </span>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-1 text-violet-400 text-sm font-medium mt-4 hover:underline">
        View all
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
