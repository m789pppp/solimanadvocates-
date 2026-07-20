'use client'

import {
  Ship,
  Home,
  Lightbulb,
  FileText,
  Building2,
  ShieldCheck,
  Leaf,
  Users,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Ship, Home, Lightbulb, FileText, Building2, ShieldCheck, Leaf, Users]

export function PracticesSection() {
  const { t } = useLanguage()

  return (
    <section
      id="practices"
      className="scroll-mt-24 border-y border-border/60 bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.practices.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.practices.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {t.practices.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.practices.items.map((item, i) => {
            const Icon = icons[i] ?? Ship
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
