import type { Metadata } from 'next'
import './globals.css'
import { promptFont, sarabunFont } from '@/lib/fonts'
import { localBusinessSchema } from '@/lib/schema'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-advisor.th'),
  title: {
    default: 'AI & Automation Advisor | ที่ปรึกษา AI สำหรับ SME ไทย',
    template: '%s | AI Advisor Thailand',
  },
  description:
    'ที่ปรึกษา AI และ Automation ครบวงจรสำหรับ SME ไทยและ อปท. พิสูจน์ผลได้จริง TTFB 96ms, SEO 100/100 ราคาประหยัดกว่า Agency 50-80%',
  keywords: [
    'AI consulting Thailand',
    'ที่ปรึกษา AI',
    'AI automation ไทย',
    'SME AI',
    'อปท. ดิจิทัล',
    'n8n automation',
    'SEO Thailand',
  ],
  authors: [{ name: 'AI & Automation Advisor Thailand' }],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    alternateLocale: 'en_US',
    url: 'https://ai-advisor.th',
    siteName: 'AI & Automation Advisor Thailand',
    title: 'AI & Automation Advisor | ที่ปรึกษา AI สำหรับ SME ไทย',
    description:
      'ที่ปรึกษา AI ครบวงจรสำหรับ SME ไทยและ อปท. พิสูจน์ผลได้จริง',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Advisor Thailand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automation Advisor Thailand',
    description: 'ที่ปรึกษา AI สำหรับ SME ไทย พิสูจน์ผลได้จริง',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${promptFont.variable} ${sarabunFont.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#0A0A0F] text-[#F0F0F0]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
