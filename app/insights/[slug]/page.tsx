import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { InsightArticle } from '@/components/insight-article'
import { SiteFooter } from '@/components/site-footer'
import { insightsContent, INSIGHT_SLUGS } from '@/lib/insights'

const BASE = 'https://www.solimanadvocates.com'

/** Publication dates, same order as INSIGHT_SLUGS */
const PUBLISH_DATES = ['2026-07-01', '2026-06-01', '2026-05-01', '2026-03-01']

export const dynamicParams = false

export function generateStaticParams() {
  return INSIGHT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const i = (INSIGHT_SLUGS as readonly string[]).indexOf(slug)
  const article = insightsContent.en.articles[i]
  if (!article) return { title: 'Insights | Soliman Advocates' }
  return {
    title: `${article.title} | Soliman Advocates`,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `${BASE}/insights/${slug}`,
      publishedTime: PUBLISH_DATES[i],
      authors: ['Usama Soliman'],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const i = (INSIGHT_SLUGS as readonly string[]).indexOf(slug)
  const article = insightsContent.en.articles[i]

  const jsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        datePublished: PUBLISH_DATES[i],
        inLanguage: ['en', 'ar'],
        author: {
          '@type': 'Person',
          name: 'Usama Soliman',
          jobTitle: 'Founder & CEO, Cassation Lawyer',
          worksFor: { '@type': 'LegalService', name: 'Soliman Advocates' },
        },
        publisher: {
          '@type': 'Organization',
          name: 'Soliman Advocates',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE}/og-image.png`,
          },
        },
        mainEntityOfPage: `${BASE}/insights/${slug}`,
      }
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
      <InsightArticle slug={slug} />
      <SiteFooter />
    </div>
  )
}
