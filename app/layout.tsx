import type { Metadata } from 'next'
import Footer from './components/footer'
import customFont from './font'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={` ${customFont.className}`}>
        <div className='container'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
