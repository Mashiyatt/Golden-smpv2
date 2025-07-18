import React from 'react'
import { Settings, Swords, Calendar, DollarSign, Sparkles, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: <Swords className="w-6 h-6" />,
    title: 'Faction Warfare',
    description: 'Territory control and strategic battles',
    color: 'text-red-400'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom PvP',
    description: 'Balanced combat mechanics',
    color: 'text-blue-400'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Dynamic Events',
    description: 'Seasonal tournaments and challenges',
    color: 'text-purple-400'
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Player Economy',
    description: 'Trading system and marketplace',
    color: 'text-yellow-400'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Custom Items',
    description: 'Unique enchantments and gear',
    color: 'text-emerald-400'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Rank Progression',
    description: 'Advance within your faction',
    color: 'text-indigo-400'
  }
]

export const FeaturesSection: React.FC = () => {
  return (
    <section className="glass-effect rounded-3xl p-8 mb-8 hover-lift">
      <div className="flex items-center gap-3 mb-8">
        <Settings className="w-8 h-8 text-blue-400 icon-glow" />
        <h2 className="text-3xl font-bold gradient-text">Server Features</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover-lift"
          >
            <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}