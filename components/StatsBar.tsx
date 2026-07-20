export default function StatsBar() {
  return (
    <div className="stats-strip bg-surface p-4 rounded-lg border border-white/5 flex gap-4">
      <div className="stat flex-1 text-center">Skills Mastered<br/><span className="block mt-2 font-bold text-lg">24</span></div>
      <div className="stat flex-1 text-center">XP Earned<br/><span className="block mt-2 font-bold text-lg">12,450</span></div>
      <div className="stat flex-1 text-center">Study Streak<br/><span className="block mt-2 font-bold text-lg">15 days</span></div>
      <div className="stat flex-1 text-center">Certificates<br/><span className="block mt-2 font-bold text-lg">8</span></div>
      <div className="stat flex-1 text-center">Projects Completed<br/><span className="block mt-2 font-bold text-lg">12</span></div>
      <div className="stat flex-1 text-center">Global Rank<br/><span className="block mt-2 font-bold text-lg">Top 2%</span></div>
    </div>
  )
}
