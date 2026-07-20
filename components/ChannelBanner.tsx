export default function ChannelBanner() {
  return (
    <div className="flex items-center gap-6 p-6 border-b border-border">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-bold">Y</div>
        <div>
          <h1 className="text-2xl font-bold">YouLearn AI</h1>
          <div className="text-sm text-muted">@YouLearnAI · 1.25M subscribers · 1.2K videos</div>
          <div className="text-sm text-gray-300">The world's most advanced AI-powered learning platform.</div>
        </div>
        <button className="ml-4 px-3 py-1 rounded-full bg-white text-black font-semibold">Subscribe</button>
      </div>

      <div className="flex-1 h-28 rounded-xl bg-gradient-to-br from-[#0a0e2a] via-[#0d1230] to-[#05060f] p-4">
        {/* simple svg illustration placeholder */}
        <svg width="100%" height="100%" viewBox="0 0 600 120" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <g stroke="url(#g2)" strokeWidth="1.5" fill="none">
            <path d="M50 70c40-50 120-50 180-25s120 10 170-40" opacity="0.9" />
            <circle cx="520" cy="30" r="28" opacity="0.9" />
          </g>
        </svg>
      </div>
    </div>
  )
}
