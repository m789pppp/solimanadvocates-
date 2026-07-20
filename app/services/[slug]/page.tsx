import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { ServiceDetail } from '@/components/service-detail'
import { SiteFooter } from '@/components/site-footer'
import { content, SERVICE_SLUGS } from '@/lib/content'

const BASE = 'https://www.solimanadvocates.com'

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const i = (SERVICE_SLUGS as readonly string[]).indexOf(slug)
  const item = content.en.services.items[i]
  if (!item) return { title: 'Services | Soliman Advocates' }
  return {
    title: `${item.title} in Egypt | Soliman Advocates`,
    description: item.intro,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${item.title} in Egypt | Soliman Advocates`,
      description: item.intro,
      url: `${BASE}/services/${slug}`,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const i = (SERVICE_SLUGS as readonly string[]).indexOf(slug)
  const item = content.en.services.items[i]

  const jsonLd = item
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `${item.title} in Egypt`,
          description: item.intro,
          serviceType: 'Ship arrest — maritime legal services',
          areaServed: ['Suez', 'Port Said', 'Alexandria', 'Damietta'],
          provider: {
            '@type': 'LegalService',
            name: 'Soliman Advocates',
            url: BASE,
            telephone: '+20-103-307-3171',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: `${BASE}/services`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: item.title,
              item: `${BASE}/services/${slug}`,
            },
          ],
        },
      ]
    : null

  return (
    <div className="min-h-screen">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <SiteHeader />
      <ServiceDetail slug={slug} />
      <SiteFooter />
    </div>
  )
}
