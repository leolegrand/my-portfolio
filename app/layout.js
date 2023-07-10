import './globals.css'

import { dancingScript } from '../utils/fonts';

export const metadata = {
  title: 'Léo Legrand',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dancingScript.className}>{children}</body>
    </html>
  )
}
