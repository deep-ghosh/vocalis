"use client"

import { useState } from "react"

export interface UserProfile {
  name: string
  avatar: string
  level: number
  tasksCompleted: number
  streak: number
  preferences: {
    theme: string
    voiceEnabled: boolean
    notifications: boolean
    language: string
    voiceSpeed: number
    autoExecute: boolean
    soundEffects: boolean
    highContrast: boolean
  }
}

export interface TodayProgress {
  tasksCompleted: number
  totalTasks: number
  timesSaved: string
  successRate: number
}

export interface RecentTask {
  id: string
  type: "git" | "communication" | "documentation" | "deployment"
  title: string
  status: "completed" | "pending" | "failed"
  timestamp: string
  duration: string
}

export interface SystemStatus {
  service: string
  status: "online" | "degraded" | "offline"
  uptime: string
  responseTime: string
}

export const useDashboard = () => {
  const [isActive, setIsActive] = useState(true)
  const [status, setStatus] = useState<"idle" | "listening" | "processing" | "ready">("idle")
  const [isListening, setIsListening] = useState(false)

  const [userProfile] = useState<UserProfile>({
    name: "Alex Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    level: 12,
    tasksCompleted: 247,
    streak: 15,
    preferences: {
      theme: "dark",
      voiceEnabled: true,
      notifications: true,
      language: "en",
      voiceSpeed: 1,
      autoExecute: false,
      soundEffects: true,
      highContrast: false,
    },
  })

  const [todayProgress] = useState<TodayProgress>({
    tasksCompleted: 12,
    totalTasks: 15,
    timesSaved: "2.5h",
    successRate: 94,
  })

  const handlePowerToggle = () => {
    setIsActive(!isActive)
    if (!isActive) {
      setStatus("idle")
    } else {
      setStatus("idle")
    }
  }

  const handleVoiceToggle = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setStatus("listening")
    } else {
      setStatus("idle")
    }
  }

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

  return {
    isActive,
    status,
    isListening,
    userProfile,
    todayProgress,
    handlePowerToggle,
    handleVoiceToggle,
    getStatusText,
    getStatusColor,
  }
}
