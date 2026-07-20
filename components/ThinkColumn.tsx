'use client'
import { useState } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

export default function ThinkColumn() {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant', content: "Hi! I'm your AI tutor. What would you like to learn today?"
  }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!input.trim() || loading) return
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    // in this demo we simulate a reply
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'This is a simulated reply to: ' + input }])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold flex items-center gap-2"><span className="bg-emerald-500 text-white px-2 py-1 rounded">🧠</span> Think</h2>
      <p className="text-sm text-muted">Use AI tools to think deeper and learn better</p>

      <div className="ai-card mt-4 bg-surface p-4 rounded-lg border border-white/5">
        <div className="ai-top flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">🤖</div>
          <div>
            <div className="font-medium">Hi Aria! I'm your AI tutor.</div>
            <div className="text-sm text-muted">How can I help you learn today?</div>
          </div>
        </div>

        <ul className="suggests mt-3 space-y-2">
          <li className="p-2 bg-white/5 rounded">Explain Quantum Computing in simple terms</li>
          <li className="p-2 bg-white/5 rounded">Summarize this video in key points</li>
          <li className="p-2 bg-white/5 rounded">Create a quiz about Photosynthesis</li>
          <li className="p-2 bg-white/5 rounded">Help me with this Python code</li>
        </ul>

        <div className="ai-input mt-3 flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && sendMessage()} placeholder="Ask anything..." className="flex-1 px-3 py-2 rounded-full bg-white/5 border border-white/6 outline-none" />
          <button onClick={sendMessage} className="px-4 py-2 rounded-full bg-gradient-to-br from-violet-600 to-teal-400">➤</button>
        </div>

        <div className="shortcuts mt-3 grid grid-cols-3 gap-2">
          <button className="py-2 rounded bg-white/5">Notes</button>
          <button className="py-2 rounded bg-white/5">Mind Map</button>
          <button className="py-2 rounded bg-white/5">AI Voice</button>
          <button className="py-2 rounded bg-white/5">Code Lab</button>
          <button className="py-2 rounded bg-white/5">Calculator</button>
        </div>
      </div>
    </div>
  )
}
