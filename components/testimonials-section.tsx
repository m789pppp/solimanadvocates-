'use client'

import { Quote } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <Quote className="h-8 w-8 text-primary/70" />
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-5 text-sm font-medium text-muted-foreground">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
