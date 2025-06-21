"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Wifi,
  Server
} from "lucide-react"

export interface SystemStatus {
  service: string
  status: "online" | "degraded" | "offline"
  uptime: string
  lastCheck: string
}

interface SystemStatusProps {
  systems: SystemStatus[]
}

export function SystemStatus({ systems }: SystemStatusProps) {
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

  const getServiceIcon = (service: string) => {
    switch (service.toLowerCase()) {
      case "ai processing":
        return Cpu
      case "database":
        return Database
      case "cloud services":
        return Cloud
      case "security":
        return Shield
      case "api gateway":
        return Wifi
      default:
        return Server
    }
  }

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="w-5 h-5 mr-2 text-emerald-400" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {systems.map((system, index) => {
            const IconComponent = getServiceIcon(system.service)
            return (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {system.service}
                    </p>
                    <p className="text-xs text-gray-400">
                      Uptime: {system.uptime}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {getStatusIcon(system.status)}
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusBadgeColor(system.status)}`}
                  >
                    {system.status}
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Overall Status */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Overall System Health</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <Badge variant="outline" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                Operational
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
