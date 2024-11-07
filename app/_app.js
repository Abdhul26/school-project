import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css' // Your global CSS import

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
