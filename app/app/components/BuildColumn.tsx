"use client";

import { Users } from "lucide-react";

export default function BuildColumn() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Build</h2>
          <p className="text-sm text-gray-400">Build skills, projects, and connect with others</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white/5 rounded-full text-sm">Projects</button>
          <button className="px-3 py-1.5 bg-white/5 rounded-full text-sm">Community</button>
        </div>
      </div>

      <div className="mt-4 bg-surface/60 border border-white/5 rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-12 rounded-md bg-gradient-to-br from-[#0b1020] to-[#071026] flex items-center justify-center text-gray-400">Preview</div>
          <div className="flex-1">
            <h3 className="font-medium">Build a Real-time Chat App with WebSockets</h3>
            <p className="text-xs text-gray-400 mt-1">1.2K learners · Intermediate</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-black/10 rounded-xl p-3 text-sm">AI & Deep Learning Study Group</div>
          <div className="bg-black/10 rounded-xl p-3 text-sm">Python Developers Community</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
          <div>
            <div className="text-sm font-medium">Aria</div>
            <div className="text-xs text-gray-400">125,430 XP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
