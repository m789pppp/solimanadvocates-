'use client'

import { useLanguage } from '@/components/language-provider'

export function FounderSection() {
  const { t } = useLanguage()

  return (
    <section
      id="founder"
      className="scroll-mt-24 border-y border-border/60 bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src="/images/founder-photo.jpg"
              loading="lazy"
              alt={t.founder.name}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 end-6 rounded-lg border border-primary/40 bg-card px-5 py-4 shadow-xl">
            <p className="font-serif text-2xl font-semibold text-primary">35+</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {t.hero.stat2}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.founder.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.founder.name}
          </h2>
          <p className="mt-2 text-sm font-medium text-primary">
            {t.founder.role}
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {t.founder.body1}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.founder.body2}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.founder.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
