import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { InsightsPage } from '@/components/insights-page'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Maritime Law Insights — Ship Arrest in Egypt | Soliman Advocates',
  description:
    'Practical analysis on ship arrest and maritime law in Egypt from Soliman Advocates, Suez Canal.',
  alternates: { canonical: '/insights' },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <InsightsPage />
      <SiteFooter />
    </div>
  )
}
