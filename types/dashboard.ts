// Types for the dashboard components
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

export interface RecentTask {
  id: string
  type: "git" | "communication" | "documentation" | "deployment"
  title: string
  description: string
  timestamp: string
  status: "completed" | "in-progress" | "failed"
  duration?: string
}

export interface SystemStatus {
  service: string
  status: "online" | "degraded" | "offline"
  uptime: string
  lastCheck: string
}

export interface TodayProgress {
  tasksCompleted: number
  totalTasks: number
  timesSaved: string
  successRate: number
}

export type VoiceStatus = "idle" | "listening" | "processing" | "ready"
