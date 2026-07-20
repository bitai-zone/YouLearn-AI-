import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'YouLearn AI',
  description: "YouLearn AI — modern learning platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="app min-h-screen flex bg-background text-white">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
