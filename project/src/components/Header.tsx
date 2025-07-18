import React from 'react'
import { Crown, Sparkles } from 'lucide-react'

export const Header: React.FC = () => {
  return (
    <header className="text-center py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Crown className="w-12 h-12 text-yellow-400 icon-glow float-animation" />
          <h1 className="text-5xl md:text-7xl font-black gradient-text text-shadow">
            Golden SMP
          </h1>
          <Sparkles className="w-10 h-10 text-blue-400 icon-glow float-animation" style={{ animationDelay: '1s' }} />
        </div>
        <p className="text-xl md:text-2xl text-emerald-100 font-medium max-w-2xl mx-auto">
          Premium Minecraft Faction Warfare Experience
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow"></div>
          <span className="text-emerald-300 text-sm font-medium">Live Server</span>
        </div>
      </div>
    </header>
  )
}