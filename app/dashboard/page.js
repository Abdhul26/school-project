'use client'

import { useSession, signOut } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>

  if (!session) {
    return <p>Access Denied. Please log in.</p>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}
