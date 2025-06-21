"use client"

import { Clock, CheckCircle, GitPullRequest, Slack, BookOpen, Rocket, Activity } from "lucide-react"
import { Card } from "@/components/ui/card"
import { RecentTask } from "@/hooks/useDashboard"

interface RecentTasksProps {
  tasks: RecentTask[]
}

const getTaskIcon = (type: string) => {
  switch (type) {
    case "git":
      return GitPullRequest
    case "communication":
      return Slack
    case "documentation":
      return BookOpen
    case "deployment":
      return Rocket
    default:
      return Activity
  }
}

const getTaskColor = (type: string) => {
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

export function RecentTasks({ tasks }: RecentTasksProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Clock className="w-5 h-5 mr-2 text-emerald-400" />
        Recent Tasks
      </h3>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {tasks.map((task) => {
          const Icon = getTaskIcon(task.type)
          return (
            <div
              key={task.id}
              className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${
                  task.type === "git"
                    ? "from-violet-500/20 to-purple-500/20"
                    : task.type === "communication"
                      ? "from-blue-500/20 to-cyan-500/20"
                      : task.type === "documentation"
                        ? "from-emerald-500/20 to-teal-500/20"
                        : "from-orange-500/20 to-red-500/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${getTaskColor(task.type)}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{task.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-400">{task.timestamp}</span>
                  <span className="text-xs text-emerald-400">• {task.duration}</span>
                  {task.status === "completed" && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
