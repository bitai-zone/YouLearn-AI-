export default function BuildColumn() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold flex items-center gap-2"><span className="bg-orange-500 text-white px-2 py-1 rounded">👷</span> Build</h2>
      <p className="text-sm text-muted">Build skills, projects, and connect with others</p>

      <div className="project-card mt-4 bg-surface p-4 rounded-lg border border-white/5 flex items-center gap-4">
        <div className="flex-1">
          <h3 className="font-semibold">Build a Real-time Chat App with WebSockets</h3>
          <div className="text-sm text-muted mt-1">1.2K learners · Intermediate</div>
        </div>
        <div className="w-28 h-16 rounded bg-gradient-to-br from-indigo-600 to-purple-900" />
      </div>

      <div className="groups mt-4 grid gap-2">
        <div className="group bg-white/5 p-3 rounded">AI & Deep Learning<br/><span className="text-sm text-muted">12.5K members</span></div>
        <div className="group bg-white/5 p-3 rounded">System Design<br/><span className="text-sm text-muted">8.7K members</span></div>
        <div className="group bg-white/5 p-3 rounded">Python Developers<br/><span className="text-sm text-muted">24.3K members</span></div>
      </div>

      <div className="contributors mt-4 flex gap-2">
        <div className="contrib bg-white/5 p-2 rounded flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">A</div>
          <div>
            <div className="font-medium">Aria</div>
            <div className="text-sm text-muted">125,430 XP</div>
          </div>
        </div>
        <div className="contrib bg-white/5 p-2 rounded flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">S</div>
          <div>
            <div className="font-medium">Sara</div>
            <div className="text-sm text-muted">98,760 XP</div>
          </div>
        </div>
      </div>
    </div>
  )
}
