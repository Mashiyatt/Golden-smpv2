import React from 'react'
import { Clock, Flag, Sword, Crown } from 'lucide-react'

const timelineEvents = [
  {
    date: 'January 2025',
    title: 'Server Launch',
    description: 'Golden SMP launches with the first three founding factions',
    icon: <Flag className="w-5 h-5" />,
    color: 'text-emerald-400'
  },
  {
    date: 'March 2025',
    title: 'The Great War',
    description: 'First major faction war reshapes the server landscape',
    icon: <Sword className="w-5 h-5" />,
    color: 'text-red-400'
  },
  {
    date: 'May 2025',
    title: 'Rise of Empire',
    description: 'Crimson Empire emerges as a dominant force',
    icon: <Crown className="w-5 h-5" />,
    color: 'text-yellow-400'
  },
  {
    date: 'Present',
    title: 'New Era',
    description: 'New factions continue to rise and challenge the established order',
    icon: <Clock className="w-5 h-5" />,
    color: 'text-blue-400'
  }
]

export const TimelineSection: React.FC = () => {
  return (
    <section className="glass-effect rounded-3xl p-8 mb-8 hover-lift">
      <div className="flex items-center gap-3 mb-8">
        <Clock className="w-8 h-8 text-purple-400 icon-glow" />
        <h2 className="text-3xl font-bold gradient-text">Server Timeline</h2>
      </div>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-yellow-500 to-blue-500"></div>
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start gap-6">
              <div className={`relative z-10 p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 ${event.color}`}>
                {event.icon}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <span className="px-3 py-1 bg-slate-800/50 rounded-full text-sm text-gray-300 font-medium">
                    {event.date}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}