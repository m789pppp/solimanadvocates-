'use client'

import { ArrowRight, ArrowLeft, Calendar } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { insightsContent, INSIGHT_SLUGS } from '@/lib/insights'

export function InsightsSection() {
  const { lang, dir } = useLanguage()
  const d = insightsContent[lang]
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="insights" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {d.latestEyebrow}
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {d.latestTitle}
            </h2>
          </div>
          <a
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {d.viewAll}
            <Arrow className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {d.articles.slice(0, 3).map((article, i) => (
            <a
              key={article.title}
              href={`/insights/${INSIGHT_SLUGS[i] ?? ''}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">
                  {article.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold leading-snug">
                {article.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {d.readMore}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
