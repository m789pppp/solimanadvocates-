'use client'

import { Clock, UserCheck, TrendingUp, Globe2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Clock, UserCheck, TrendingUp, Globe2]

export function ApproachSection() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.approach.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.approach.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.approach.items.map((item, i) => {
            const Icon = icons[i] ?? Clock
            return (
              <div key={item.title} className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="mt-5 h-px w-10 bg-primary/50" />
                <h3 className="mt-5 font-serif text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
