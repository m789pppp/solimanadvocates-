'use client'

import { Anchor, MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { insightsContent } from '@/lib/insights'

export function SiteFooter() {
  const { t, lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold">
                  {t.brand}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.brandSub}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.footer.practices}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.practices.items.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <a
                    href="/practices"
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t.nav.services}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.footer.firm}
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="/people"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {t.nav.team}
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {insightsContent[lang].navLabel}
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.contact.office}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {t.contact.officeValue}
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phoneValue.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span dir="ltr">{t.contact.phoneValue}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  {t.contact.emailValue}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {t.brand}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
