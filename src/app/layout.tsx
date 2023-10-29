import './globals.css'

import type { Metadata } from 'next'

import Content from '@/src/_components/Content'
import SiteFooter from '@/src/_components/SiteFooter'
import SiteHeader from '@/src/_components/SiteHeader'

export const metadata: Metadata = {
  title: 'Funny Movies',
  description: 'Your funny movie hub'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
        <SiteHeader />
        <Content>{children}</Content>
        <SiteFooter />
      </body>
    </html>
  )
}
