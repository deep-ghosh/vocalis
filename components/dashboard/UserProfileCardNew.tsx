"use client"

import { TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { UserProfile } from "@/hooks/useDashboard"

interface UserProfileCardProps {
  userProfile: UserProfile
}

export function UserProfileCard({ userProfile }: UserProfileCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <TrendingUp className="w-5 h-5 mr-2 text-violet-400" />
        Your Progress
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Tasks Completed</span>
            <span className="font-semibold text-white">{userProfile.tasksCompleted}</span>
          </div>
          <Progress value={75} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Current Streak</span>
            <span className="font-semibold text-white">{userProfile.streak} days</span>
          </div>
          <Progress value={60} className="h-2" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 text-xs">
            Level {userProfile.level}
          </Badge>
          <span className="text-xs text-gray-400">Next: Level {userProfile.level + 1}</span>
        </div>
      </div>
    </Card>
  )
}
