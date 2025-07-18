import React from 'react'
import { Shield, Heart, Zap, MessageCircle, Hammer } from 'lucide-react'

const rules = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Respect All Players',
    description: 'No toxicity or harassment - maintain a friendly community',
    color: 'text-pink-400'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Fair Warfare Only',
    description: 'No griefing outside of official faction wars',
    color: 'text-blue-400'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'No Cheating',
    description: 'Fair play only - no hacking or exploiting',
    color: 'text-yellow-400'
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'English in Global',
    description: 'Use English in global chat for accessibility',
    color: 'text-green-400'
  },
  {
    icon: <Hammer className="w-5 h-5" />,
    title: 'Build Responsibly',
    description: 'No lag machines or server-breaking builds',
    color: 'text-orange-400'
  }
]

export const RulesSection: React.FC = () => {
  return (
    <section className="glass-effect rounded-3xl p-8 mb-8 hover-lift">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-blue-400 icon-glow" />
        <h2 className="text-3xl font-bold gradient-text">Server Rules</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover-lift"
          >
            <div className={`${rule.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {rule.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {rule.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {rule.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}