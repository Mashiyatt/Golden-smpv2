import React from 'react'
import { Castle, Sword, Shield } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section className="glass-effect rounded-3xl p-8 mb-8 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <Castle className="w-8 h-8 text-yellow-400 icon-glow" />
        <h2 className="text-3xl font-bold gradient-text">About Golden SMP</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Golden SMP is a premium Minecraft Bedrock server focused on faction warfare and strategic gameplay. 
            Build your empire, forge alliances, and dominate the battlefield in an immersive survival experience.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-900/30 to-transparent rounded-xl">
              <Sword className="w-6 h-6 text-emerald-400" />
              <div>
                <div className="font-semibold text-white">Epic Battles</div>
                <div className="text-sm text-gray-300">Strategic warfare</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-900/30 to-transparent rounded-xl">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-semibold text-white">Safe Building</div>
                <div className="text-sm text-gray-300">Protected zones</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          <div className="relative glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-black gradient-text mb-2">24/7</div>
            <div className="text-gray-300">Server Uptime</div>
            <div className="mt-4 flex justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-xs text-gray-400">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">15+</div>
                <div className="text-xs text-gray-400">Factions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}