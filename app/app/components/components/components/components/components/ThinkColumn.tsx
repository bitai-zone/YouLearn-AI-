"use client";

import Link from "next/link";
import {
  BrainCircuit,
  Send,
  ChevronRight,
  FileText,
  GitBranch,
  Mic,
  Code2,
  Calculator,
} from "lucide-react";

const filters = ["AI Tutor", "Summarize", "Flashcards", "Translate"];

const prompts = [
  "Explain Quantum Computing in simple terms",
  "Summarize this video in key points",
  "Create a quiz about Photosynthesis",
  "Help me with this Python code",
];

const tools = [
  { icon: FileText, label: "Notes" },
  { icon: GitBranch, label: "Mind Map" },
  { icon: Mic, label: "AI Voice" },
  { icon: Code2, label: "Code Lab" },
  { icon: Calculator, label: "Calculator" },
];

export default function ThinkColumn() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <BrainCircuit size={20} className="text-emerald-400" />
        <h2 className="text-lg font-semibold text-white">Think</h2>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        Use AI tools to think deeper and learn better
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f, i) => (
          <button
            key={f}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              i === 0
                ? "bg-emerald-600/90 text-white"
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-start gap-3 mb-4">
          <p className="text-sm text-gray-200 flex-1">
            <span className="font-medium text-white">👋 Hi Aria!</span> I&apos;m
            your AI tutor.
            <br />
            How can I help you learn today?
          </p>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-lg shrink-0">
            🤖
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          {prompts.map((p) => (
            <button
              key={p}
              className="flex items-center justify-between gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 rounded-lg px-3.5 py-2.5 text-left text-sm text-gray-200 transition-colors"
            >
              {p}
              <ChevronRight size={15} className="text-gray-500 shrink-0" />
            </button>
          ))}
        </div>

        <Link
          href="/tutor"
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-gray-500"
        >
          Ask anything...
          <span className="ml-auto bg-emerald-600 rounded-full p-1.5">
            <Send size={14} className="text-white" />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {tools.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] py-3 hover:bg-white/[0.06] transition-colors"
          >
            <Icon size={17} className="text-emerald-400" />
            <span className="text-[11px] text-gray-300">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
