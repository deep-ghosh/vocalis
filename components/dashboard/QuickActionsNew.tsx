"use client"

import { Zap, GitPullRequest, Slack, BookOpen, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface QuickAction {
  icon: React.ComponentType<any>
  label: string
  description: string
  color: string
  bgColor: string
  borderColor: string
}

interface QuickActionsProps {
  isActive: boolean
}

const quickActions: QuickAction[] = [
  {
    icon: GitPullRequest,
    label: "Create PR",
    description: "Git workflow",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
  {
    icon: Slack,
    label: "Slack Update",
    description: "Team notification",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: BookOpen,
    label: "Document",
    description: "Auto-generate",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Rocket,
    label: "Deploy",
    description: "Quick deployment",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
]

export function QuickActions({ isActive }: QuickActionsProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Zap className="w-5 h-5 mr-2 text-violet-400" />
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            disabled={!isActive}
            className={`h-20 flex-col space-y-2 ${action.bgColor} ${action.borderColor} text-white hover:bg-white/10 group transition-all duration-300 ${
              !isActive ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${action.color} group-hover:scale-110 transition-transform`}
            >
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">{action.label}</div>
              <div className="text-xs text-gray-400">{action.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  )
}
