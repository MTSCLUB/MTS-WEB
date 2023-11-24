import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'

import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MTS Web',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
