"use client"

import { useState } from "react"
import Link from "next/link"
import { UserButton } from "@civic/auth/react"
import { useAuth } from "@/lib/auth-utils"
import {
  Brain,
  Menu,
  X,
  Cpu,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  showSystemStatus?: boolean
}

export function Navbar({ showSystemStatus = false }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isLoaded, isSignedIn } = useAuth()

  console.log("Navbar Auth State:", { isLoaded, isSignedIn })

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30">
              <Brain className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Vocalis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isLoaded ? (
              !isSignedIn ? (
                <>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                    Features
                  </Link>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <UserButton />
                </>
              ) : (
                <>
                  <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                    Dashboard
                  </Link>

                  {/* System Status */}
                  {showSystemStatus && (
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Cpu className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Database className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  )}

                  <UserButton />
                </>
              )
            ) : (
              <div className="w-8 h-8 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin"></div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-white/5 border-white/10 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {isLoaded && !isSignedIn ? (
                <>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Home
                  </Link>
                  <Link href="#features" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Features
                  </Link>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    About
                  </Link>
                  <div className="px-4 py-2">
                    <UserButton />
                  </div>
                </>
              ) : isLoaded && isSignedIn ? (
                <>
                  <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                    Dashboard
                  </Link>
                  <div className="px-4 py-2">
                    <UserButton />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
