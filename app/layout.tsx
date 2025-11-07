import type { Metadata } from 'next'
import { Montserrat, Lato, Playfair_Display, Raleway, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VisitABK - Discover Abeokuta',
  description: 'Experience Abeokuta\'s rich cultural heritage, historic landmarks like Olumo Rock, vibrant local cuisine, and premium eco-friendly real estate opportunities. Your gateway to authentic Nigerian tourism and sustainable living in Ogun State.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${lato.variable} ${playfairDisplay.variable} ${raleway.variable} ${instrumentSerif.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
