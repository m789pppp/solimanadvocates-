import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { content } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Ship Arrest in Egypt: Frequently Asked Questions | Soliman Advocates',
  description:
    'How ships are arrested and released in Egypt — governing law, procedures, sister-ship arrest, bank guarantees and counter-security, answered by Soliman Advocates.',
  alternates: { canonical: '/faq' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.en.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <PageHero page="faq" />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
