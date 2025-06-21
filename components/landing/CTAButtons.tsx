"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

interface CTAButtonsProps {
  isSignedIn: boolean
  onStartAutomating: () => void
  onSeeDemo: () => void
}

export function CTAButtons({ 
  isSignedIn, 
  onStartAutomating, 
  onSeeDemo 
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
      <Button
        onClick={onStartAutomating}
        size="lg"
        className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-500/25 border-0"
      >
        {isSignedIn ? "Go to Dashboard" : "Start Automating Now"}
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
      
      <Button
        onClick={onSeeDemo}
        size="lg"
        variant="outline"
        className="w-full sm:w-auto bg-slate-800/50 border-slate-700/50 text-slate-200 hover:bg-slate-700/50 hover:border-slate-600/50 px-8 py-4 text-base sm:text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
      >
        <PlayCircle className="w-5 h-5 mr-2" />
        See It In Action
      </Button>
    </div>
  )
}
