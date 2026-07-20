'use client'

import { MapPin, Phone, Mail, Globe, Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function ContactSection() {
  const { t, dir } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  const info = [
    {
      icon: MapPin,
      label: t.contact.office,
      value: t.contact.officeValue,
      href: undefined,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: t.contact.phoneValue,
      href: `tel:${t.contact.phoneValue.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: t.contact.emailValue,
      href: `mailto:${t.contact.emailValue}`,
    },
    {
      icon: Globe,
      label: t.contact.website,
      value: t.contact.websiteValue,
      href: `https://${t.contact.websiteValue}`,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      value: t.contact.hoursValue,
      href: undefined,
    },
  ]

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/cta-port.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/92" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.contact.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {t.contact.subtitle}
          </p>

          <div className="mt-10 space-y-6">
            {info.map((item) => {
              const Row = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 transition-colors hover:text-primary [&_p:last-child]:hover:text-primary"
                >
                  {Row}
                </a>
              ) : (
                <div key={item.label} className="flex items-start gap-4">
                  {Row}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl border border-border bg-card/80 p-8 backdrop-blur sm:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
            <Mail className="h-7 w-7" />
          </span>
          <h3 className="mt-6 font-serif text-2xl font-semibold">
            {t.contact.emailCtaTitle}
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {t.contact.emailCtaDesc}
          </p>
          <a
            href={`mailto:${t.contact.emailValue}`}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t.contact.emailButton}
            <Arrow className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${t.contact.emailValue}`}
            className="mt-4 text-center text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.contact.emailValue}
          </a>

          <div className="mt-8 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3">
            <Clock className="h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm font-medium text-foreground">
              {t.contact.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
