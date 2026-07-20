import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { AboutSection } from '@/components/about-section'
import { StatsBand } from '@/components/stats-band'
import { ApproachSection } from '@/components/approach-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About the Firm — Maritime Lawyers on the Suez Canal | Soliman Advocates',
  description:
    'Soliman Advocates is an Egyptian maritime law firm founded in 1988 at Port Tawfik, Suez. 35+ years of ship arrest and maritime litigation across all Egyptian ports.',
  alternates: { canonical: '/about' },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero page="about" />
        <AboutSection />
        <StatsBand />
        <ApproachSection />
      </main>
      <SiteFooter />
    </div>
  )
}
