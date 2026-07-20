'use client'
export default function LearnColumn() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold flex items-center gap-2"><span className="bg-violet-600 text-white px-2 py-1 rounded">📚</span> Learn</h2>
      <p className="text-sm text-muted">Discover the best content to learn anything</p>

      <div className="flex gap-2 mt-3">
        <button className="px-3 py-1 rounded-full bg-violet-600 text-white">For You</button>
        <button className="px-3 py-1 rounded-full bg-white/5">Courses</button>
        <button className="px-3 py-1 rounded-full bg-white/5">Playlists</button>
        <button className="px-3 py-1 rounded-full bg-white/5">Top Videos</button>
      </div>

      <article className="feature-card mt-4 bg-surface p-4 rounded-lg border border-white/5">
        <div className="thumb rounded-md overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 h-44 flex items-end p-4">
          <div className="text-white text-xl font-bold">Machine Learning<br/>Full Course</div>
          <div className="ml-auto bg-black/60 text-xs px-2 py-1 rounded">4:35:20</div>
        </div>
        <div className="meta mt-3">
          <h3 className="font-semibold">Machine Learning Full Course for Beginners</h3>
          <div className="text-sm text-muted">YouLearn AI · 2.4M views · 2 months ago</div>
        </div>
      </article>

      <div className="cards-row mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="course bg-surface p-3 rounded-lg">
          <div className="h-20 rounded-md bg-gradient-to-br from-blue-800 to-indigo-900" />
          <div className="mt-2 font-semibold">Python Full Course<br/><span className="text-sm text-muted">Beginner to Advanced</span></div>
          <div className="text-sm text-muted mt-1">6:02:15</div>
        </div>
        <div className="course bg-surface p-3 rounded-lg">
          <div className="h-20 rounded-md bg-gradient-to-br from-cyan-800 to-slate-900" />
          <div className="mt-2 font-semibold">Data Structures and Algorithms<br/><span className="text-sm text-muted">in Python</span></div>
          <div className="text-sm text-muted mt-1">3:28:47</div>
        </div>
        <div className="course bg-surface p-3 rounded-lg">
          <div className="h-20 rounded-md bg-gradient-to-br from-fuchsia-700 to-purple-950" />
          <div className="mt-2 font-semibold">Web Development Full Course 2024</div>
          <div className="text-sm text-muted mt-1">5:15:30</div>
        </div>
      </div>
    </div>
  )
}
