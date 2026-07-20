'use client'

import { useLanguage } from '@/components/language-provider'

export function MarqueeStrip() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {t.marquee}
        </p>
      </div>
    </section>
  )
}
