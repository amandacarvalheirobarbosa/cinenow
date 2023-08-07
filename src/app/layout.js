import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CineNow',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
