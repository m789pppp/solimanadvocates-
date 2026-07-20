'use client'

import { ArrowRight, ArrowLeft, Calendar } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { insightsContent, INSIGHT_SLUGS } from '@/lib/insights'

export function InsightsPage() {
  const { lang, dir, t } = useLanguage()
  const d = insightsContent[lang]
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-suez.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Back className="h-4 w-4" />
            {t.services.backHome}
          </a>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {d.hero.eyebrow}
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            {d.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {d.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {d.articles.map((article, i) => (
              <a
                key={article.title}
                href={`/insights/${INSIGHT_SLUGS[i] ?? ''}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50 sm:p-9"
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
                <h2 className="mt-5 font-serif text-2xl font-semibold leading-snug">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {d.readMore}
                  <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
