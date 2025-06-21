import { RecentTask, SystemStatus } from "@/hooks/useDashboard"

export const recentTasks: RecentTask[] = [
  {
    id: "1",
    type: "git",
    title: "Merged feature/user-auth into main",
    status: "completed",
    timestamp: "2 minutes ago",
    duration: "0.5s",
  },
  {
    id: "2",
    type: "communication",
    title: "Posted deployment update to #general",
    status: "completed",
    timestamp: "5 minutes ago",
    duration: "1.2s",
  },
  {
    id: "3",
    type: "documentation",
    title: "Generated API documentation",
    status: "completed",
    timestamp: "8 minutes ago",
    duration: "3.1s",
  },
  {
    id: "4",
    type: "deployment",
    title: "Deployed to staging environment",
    status: "completed",
    timestamp: "12 minutes ago",
    duration: "45s",
  },
  {
    id: "5",
    type: "git",
    title: "Created PR for bug fixes",
    status: "completed",
    timestamp: "15 minutes ago",
    duration: "2.3s",
  },
]

export const systemStatus: SystemStatus[] = [
  { service: "AI Engine", status: "online", uptime: "99.9%", responseTime: "120ms" },
  { service: "Voice Recognition", status: "online", uptime: "99.8%", responseTime: "95ms" },
  { service: "Git Integration", status: "online", uptime: "100%", responseTime: "200ms" },
  { service: "Slack API", status: "degraded", uptime: "98.5%", responseTime: "450ms" },
  { service: "Documentation Gen", status: "online", uptime: "99.7%", responseTime: "300ms" },
]

export const aiCategories = [
  {
    id: "devops",
    name: "DevOps Automation",
    description: "Git, CI/CD, deployment",
    icon: "GitBranch",
    color: "from-violet-500/20 to-purple-500/20",
    status: "Active",
    usage: 85,
  },
  {
    id: "communication",
    name: "Team Communication",
    description: "Slack, email, notifications",
    icon: "MessageCircle",
    color: "from-blue-500/20 to-cyan-500/20",
    status: "Active",
    usage: 92,
  },
  {
    id: "documentation",
    name: "Documentation",
    description: "Auto-generation, updates",
    icon: "FileText",
    color: "from-emerald-500/20 to-teal-500/20",
    status: "Active",
    usage: 78,
  },
  {
    id: "monitoring",
    name: "System Monitoring",
    description: "Alerts, performance tracking",
    icon: "BarChart3",
    color: "from-orange-500/20 to-red-500/20",
    status: "Active",
    usage: 67,
  },
]
