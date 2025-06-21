"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  GitBranch, 
  MessageCircle, 
  FileText, 
  Rocket, 
  Settings, 
  BarChart3 
} from "lucide-react"

interface QuickAction {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  onClick: () => void
}

interface QuickActionsProps {
  onGitAction: () => void
  onCommunicationAction: () => void
  onDocumentationAction: () => void
  onDeploymentAction: () => void
  onSettingsAction: () => void
  onAnalyticsAction: () => void
}

export function QuickActions({
  onGitAction,
  onCommunicationAction,
  onDocumentationAction,
  onDeploymentAction,
  onSettingsAction,
  onAnalyticsAction,
}: QuickActionsProps) {
  const quickActions: QuickAction[] = [
    {
      id: "git",
      label: "Git Operations",
      icon: GitBranch,
      color: "from-violet-500 to-purple-500",
      onClick: onGitAction,
    },
    {
      id: "communication",
      label: "Team Chat",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      onClick: onCommunicationAction,
    },
    {
      id: "documentation",
      label: "Documentation",
      icon: FileText,
      color: "from-emerald-500 to-teal-500",
      onClick: onDocumentationAction,
    },
    {
      id: "deployment",
      label: "Deploy",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      onClick: onDeploymentAction,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      color: "from-pink-500 to-purple-500",
      onClick: onAnalyticsAction,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      color: "from-gray-500 to-slate-500",
      onClick: onSettingsAction,
    },
  ]

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Rocket className="w-5 h-5 mr-2 text-emerald-400" />
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {quickActions.map((action) => {
          const IconComponent = action.icon
          return (
            <Button
              key={action.id}
              onClick={action.onClick}
              variant="outline"
              className={`h-20 flex-col space-y-2 bg-gradient-to-br ${action.color} bg-opacity-20 border-white/20 hover:bg-opacity-30 transition-all duration-300 hover:scale-105`}
            >
              <IconComponent className="w-6 h-6 text-white" />
              <span className="text-xs text-white font-medium">
                {action.label}
              </span>
            </Button>
          )
        })}
      </div>
    </Card>
  )
}
