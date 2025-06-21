import { useUser } from "@civic/auth/react"

// Custom hook for authentication state
export function useAuth() {
  const { authStatus, isLoading } = useUser()
  
  return {
    isLoaded: !isLoading,
    isSignedIn: authStatus === 'authenticated',
    isLoading,
    authStatus
  }
}

// Auth status check utility
export function checkAuthStatus(authStatus: string | undefined): {
  isAuthenticated: boolean
  isLoading: boolean
} {
  return {
    isAuthenticated: authStatus === 'authenticated',
    isLoading: authStatus === undefined
  }
}
