'use client'
import React from 'react'

const nav = [
  'خانه',
  'Shorts',
  'Live',
  'Courses',
  'Channels',
  'Playlists',
  'Projects',
  'Quizzes',
  'Community',
  'AI Tutor',
  'Notes',
  'Certificates',
  'Skill Tree',
]

export default function Sidebar() {
  return (
    <aside className="sidebar w-56 p-4 flex flex-col gap-4 bg-gradient-to-b from-black/20">
      <div className="brand flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold">▶</div>
        <div className="font-semibold">YouLearn AI</div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {nav.map((n) => (
          <button key={n} className={`text-left py-2 px-3 rounded-md text-sm text-gray-300 hover:bg-white/5`}>{n}</button>
        ))}
      </nav>

      <div className="upgrade mt-auto bg-amber-500/10 text-amber-300 px-3 py-2 rounded-md text-center">Upgrade to Pro</div>
    </aside>
  )
}
