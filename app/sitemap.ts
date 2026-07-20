import type { MetadataRoute } from 'next'
import { SERVICE_SLUGS } from '@/lib/content'
import { INSIGHT_SLUGS } from '@/lib/insights'

const BASE = 'https://www.solimanadvocates.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/practices', priority: 0.8 },
    { path: '/people', priority: 0.7 },
    { path: '/insights', priority: 0.8 },
    { path: '/about', priority: 0.6 },
    { path: '/faq', priority: 0.6 },
    { path: '/contact', priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const insightPages = INSIGHT_SLUGS.map((slug) => ({
    url: `${BASE}/insights/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...insightPages]
}
