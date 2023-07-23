import './globals.css'
import style from './layout.module.css'
import Navbar from '.././components/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cyber.py',
  description: 'pep3 tingeso',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>cyber.py</title>
      </head>
      <body className={`${inter.className} style.body`}>

        <Navbar />
        {children}
        
      </body>
    </html>
  )
}
