import { AuthContextProvider } from '@/lib/authContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vrukshaa',
  description: 'image analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
