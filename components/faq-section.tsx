'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.faq.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-medium">
                    {item.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
