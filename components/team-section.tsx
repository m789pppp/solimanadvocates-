'use client'

import { Link2, Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
}

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section
      id="team"
      className="scroll-mt-24 border-y border-border/60 bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {t.team.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {t.team.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member) => (
            <div
              key={member.name}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-serif text-2xl font-semibold text-primary">
                {initials(member.name)}
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {member.focus}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                  <Link2 className="h-4 w-4" />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                  <Mail className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
