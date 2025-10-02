import type { Metadata } from 'next'
import { Proza_Libre } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const prozaLibre = Proza_Libre({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-proza-libre'
})

export const metadata: Metadata = {
  title: 'Henry Ssekibo - IT Support & Digital Transformation Specialist',
  description: 'Professional IT Support Specialist and Digital Transformation Expert. Building scalable systems and enabling digital transformation in Africa.',
  keywords: 'IT Support, Digital Transformation, Software Development, Business Process Automation, Full-Stack Development',
  authors: [{ name: 'Henry Ssekibo' }],
  openGraph: {
    title: 'Henry Ssekibo - IT Support & Digital Transformation Specialist',
    description: 'Professional IT Support Specialist and Digital Transformation Expert. Building scalable systems and enabling digital transformation in Africa.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </head>
      <body className={prozaLibre.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

