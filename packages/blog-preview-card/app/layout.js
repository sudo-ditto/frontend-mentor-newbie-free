import { Figtree } from 'next/font/google'

import './globals.css'

const figtree = Figtree({
  weight: ['400', '600', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Blog Preview Card',
  description: 'Frontend Mentor Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
