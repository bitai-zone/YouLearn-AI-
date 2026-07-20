"use client";

import { BadgeCheck, Play, Search } from "lucide-react";

const tabs = [
  "Home",
  "Videos",
  "Shorts",
  "Live",
  "Playlists",
  "Community",
  "Channels",
  "About",
];

export default function ChannelBanner() {
  return (
    <section className="mb-8">
      <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0e2a] via-[#0d1230] to-[#05060f] border border-white/10 flex items-center justify-end px-10">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.35),transparent_60%)]" />
        <div className="relative w-40 h-40 md:w-48 md:h-48 opacity-90">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <radialGradient id="brainGlow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="90" r="70" fill="url(#brainGlow)" />
            <path
              d="M100 40c-25 0-45 20-45 45 0 15 8 28 20 36-2 6-2 13 1 19 4 9 13 15 24 15s20-6 24-15c3-6 3-13 1-19 12-8 20-21 20-36 0-25-20-45-45-45z"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="1.5"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-5 -mt-14 md:-mt-16 px-6 relative">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-black bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0 shadow-xl">
          <Play size={44} className="text-white fill-white" />
        </div>

        <div className="flex-1 pt-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              YouLearn AI
            </h1>
            <BadgeCheck size={22} className="text-violet-400 fill-violet-400/20" />
          </div>
          <p className="text-gray-400 text-sm mt-1">
            @YouLearnAI · 1.25M subscribers · 1.2K videos
          </p>
          <p className="text-gray-300 text-sm mt-1 max-w-xl">
            The world&apos;s most advanced AI-powered learning platform.
          </p>
          <a href="#" className="text-violet-400 text-sm hover:underline">
            youlearn.ai
          </a>
        </div>

        <button className="bg-white text-black font-medium text-sm px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors shrink-0 self-start md:self-center">
          Subscribe
        </button>
      </div>

      <div className="flex items-center gap-1 mt-6 px-6 border-b border-white/10 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
              i === 0
                ? "border-white text-white font-medium"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto px-2">
          <Search size={16} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}
