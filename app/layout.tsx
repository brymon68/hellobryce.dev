import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HelloBryce.dev',
  description: 'Where projects come to die',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dracula" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
