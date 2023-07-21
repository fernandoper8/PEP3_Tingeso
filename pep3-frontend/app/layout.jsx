import './globals.css'
import style from './layout.module.css'
import Link from 'next/link'
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

        <nav className={style.navbar}>
          <div>
            <Link className={style.homeLink} href="/"><p>Menu</p></Link>
          </div>
        </nav>
        {children}
        
      </body>
    </html>
  )
}
