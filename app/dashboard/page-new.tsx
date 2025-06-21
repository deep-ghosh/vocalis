"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@civic/auth/react"
import { Navbar } from "@/components/navbar"
import { PowerControl } from "@/components/dashboard/PowerControl"
import { UserProfileCard } from "@/components/dashboard/UserProfileCard"
import { RecentTasks } from "@/components/dashboard/RecentTasks"
import { SystemStatus as SystemStatusComponent } from "@/components/dashboard/SystemStatus"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { 
  generateMockUserProfile,
  generateMockTodayProgress,
  generateMockRecentTasks,
  generateMockSystemStatus
} from "@/lib/mock-data"
import { VoiceStatus } from "@/types/dashboard"

export default function DashboardPage() {
  // Move ALL state declarations to the top, before any early returns
  const [isActive, setIsActive] = useState(true)
  const [status, setStatus] = useState<VoiceStatus>("idle")
  const [isListening, setIsListening] = useState(false)

  // Mock data - in real app, these would come from API calls
  const [userProfile] = useState(generateMockUserProfile())
  const [todayProgress] = useState(generateMockTodayProgress())
  const [recentTasks] = useState(generateMockRecentTasks())
  const [systemStatus] = useState(generateMockSystemStatus())

  // Auth state - after all other state declarations
  const { authStatus, isLoading } = useUser()
  const isLoaded = !isLoading
  const isSignedIn = authStatus === 'authenticated'
  const router = useRouter()

  console.log("Dashboard Auth Status:", authStatus, "Loading:", isLoading, "Loaded:", isLoaded, "SignedIn:", isSignedIn)

  // Redirect to home if not authenticated (handles logout)
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log("User not signed in, redirecting to home...")
      router.push("/")
    }
  }, [isSignedIn, isLoaded, router])

  // Handler functions
  const handlePowerToggle = () => {
    setIsActive(!isActive)
    if (!isActive) {
      setStatus("idle")
    } else {
      setStatus("idle")
    }
  }

  const handleVoiceToggle = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setStatus("listening")
    } else {
      setStatus("idle")
    }
  }

  // Quick Action handlers
  const handleGitAction = () => {
    console.log("Git action triggered")
  }

  const handleCommunicationAction = () => {
    console.log("Communication action triggered")
  }

  const handleDocumentationAction = () => {
    console.log("Documentation action triggered")
  }

  const handleDeploymentAction = () => {
    console.log("Deployment action triggered")
  }

  const handleSettingsAction = () => {
    console.log("Settings action triggered")
  }

  const handleAnalyticsAction = () => {
    console.log("Analytics action triggered")
  }

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
          />

          {/* Quick Actions */}
          <div className="mb-8">
            <QuickActions
              onGitAction={handleGitAction}
              onCommunicationAction={handleCommunicationAction}
              onDocumentationAction={handleDocumentationAction}
              onDeploymentAction={handleDeploymentAction}
              onSettingsAction={handleSettingsAction}
              onAnalyticsAction={handleAnalyticsAction}
            />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Profile */}
            <div>
              <UserProfileCard 
                profile={userProfile}
                todayProgress={todayProgress}
              />
            </div>

            {/* Recent Tasks */}
            <div>
              <RecentTasks tasks={recentTasks} />
            </div>

            {/* System Status */}
            <div>
              <SystemStatusComponent systems={systemStatus} />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Vocalis AI • DevOps Workflow Automation • Powered by Voice Commands
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
