import React from 'react'
import { Heart, Code } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-gray-300">Made with passion for the Minecraft community</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>© 2025 Golden SMP</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              <span>Developed by Mashiyatt</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}