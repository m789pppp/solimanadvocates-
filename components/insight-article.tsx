'use client'

import { ArrowRight, ArrowLeft, Calendar, Phone } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { insightsContent, INSIGHT_SLUGS } from '@/lib/insights'

export function InsightArticle({ slug }: { slug: string }) {
  const { lang, dir } = useLanguage()
  const d = insightsContent[lang]
  const i = (INSIGHT_SLUGS as readonly string[]).indexOf(slug)
  const article = d.articles[i]
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  if (!article) return null

  return (
    <main>
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/services-hero.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/85 to-background" />
        </div>
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
          <a
            href="/insights"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Back className="h-4 w-4" />
            {d.back}
          </a>
          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">
              {article.tag}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
          </div>
          <h1 className="mt-5 text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-7 flex items-center gap-3">
            <img
              src="/images/founder-photo.jpg"
              alt={d.author}
              className="h-11 w-11 rounded-full border border-primary/40 object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">
                {d.by} {d.author}
              </p>
              <p className="text-xs text-muted-foreground">{d.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {article.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-6 text-pretty leading-[1.85] text-foreground/90"
            >
              {paragraph}
            </p>
          ))}

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-primary/30 bg-card p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-semibold">{d.ctaTitle}</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {d.ctaDesc}
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              {d.ctaButton}
              <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
