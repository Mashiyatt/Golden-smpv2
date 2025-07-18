import React from 'react'
import { Header } from './components/Header'
import { ServerStatus } from './components/ServerStatus'
import { AboutSection } from './components/AboutSection'
import { FactionsSection } from './components/FactionsSection'
import { FeaturesSection } from './components/FeaturesSection'
import { TimelineSection } from './components/TimelineSection'
import { RulesSection } from './components/RulesSection'
import { JoinSection } from './components/JoinSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-blue-950">
      <ServerStatus />
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AboutSection />
        <FactionsSection />
        <FeaturesSection />
        <TimelineSection />
        <RulesSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}

export default App