"use client";

import { ButtonHTMLAttributes } from "react";
import { Play } from "lucide-react";

export default function ChannelBanner() {
  return (
    <section className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-[#071026] to-[#0b1020] p-6">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Play size={28} className="text-white" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold">YouLearn AI</h1>
          <p className="text-sm text-gray-300 mt-1">@YouLearnAI · 1.25M subscribers · 1.2K videos</p>
          <p className="text-sm text-gray-400 mt-2 max-w-xl">The world's most advanced AI-powered learning platform.</p>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium shadow">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
