"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@civic/auth/react"
import { useDashboard } from "@/hooks/useDashboard"
import { Navbar } from "@/components/navbar"
import { PowerControl } from "@/components/dashboard/PowerControlNew"
import { TodayProgress } from "@/components/dashboard/TodayProgress"
import { QuickActions } from "@/components/dashboard/QuickActionsNew"
import { RecentTasks } from "@/components/dashboard/RecentTasksNew"
import { SystemStatus } from "@/components/dashboard/SystemStatusNew"
import { UserProfileCard } from "@/components/dashboard/UserProfileCardNew"
import { recentTasks, systemStatus } from "@/lib/mock-dashboard-data"

export default function DashboardPage() {
  // Auth state - put hooks at the top
  const { authStatus, isLoading } = useUser()
  const isLoaded = !isLoading
  const isSignedIn = authStatus === 'authenticated'
  const router = useRouter()

  // Dashboard state
  const {
    isActive,
    status,
    isListening,
    userProfile,
    todayProgress,
    handlePowerToggle,
    handleVoiceToggle,
    getStatusText,
    getStatusColor,
  } = useDashboard()

  console.log("Dashboard Auth Status:", authStatus, "Loading:", isLoading, "Loaded:", isLoaded, "SignedIn:", isSignedIn)

  // Redirect to home if not authenticated (handles logout)
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log("User not signed in, redirecting to home...")
      router.push("/")
    }
  }, [isSignedIn, isLoaded, router])

  // Show loading while checking auth
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render if not authenticated (will redirect)
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar showSystemStatus={true} />

        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Power Control & Voice Interface */}
          <PowerControl
            isActive={isActive}
            isListening={isListening}
            status={status}
            onPowerToggle={handlePowerToggle}
            onVoiceToggle={handleVoiceToggle}
            getStatusText={getStatusText}
            getStatusColor={getStatusColor}
          />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Progress */}
              <TodayProgress todayProgress={todayProgress} userProfile={userProfile} />

              {/* Quick Actions */}
              <QuickActions isActive={isActive} />

              {/* Recent Tasks */}
              <RecentTasks tasks={recentTasks} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Status */}
              <SystemStatus systemStatus={systemStatus} />

              {/* User Progress Summary */}
              <UserProfileCard userProfile={userProfile} />
            </div>
          </div>

          {/* Professional Focus - Clean tagline */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 italic mb-2">"Your personal DevOps automation system."</p>
            <p className="text-xs text-gray-600">Powered by GPT-4 Turbo • Multi-Modal AI • Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}
