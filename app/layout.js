import { AuthContextProvider } from '@/lib/authContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vrukshaa',
  description: 'Discover plant health with our cutting-edge AI technology. Upload plant images and receive accurate disease identification and treatment recommendations. Take the first step towards a greener, healthier garden.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar/>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
