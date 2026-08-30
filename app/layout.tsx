import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Kirakira Advisory — Smart Solutions for Accountants',
  description: 'Kirakira Advisory helps accounting professionals automate routine tasks, build better reports, optimise spreadsheets, and connect their business software.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
