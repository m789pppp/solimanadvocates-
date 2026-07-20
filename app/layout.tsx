import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cairo } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
})

const SITE_URL = 'https://www.solimanadvocates.com'
const SITE_TITLE = 'Ship Arrest in Egypt | Soliman Advocates — Maritime Law Firm, Suez Canal'
const SITE_DESC =
  'Egyptian maritime law firm on the Suez Canal since 1988. Ship arrest, vessel release, bunker and cargo claims across Suez, Port Said, Alexandria and Damietta. Available 24/7.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESC,
  alternates: { canonical: '/' },
  generator: 'v0.app',
  keywords: [
    'ship arrest Egypt',
    'maritime law Egypt',
    'Suez Canal lawyer',
    'vessel release Egypt',
    'bunker claims',
    'admiralty law',
    'Egyptian maritime courts',
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Soliman Advocates',
    title: SITE_TITLE,
    description: SITE_DESC,
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Soliman Advocates — Ship Arrest & Maritime Law, Suez Canal, Egypt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1c33',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Soliman Advocates',
  alternateName: 'سليمان للمحاماة',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESC,
  foundingDate: '1988',
  founder: {
    '@type': 'Person',
    name: 'Usama Soliman',
    jobTitle: 'Founder & CEO',
  },
  telephone: '+20-103-307-3171',
  email: 'usoliman@solimanadvocates.com.eg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '68 El Gueish St., El Didi Building, Port Tawfik',
    addressLocality: 'Suez',
    addressCountry: 'EG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.9285,
    longitude: 32.5651,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Emergency ship arrest line',
    telephone: '+20-103-307-3171',
    availableLanguage: ['English', 'Arabic'],
    hoursAvailable: '24/7',
  },
  areaServed: ['Suez', 'Port Said', 'Alexandria', 'Damietta'],
  sameAs: ['https://www.linkedin.com/company/soliman-advocates'],
  openingHours: 'Su-Th 09:00-17:00',
  knowsAbout: [
    'Ship arrest',
    'Maritime disputes',
    'Marine insurance',
    'Environmental claims',
    'Commercial law',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${cairo.variable} dark bg-background`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
