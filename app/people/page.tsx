import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { FounderSection } from '@/components/founder-section'
import { TeamSection } from '@/components/team-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Our People — Maritime Lawyers in Suez, Egypt | Soliman Advocates',
  description:
    'Meet the Soliman Advocates team, led by founder Mr. Usama Soliman, cassation lawyer and one of Egypt’s leading ship arrest specialists.',
  alternates: { canonical: '/people' },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero page="people" />
        <FounderSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
