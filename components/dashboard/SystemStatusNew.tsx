"use client"

import { Activity } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SystemStatus as SystemStatusType } from "@/hooks/useDashboard"

interface SystemStatusProps {
  systemStatus: SystemStatusType[]
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "online":
      return <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
    case "degraded":
      return <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
    case "offline":
      return <div className="w-2 h-2 bg-red-400 rounded-full"></div>
    default:
      return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
  }
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
    case "degraded":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    case "offline":
      return "bg-red-500/20 text-red-300 border-red-500/30"
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }
}

export function SystemStatus({ systemStatus }: SystemStatusProps) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Activity className="w-5 h-5 mr-2 text-blue-400" />
        System Status
      </h3>
      <div className="space-y-3">
        {systemStatus.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
            <div className="flex items-center space-x-3">
              {getStatusIcon(service.status)}
              <div>
                <p className="text-sm font-medium text-white">{service.service}</p>
                <p className="text-xs text-gray-400">Uptime: {service.uptime}</p>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="outline" className={`text-xs ${getStatusBadgeColor(service.status)}`}>
                {service.status}
              </Badge>
              <p className="text-xs text-gray-400 mt-1">{service.responseTime}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
