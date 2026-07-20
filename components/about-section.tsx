'use client'

import { Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src="/images/about-suez.jpg"
              loading="lazy"
              alt={t.about.badge}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 start-6 rounded-lg border border-primary/40 bg-card px-5 py-4 shadow-xl">
            <p className="font-serif text-2xl font-semibold text-primary">1988</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.about.badge}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.about.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {t.about.body1}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.about.body2}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.about.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
