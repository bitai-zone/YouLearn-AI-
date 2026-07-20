'use client'
import { useState } from 'react'

export default function Header() {
  const [q, setQ] = useState('')
  return (
    <header className="topbar h-16 flex items-center justify-between px-6 border-b border-border bg-black/40">
      <div className="flex items-center gap-4">
        <div className="logo w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold">▶</div>
        <div className="hidden sm:block">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for anything..."
            className="w-[560px] max-w-[60vw] px-4 py-2 rounded-full bg-white/5 border border-white/10 outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="px-3 py-1 rounded-full bg-black/30">🔥 12</div>
        <button aria-label="notifications" className="px-2 py-1 rounded-md hover:bg-white/5">🔔</button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 text-sm flex items-center justify-center">A</div>
      </div>
    </header>
  )
}
