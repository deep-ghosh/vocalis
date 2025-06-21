import { UserProfile, TodayProgress, RecentTask, SystemStatus } from "@/types/dashboard"

// Mock data generators for the dashboard
export const generateMockUserProfile = (): UserProfile => ({
  name: "Alex Chen",
  avatar: "/placeholder-user.jpg",
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

export const generateMockTodayProgress = (): TodayProgress => ({
  tasksCompleted: 12,
  totalTasks: 15,
  timesSaved: "2.5h",
  successRate: 94,
})

export const generateMockRecentTasks = (): RecentTask[] => [
  {
    id: "1",
    type: "git",
    title: "Merged feature branch",
    description: "Successfully merged feature/auth-improvements into main branch",
    timestamp: "2 minutes ago",
    status: "completed",
    duration: "30s",
  },
  {
    id: "2",
    type: "communication",
    title: "Team standup reminder",
    description: "Sent daily standup reminder to #dev-team channel",
    timestamp: "15 minutes ago", 
    status: "completed",
    duration: "5s",
  },
  {
    id: "3",
    type: "deployment",
    title: "Production deployment",
    description: "Deployed v2.1.0 to production environment",
    timestamp: "1 hour ago",
    status: "completed",
    duration: "3m 45s",
  },
  {
    id: "4",
    type: "documentation",
    title: "API documentation update",
    description: "Updated API documentation for new authentication endpoints",
    timestamp: "2 hours ago",
    status: "in-progress",
  },
]

export const generateMockSystemStatus = (): SystemStatus[] => [
  {
    service: "AI Processing",
    status: "online",
    uptime: "99.9%",
    lastCheck: "30s ago",
  },
  {
    service: "Database",
    status: "online", 
    uptime: "99.8%",
    lastCheck: "1m ago",
  },
  {
    service: "API Gateway",
    status: "online",
    uptime: "99.7%", 
    lastCheck: "45s ago",
  },
  {
    service: "Cloud Services",
    status: "degraded",
    uptime: "98.2%",
    lastCheck: "2m ago",
  },
  {
    service: "Security",
    status: "online",
    uptime: "100%",
    lastCheck: "15s ago",
  },
]
