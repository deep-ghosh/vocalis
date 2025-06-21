import { VoiceStatus } from "@/types/dashboard"

// Voice status utilities
export const getVoiceStatusText = (status: VoiceStatus, isActive: boolean): string => {
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

export const getVoiceStatusColor = (status: VoiceStatus, isActive: boolean): string => {
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

// Task type utilities
export const getTaskTypeColor = (type: string): string => {
  switch (type) {
    case "git":
      return "text-violet-400"
    case "communication":
      return "text-blue-400"
    case "documentation":
      return "text-emerald-400"
    case "deployment":
      return "text-orange-400"
    default:
      return "text-gray-400"
  }
}

// Status badge utilities
export const getStatusBadgeColor = (status: string): string => {
  switch (status) {
    case "online":
    case "completed":
      return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
    case "degraded":
    case "in-progress":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    case "offline":
    case "failed":
      return "bg-red-500/20 text-red-300 border-red-500/30"
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }
}

// Format time utilities
export const formatRelativeTime = (timestamp: string): string => {
  // This would normally parse actual timestamps
  // For now, returning the mock timestamp as-is
  return timestamp
}

export const formatDuration = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`
  } 
  
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  
  if (remainingSeconds === 0) {
    return `${minutes}m`
  }
  
  return `${minutes}m ${remainingSeconds}s`
}
