'use client'

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { content, SERVICE_SLUGS } from '@/lib/content'
import { BriefRequestForm } from '@/components/brief-request-form'

export function ServiceDetail({ slug }: { slug: string }) {
  const { t, dir } = useLanguage()
  const i = (SERVICE_SLUGS as readonly string[]).indexOf(slug)
  const item = t.services.items[i]
  const en = content.en.services.items[i]
  const d = t.services.detail
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft

  if (!item || !en) return null

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

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <a
            href="/services"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Back className="h-4 w-4" />
            {d.allServices}
          </a>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            <FileText className="h-3.5 w-3.5" />
            {d.briefEyebrow}
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {item.desc}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="text-pretty text-lg leading-relaxed text-foreground/90">
              {item.intro}
            </p>
            <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {d.how}
            </h2>
            <ul className="mt-5 space-y-4">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-8">
              {t.services.ports.map((port) => (
                <span
                  key={port}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {port}
                </span>
              ))}
            </div>
          </div>

          {/* Brief request card — form always visible */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-primary/30 bg-card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug">
                {d.briefTitle}
              </h3>
              <p className="mb-6 mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {d.briefDesc}
              </p>
              <BriefRequestForm serviceEn={en.title} />
              <div className="mt-6 border-t border-border/60 pt-5">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {d.contactCta}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
