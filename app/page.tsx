import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChannelBanner from "./components/ChannelBanner";
import LearnColumn from "./components/LearnColumn";
import ThinkColumn from "./components/ThinkColumn";
import BuildColumn from "./components/BuildColumn";
import StatsBar from "./components/StatsBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-6 max-w-[1600px] mx-auto">
          <ChannelBanner />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <LearnColumn />
            <ThinkColumn />
            <BuildColumn />
          </div>
          <StatsBar />
        </main>
      </div>
    </div>
  );
}
