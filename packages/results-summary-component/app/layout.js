import { Hanken_Grotesk } from 'next/font/google'

import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  weight: ['500', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Results Summary Component',
  description: 'Frontend Mentor Project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  )
}
