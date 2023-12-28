import { Red_Hat_Display } from 'next/font/google'

import './globals.css'

const redHatFisplay = Red_Hat_Display({
  weight: ['500', '700', '900'],
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={redHatFisplay.className}>{children}</body>
    </html>
  )
}
