'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header>
      {session ? (
        <>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn('google')}>Login with Google</button>
      )}
    </header>
  )
}
