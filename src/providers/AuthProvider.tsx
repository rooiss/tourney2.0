import { ReactNode, useState } from 'react'

export interface AuthUser {
  firstName: string
  username: string
  email: string
  verified: string
  verifyCode: string
  lastName: string
  id: string
}

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthContext {
  loading?: boolean
  isAuthenticated?: boolean
  user?: AuthUser | null
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState<AuthContext>()
}
