'use client'

import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function CasesSection() {
  const { t } = useLanguage()

  return (
    <section id="cases" className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.cases.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.cases.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.cases.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-primary">
                  {item.tag}
                </span>
                <span className="text-muted-foreground">{item.year}</span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <CheckCircle2 className="h-4 w-4" />
                {item.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
