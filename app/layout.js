// app/layout.js
'use client' // Mark this file as a Client Component

import { SessionProvider } from 'next-auth/react'
import './styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
