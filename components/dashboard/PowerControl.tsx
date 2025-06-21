"use client"

import { useState } from "react"
import { Power, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PowerControlProps {
  isActive: boolean
  isListening: boolean
  status: "idle" | "listening" | "processing" | "ready"
  onPowerToggle: () => void
  onVoiceToggle: () => void
}

export function PowerControl({
  isActive,
  isListening,
  status,
  onPowerToggle,
  onVoiceToggle,
}: PowerControlProps) {
  const getStatusText = () => {
    if (!isActive) return "Assistant is offline - Activate to begin"

    switch (status) {
      case "listening":
        return "I'm listening... speak naturally"
      case "processing":
        return "Processing your request with AI..."
      case "ready":
        return "Task completed successfully!"
      default:
        return "Ready to assist with DevOps workflows"
    }
  }

  const getStatusColor = () => {
    if (!isActive) return "text-gray-500"

    switch (status) {
      case "listening":
        return "text-emerald-400"
      case "processing":
        return "text-yellow-400"
      case "ready":
        return "text-green-400"
      default:
        return "text-emerald-400"
    }
  }

  return (
    <div className="flex justify-center mb-8">
      <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl">
        <div className="flex items-center space-x-8">
          {/* Power Button */}
          <div className="text-center">
            <Button
              onClick={onPowerToggle}
              className={`w-20 h-20 rounded-full border-4 transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-400 shadow-2xl shadow-emerald-500/50 scale-105"
                  : "bg-gradient-to-r from-gray-500 to-gray-600 border-gray-400 shadow-lg hover:scale-105"
              } backdrop-blur-sm`}
            >
              <Power className="w-8 h-8" />
            </Button>
            <p className={`text-sm mt-2 font-medium ${isActive ? "text-emerald-400" : "text-gray-400"}`}>
              {isActive ? "Assistant Active" : "Activate Assistant"}
            </p>
          </div>

          <div className="border-l border-white/20 h-16"></div>

          {/* Voice Interface */}
          <div className="text-center">
            <Button
              onClick={onVoiceToggle}
              disabled={!isActive}
              className={`w-16 h-16 rounded-full transition-all duration-300 ${
                isListening
                  ? "bg-red-500 hover:bg-red-600 shadow-2xl shadow-red-500/50 scale-110"
                  : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 shadow-xl"
              } ${!isActive ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Mic className="w-6 h-6" />
            </Button>
            <p className="text-sm mt-2 font-medium text-violet-400">
              {isListening ? "Listening..." : "Voice Command"}
            </p>
          </div>

          <div className="border-l border-white/20 h-16"></div>

          {/* Status Display */}
          <div className="text-center space-y-2">
            <p className={`text-xl font-medium ${getStatusColor()} transition-colors duration-300`}>
              {getStatusText()}
            </p>
            <div className="flex items-center space-x-2 justify-center">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                GPT-4 Turbo
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                DevOps AI
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
