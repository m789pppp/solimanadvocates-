'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Anchor, Menu, X, Globe, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { insightsContent } from '@/lib/insights'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t, lang, toggle } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const links = [
    { href: '/practices', label: t.nav.practices },
    { href: '/services', label: t.nav.services },
    { href: '/people', label: t.nav.team },
    { href: '/insights', label: insightsContent[lang].navLabel },
    { href: '/faq', label: t.nav.faq },
    { href: '/contact', label: t.nav.contact },
  ]

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Top utility bar */}
      <div
        className={cn(
          'hidden overflow-hidden border-b border-border/40 bg-background/60 text-xs backdrop-blur transition-all duration-300 lg:block',
          scrolled ? 'max-h-0 border-b-0 opacity-0' : 'max-h-10 opacity-100',
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href={`tel:${t.contact.phoneValue.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span dir="ltr">{t.contact.phoneValue}</span>
            </a>
            <a
              href={`mailto:${t.contact.emailValue}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              {t.contact.emailValue}
            </a>
          </div>
          <p className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {t.contact.hours}
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight">
              {t.brand}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t.brandSub}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative py-1 text-sm font-medium transition-colors hover:text-foreground',
                'after:absolute after:-bottom-0.5 after:start-0 after:h-[2px] after:rounded-full after:bg-primary after:transition-all after:duration-300',
                isActive(link.href)
                  ? 'text-primary after:w-full'
                  : 'text-muted-foreground after:w-0 hover:after:w-full',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t.nav.cta}
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-secondary',
                  isActive(link.href) ? 'text-primary' : 'text-foreground/90',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              {t.nav.cta}
            </Link>
            <div className="mt-3 flex flex-col gap-2 border-t border-border/60 px-3 pt-4 text-sm text-muted-foreground">
              <a
                href={`tel:${t.contact.phoneValue.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span dir="ltr">{t.contact.phoneValue}</span>
              </a>
              <a
                href={`mailto:${t.contact.emailValue}`}
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-primary" />
                {t.contact.emailValue}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
