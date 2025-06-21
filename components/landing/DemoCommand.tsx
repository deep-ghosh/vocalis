"use client"

import { Card } from "@/components/ui/card"
import { Command } from "lucide-react"

interface DemoCommandProps {
  command: string
  processingTime?: string
}

export function DemoCommand({ 
  command, 
  processingTime = "~2 seconds execution" 
}: DemoCommandProps) {
  return (
    <div className="mb-8 sm:mb-12">
      <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl p-6 rounded-2xl max-w-3xl mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-emerald-600/20">
            <Command className="w-5 h-5 text-violet-400" />
          </div>
          <span className="text-slate-300 font-medium">Try saying:</span>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30">
          <p className="text-lg sm:text-xl text-slate-200 italic">
            {command}
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400">AI Processing</span>
          </div>
          <div className="w-px h-4 bg-slate-600"></div>
          <span className="text-xs text-slate-400">{processingTime}</span>
        </div>
      </Card>
    </div>
  )
}
