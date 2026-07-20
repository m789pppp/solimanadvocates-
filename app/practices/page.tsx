import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { PracticesSection } from '@/components/practices-section'
import { CasesSection } from '@/components/cases-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Practice Areas — Maritime & Commercial Law in Egypt | Soliman Advocates',
  description:
    'Maritime law at the core — ship arrest, marine insurance, environmental claims — supported by corporate, real estate, IP and employment practices in Egypt.',
  alternates: { canonical: '/practices' },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero page="practices" />
        <PracticesSection />
        <CasesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
