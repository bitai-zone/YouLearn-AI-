"use client";

import { useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function TutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI tutor. What would you like to learn today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply || data.error },
      ]);
    } catch (e) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-white flex flex-col">
      <header className="px-6 py-4 border-b border-border">
        <span className="font-semibold">YouLearn AI · Tutor</span>
      </header>

      <div className="flex-1 max-w-2xl w-full mx-auto p-6 flex flex-col gap-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
              m.role === "user"
                ? "bg-primary self-end ml-auto"
                : "bg-surface border border-border self-start"
            }`}
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="text-gray-500 text-sm">Tutor is typing...</div>
        )}
      </div>

      <div className="max-w-2xl w-full mx-auto p-4 flex gap-2 border-t border-border">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask anything..."
          className="flex-1 bg-surface border border-border rounded-full px-4 py-2 text-sm outline-none"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-primary px-5 py-2 rounded-full text-sm font-medium disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </main>
  );
}
