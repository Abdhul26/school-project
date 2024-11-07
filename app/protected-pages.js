// app/protected-page.js
'use client'

import { useSession } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>
  if (!session) return <p>Access Denied</p>

  return <p>Welcome to the protected page, {session.user.name}!</p>
}
