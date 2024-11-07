import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
  } else {
    return <button onClick={() => signIn()}>Login</button>
  }
}
