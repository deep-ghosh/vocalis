"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GitPullRequest, 
  Slack, 
  BookOpen, 
  Rocket, 
  Activity,
  Clock
} from "lucide-react"

export interface RecentTask {
  id: string
  type: "git" | "communication" | "documentation" | "deployment"
  title: string
  description: string
  timestamp: string
  status: "completed" | "in-progress" | "failed"
  duration?: string
}

interface RecentTasksProps {
  tasks: RecentTask[]
}

export function RecentTasks({ tasks }: RecentTasksProps) {
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "failed":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-emerald-400" />
          Recent Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => {
            const IconComponent = getTaskIcon(task.type)
            return (
              <div 
                key={task.id}
                className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className={`p-2 rounded-lg bg-white/10 ${getTaskColor(task.type)}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-white truncate">
                      {task.title}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusBadge(task.status)}`}
                    >
                      {task.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                    {task.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {task.timestamp}
                    </div>
                    {task.duration && (
                      <span className="text-emerald-400">
                        {task.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
