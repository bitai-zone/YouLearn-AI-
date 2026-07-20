"use client";

import { Star } from "lucide-react";

export default function StatsBar() {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-surface/60 border border-white/5 rounded-xl p-4 text-center">
        <div className="text-sm text-gray-400">Skills Mastered</div>
        <div className="mt-2 text-xl font-semibold">24</div>
      </div>

      <div className="bg-surface/60 border border-white/5 rounded-xl p-4 text-center">
        <div className="text-sm text-gray-400">XP Earned</div>
        <div className="mt-2 text-xl font-semibold">12,450</div>
      </div>

      <div className="bg-surface/60 border border-white/5 rounded-xl p-4 text-center">
        <div className="text-sm text-gray-400">Study Streak</div>
        <div className="mt-2 text-xl font-semibold">15 days</div>
      </div>

      <div className="bg-surface/60 border border-white/5 rounded-xl p-4 text-center">
        <div className="text-sm text-gray-400">Certificates</div>
        <div className="mt-2 text-xl font-semibold">8</div>
      </div>
    </div>
  );
}
