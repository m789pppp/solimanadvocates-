'use client'

import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t, dir } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-suez.jpg"
          fetchPriority="high"
          alt="Container ship transiting the Suez Canal at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-5 pb-24 pt-40 sm:px-8 sm:pt-48 lg:min-h-screen lg:pb-32">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t.hero.primary}
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50"
            >
              {t.hero.secondary}
            </a>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <dt className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                99%
              </dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                {t.hero.stat1}
              </dd>
            </div>
            <div>
              <dt className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                35+
              </dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                {t.hero.stat2}
              </dd>
            </div>
            <div>
              <dt className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                1988
              </dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                {t.hero.stat3}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
