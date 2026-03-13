import type { Metadata } from 'next'
import { Merriweather, Open_Sans } from 'next/font/google'
import './globals.css'

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const openSans = Open_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'English Future – Certificate Generator',
  description: 'Generate personalized English Future certificates',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
