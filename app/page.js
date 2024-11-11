'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function HomePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>

  return (
    <div>
      {session ? (
        <>
          <h1>Welcome, {session.user.email}!</h1>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <>
          <h1>Welcome to the Home Page</h1>
          <p>Please log in to access personalized features.</p>
          <button onClick={() => signIn('credentials')}>Login</button>
        </>
      )}
    </div>
  )
}
