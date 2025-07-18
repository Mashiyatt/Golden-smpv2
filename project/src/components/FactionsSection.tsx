import React from 'react'
import { Users, Crown, Zap, Target } from 'lucide-react'

interface Faction {
  name: string
  status: 'active' | 'recruiting' | 'neutral'
  description: string
  members: number
  leader: string
  icon: React.ReactNode
  color: string
}

const factions: Faction[] = [
  {
    name: 'The Dawnseekers',
    status: 'active',
    description: 'Masters of strategy and honorable combat. Known for their impressive fortress designs and tactical prowess.',
    members: 12,
    leader: 'SunBlade_47',
    icon: <Crown className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'The Nightbound',
    status: 'recruiting',
    description: 'Elite stealth specialists who excel in covert operations and underground networks.',
    members: 8,
    leader: 'DarkMoon_X',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-purple-500 to-blue-500'
  },
  {
    name: 'Crimson Empire',
    status: 'active',
    description: 'The most powerful faction on the server, built through conquest and strategic dominance.',
    members: 15,
    leader: 'BloodKing_99',
    icon: <Target className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
    case 'recruiting': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
  }
}

export const FactionsSection: React.FC = () => {
  return (
    <section className="glass-effect rounded-3xl p-8 mb-8 hover-lift">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8 text-emerald-400 icon-glow" />
        <h2 className="text-3xl font-bold gradient-text">Active Factions</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {factions.map((faction, index) => (
          <div
            key={index}
            className="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${faction.color} bg-opacity-20`}>
                <div className="text-white">
                  {faction.icon}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(faction.status)}`}>
                {faction.status.charAt(0).toUpperCase() + faction.status.slice(1)}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              {faction.name}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {faction.description}
            </p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span>{faction.members} Members</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Crown className="w-4 h-4" />
                <span>{faction.leader}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${faction.color}`}
                  style={{ width: `${(faction.members / 20) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">Power Level</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}