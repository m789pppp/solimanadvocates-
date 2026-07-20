import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { ServicesPage } from '@/components/services-page'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Ship Arrest Services in Egypt — All Ports | Soliman Advocates',
  description:
    'Emergency ship arrest in Suez, Port Said, Alexandria and Damietta: bunker claims, cargo claims, agency fees, crew wages, mortgages and more. Free Executive Briefs (PDF).',
  alternates: { canonical: '/services' },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <ServicesPage />
      <SiteFooter />
    </div>
  )
}
