'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export type PageKey = 'about' | 'founder' | 'practices' | 'people' | 'faq' | 'contact'

const images: Record<PageKey, string> = {
  about: '/images/cta-port.jpg',
  founder: '/images/hero-suez.jpg',
  practices: '/images/cta-port.jpg',
  people: '/images/about-office.jpg',
  faq: '/images/services-hero.jpg',
  contact: '/images/cta-port.jpg',
}

export function PageHero({ page }: { page: PageKey }) {
  const { t, dir } = useLanguage()
  const d = t.pages[page]
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={images[page]}
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
          {d.eyebrow}
        </p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          {d.title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {d.subtitle}
        </p>
      </div>
    </section>
  )
}
