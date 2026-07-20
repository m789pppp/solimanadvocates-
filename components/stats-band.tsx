'use client'

import { useLanguage } from '@/components/language-provider'

export function StatsBand() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {t.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 bg-card px-6 py-10 text-center"
            >
              <span className="font-serif text-4xl font-semibold text-primary sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
