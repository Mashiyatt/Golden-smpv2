import React from 'react'
import { MessageCircle, Gamepad2, ExternalLink, Sparkles } from 'lucide-react'

export const JoinSection: React.FC = () => {
  return (
    <section className="glass-effect rounded-3xl p-8 mb-8 hover-lift relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-yellow-500/10 to-blue-500/10"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 icon-glow" />
            <h2 className="text-3xl font-bold gradient-text">Join Golden SMP</h2>
            <Sparkles className="w-8 h-8 text-blue-400 icon-glow" />
          </div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ready to build your legacy? Connect to our Discord community and start your faction warfare journey today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <a
            href="https://discord.gg/goldensmp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover-lift shadow-lg hover:shadow-2xl w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Join Discord
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
          
          <a
            href="minecraft://?addExternalServer=Golden SMP|play.golden-smp.xyz:25777"
            className="group flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover-lift shadow-lg hover:shadow-2xl w-full sm:w-auto justify-center"
          >
            <Gamepad2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Add Server
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow"></div>
            <span className="text-emerald-300 text-sm font-medium">Server Online - Join Now!</span>
          </div>
        </div>
      </div>
    </section>
  )
}