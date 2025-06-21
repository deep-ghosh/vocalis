"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, Target, Clock, TrendingUp } from "lucide-react"

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

export interface TodayProgress {
  tasksCompleted: number
  totalTasks: number
  timesSaved: string
  successRate: number
}

interface UserProfileCardProps {
  profile: UserProfile
  todayProgress: TodayProgress
}

export function UserProfileCard({ profile, todayProgress }: UserProfileCardProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-16 h-16 rounded-full border-2 border-emerald-400/50"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
              {profile.level}
            </div>
          </div>
          <div>
            <CardTitle className="text-white text-xl">{profile.name}</CardTitle>
            <p className="text-emerald-400 text-sm">Level {profile.level} Automation Expert</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Today's Progress */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300 flex items-center">
            <Target className="w-4 h-4 mr-2 text-emerald-400" />
            Today's Progress
          </h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Tasks Completed</span>
                <span className="text-emerald-400 font-medium">
                  {todayProgress.tasksCompleted}/{todayProgress.totalTasks}
                </span>
              </div>
              <Progress 
                value={(todayProgress.tasksCompleted / todayProgress.totalTasks) * 100} 
                className="h-2 bg-slate-700"
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Success Rate</span>
                <span className="text-green-400 font-medium">{todayProgress.successRate}%</span>
              </div>
              <Progress 
                value={todayProgress.successRate} 
                className="h-2 bg-slate-700"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <User className="w-4 h-4 text-violet-400" />
            </div>
            <p className="text-lg font-bold text-white">{profile.tasksCompleted}</p>
            <p className="text-xs text-gray-400">Total Tasks</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-lg font-bold text-white">{todayProgress.timesSaved}</p>
            <p className="text-xs text-gray-400">Time Saved</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-lg font-bold text-white">{profile.streak}</p>
            <p className="text-xs text-gray-400">Day Streak</p>
          </div>
        </div>

        {/* Quick Status */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">Voice Assistant Ready</span>
          </div>
          <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 text-xs">
            Active
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
