"use client"

import { Target } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TodayProgress as TodayProgressType, UserProfile } from "@/hooks/useDashboard"

interface TodayProgressProps {
  todayProgress: TodayProgressType
  userProfile: UserProfile
}

export function TodayProgress({ todayProgress, userProfile }: TodayProgressProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Target className="w-5 h-5 mr-2 text-emerald-400" />
          Today's Progress
        </h3>
        <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 text-xs">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
        </Badge>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-center p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
          <div className="text-2xl font-bold text-emerald-400 mb-1">
            {todayProgress.tasksCompleted}/{todayProgress.totalTasks}
          </div>
          <div className="text-sm text-gray-400">Tasks Completed</div>
          <Progress
            value={(todayProgress.tasksCompleted / todayProgress.totalTasks) * 100}
            className="h-2 mt-2"
          />
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <div className="text-2xl font-bold text-blue-400 mb-1">{todayProgress.timesSaved}</div>
          <div className="text-sm text-gray-400">Time Saved</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20">
          <div className="text-2xl font-bold text-violet-400 mb-1">{todayProgress.successRate}%</div>
          <div className="text-sm text-gray-400">Success Rate</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
          <div className="text-2xl font-bold text-orange-400 mb-1">{userProfile.streak}</div>
          <div className="text-sm text-gray-400">Day Streak</div>
        </div>
      </div>
    </Card>
  )
}
