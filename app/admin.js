// pages/admin.js
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AdminPage() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      signIn()
    } else if (session.user.role !== 'admin') {
      router.push('/unauthorized') // Redirect unauthorized users
    }
  }, [session])

  if (!session || session.user.role !== 'admin') return null

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  )
}
