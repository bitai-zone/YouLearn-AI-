import ChannelBanner from '@/components/ChannelBanner'
import LearnColumn from '@/components/LearnColumn'
import ThinkColumn from '@/components/ThinkColumn'
import BuildColumn from '@/components/BuildColumn'
import StatsBar from '@/components/StatsBar'

export default function Page() {
  return (
    <div>
      <section className="channel-banner">
        <ChannelBanner />
      </section>

      <div className="tabs px-6 py-3">
        <div className="tab active">Home</div>
        <div className="tab">Videos</div>
        <div className="tab">Shorts</div>
        <div className="tab">Live</div>
        <div className="tab">Playlists</div>
      </div>

      <div className="content px-6 py-6 grid grid-cols-1 lg:grid-cols-[1fr,420px,360px] gap-6">
        <div className="col left">
          <LearnColumn />
        </div>
        <div className="col middle">
          <ThinkColumn />
        </div>
        <div className="col right">
          <BuildColumn />
        </div>
      </div>

      <div className="px-6 pb-6">
        <StatsBar />
      </div>
    </div>
  )
}
