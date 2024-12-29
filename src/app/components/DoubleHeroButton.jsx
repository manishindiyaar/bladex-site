import { Bot, Film } from 'lucide-react'

export default function DoubleHeroButton() {
  return (
    <div className="relative font-mono">
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-1 mb-4">
          {/* AI Agents button */}
          <a
            href="/ai-agent"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#2563eb] rounded-full hover:bg-[#1d4ed8] transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.5),0_0_0_1px_rgba(37,99,235,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8),0_0_0_1px_rgba(37,99,235,0.2)]"
          >
            <Bot className="w-5 h-5 mr-2" />
            AI Agents
          </a>
          
          {/* AI Visual button */}
          <a
            href="/ai-visual"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3),0_0_0_1px_rgba(255,255,255,0.2)]"
          >
            AI Visual
            <Film className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}