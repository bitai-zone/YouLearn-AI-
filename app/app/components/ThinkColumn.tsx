"use client";

import { MessageCircle, Bot } from "lucide-react";
import { useState } from "react";

export default function ThinkColumn() {
  const [messages] = useState([
    { id: 1, text: "Explain Quantum Computing in simple terms" },
    { id: 2, text: "Summarize this video in key points" },
  ]);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Think</h2>
          <p className="text-sm text-gray-400">Use AI tools to think deeper and learn better</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white/5 rounded-full text-sm">AI Tutor</button>
          <button className="px-3 py-1.5 bg-white/5 rounded-full text-sm">Summarize</button>
        </div>
      </div>

      <div className="mt-4 bg-surface/60 border border-white/5 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-300 font-medium">Hi Aria! I'm your AI tutor. How can I help you learn today?</div>
            <div className="mt-3 space-y-2">
              {messages.map((m) => (
                <div key={m.id} className="text-sm text-gray-400 hover:bg-white/5 p-2 rounded">
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input className="flex-1 bg-black/30 rounded-full px-4 py-2 text-sm placeholder:text-gray-500" placeholder="Ask anything..." />
              <button className="bg-primary px-3 py-2 rounded-full text-sm">Send</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="flex-1 bg-surface/60 border border-white/5 rounded-xl p-3 text-center">Notes</div>
        <div className="flex-1 bg-surface/60 border border-white/5 rounded-xl p-3 text-center">Mind Map</div>
      </div>
    </section>
  );
}
