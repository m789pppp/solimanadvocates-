'use client'

import {
  Fuel,
  Package,
  FileText,
  Landmark,
  Wrench,
  LifeBuoy,
  AlertTriangle,
  Users,
  Scale,
  Anchor,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Clock,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SERVICE_SLUGS } from '@/lib/content'

const icons = [
  Fuel,
  Package,
  FileText,
  Landmark,
  Wrench,
  LifeBuoy,
  AlertTriangle,
  Users,
  Scale,
  Anchor,
]

export function ServicesPage() {
  const { t, dir } = useLanguage()
  const s = t.services
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/services-hero.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        </div>

        <div className="mx-auto max-w-4xl px-5 pb-20 pt-36 text-center sm:px-8 sm:pt-44">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Back className="h-4 w-4" />
            {s.backHome}
          </a>
          <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            <Anchor className="h-3.5 w-3.5" />
            {s.badge}
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {s.title}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {s.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {s.ports.map((port) => (
              <span
                key={port}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90"
              >
                <MapPin className="h-4 w-4 text-primary" />
                {port}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Claim types */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {s.sectionTitle}
          </h2>
          <p className="mx-auto mb-14 mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            {t.download.note}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item, i) => {
              const Icon = icons[i] ?? Anchor
              const popular = 'popular' in item && item.popular
              return (
                <a
                  key={item.title}
                  href={`/services/${SERVICE_SLUGS[i] ?? ''}`}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
                >
                  {popular && (
                    <span className="absolute end-5 top-5 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                      {s.popular}
                    </span>
                  )}
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {s.learnMore}
                    <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="relative isolate overflow-hidden border-t border-border/60 py-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/cta-port.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/92" />
        </div>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            <Clock className="h-3.5 w-3.5" />
            {s.urgentEyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {s.urgentTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {s.urgentDesc}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {s.urgentCta}
            <Arrow className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
