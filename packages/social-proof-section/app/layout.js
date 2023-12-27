import { Outfit } from 'next/font/google'

import './globals.css'

const outfit = Outfit({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'QR Code Component',
  description: 'Frontend Mentor Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
