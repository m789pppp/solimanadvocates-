import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Contact Us — 24/7 Ship Arrest Line in Egypt | Soliman Advocates',
  description:
    'Reach Soliman Advocates in Port Tawfik, Suez. Emergency ship arrest line available 24/7 for all Egyptian ports: Suez, Port Said, Alexandria and Damietta.',
  alternates: { canonical: '/contact' },
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <PageHero page="contact" />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
