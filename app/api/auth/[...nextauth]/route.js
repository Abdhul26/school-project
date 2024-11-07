import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          email: 'test@example.com',
          password: 'password123',
        }

        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return user // If valid, return user object
        }
        return null // If invalid, return null
      },
    }),
  ],
  session: {
    jwt: true, // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.email = token.email
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in .env.local
}

// Explicitly export each HTTP method handler
export const POST = (req, res) => NextAuth(req, res, authOptions)

export const GET = (req, res) => NextAuth(req, res, authOptions)
