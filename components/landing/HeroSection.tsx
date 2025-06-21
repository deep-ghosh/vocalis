"use client"

import { Brain } from "lucide-react"

interface HeroSectionProps {
  particles: Array<{
    left: string
    top: string
    delay: string
    duration: string
  }>
}

export function HeroSection({ particles }: HeroSectionProps) {
  return (
    <div className="text-center max-w-5xl mx-auto">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative p-6 sm:p-8 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20">
            <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
        Vocalis
      </h1>

      <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light mb-6 sm:mb-8 leading-relaxed">
        Complete DevOps Workflow Automation
        <br />
        <span className="text-emerald-400 font-medium">Powered by Your Voice</span>
      </h2>

      <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
        Transform your development workflow with AI-powered voice commands. Deploy code, manage infrastructure, 
        coordinate teams, and automate complex DevOps tasks — all through natural conversation.
      </p>
    </div>
  )
}
