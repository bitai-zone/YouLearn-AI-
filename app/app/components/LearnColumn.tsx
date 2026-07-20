"use client";

import { Clock } from "lucide-react";

function CourseCard({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="bg-surface/60 border border-white/5 rounded-xl p-4">
      <div className="h-36 rounded-md bg-gradient-to-br from-[#0b1020] to-[#071026] flex items-center justify-center text-sm text-gray-300">Thumbnail</div>
      <h3 className="mt-3 font-medium">{title}</h3>
      <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
        <span className="text-primary text-xs font-medium">Beginner</span>
      </div>
    </div>
  );
}

export default function LearnColumn() {
  return (
    <aside className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Learn</h2>
          <p className="text-sm text-gray-400">Discover the best content to learn anything</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white/5 rounded-full text-sm">For You</button>
          <button className="px-3 py-1.5 bg-white/5 rounded-full text-sm">Courses</button>
        </div>
      </div>

      <div className="space-y-3">
        <CourseCard title="Machine Learning Full Course" duration="4:35:20" />
        <div className="grid grid-cols-2 gap-3">
          <CourseCard title="Python Full Course" duration="6:02:15" />
          <CourseCard title="Data Structures" duration="3:28:47" />
        </div>
      </div>
    </aside>
  );
}
