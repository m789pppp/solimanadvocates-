'use client'

import { useState } from 'react'
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Download,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { FIRM_EMAIL } from '@/lib/content'

type Status = 'idle' | 'sending' | 'success' | 'error'

/**
 * Inline lead-capture form: visitor leaves name + email,
 * the request is emailed to the firm via FormSubmit,
 * and the firm replies with the PDF brief.
 */
export function BriefRequestForm({ serviceEn }: { serviceEn: string }) {
  const { t, lang } = useLanguage()
  const d = t.download
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const subject = `Executive Brief Request — ${serviceEn}`

  const mailtoFallback = `mailto:${FIRM_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nRequested brief: ${serviceEn}`,
  )}`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FIRM_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          requested_brief: serviceEn,
          site_language: lang,
          _subject: subject,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h4 className="mt-4 font-serif text-xl font-semibold">
          {d.successTitle}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {d.successDesc}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="brief-name"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          {d.name}
        </label>
        <input
          id="brief-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={d.namePlaceholder}
          className="w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-ring/30"
        />
      </div>
      <div>
        <label
          htmlFor="brief-email"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          {d.email}
        </label>
        <input
          id="brief-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={d.emailPlaceholder}
          dir="ltr"
          className="w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-ring/30 rtl:text-right"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
          <p className="inline-flex items-center gap-2 font-semibold text-foreground">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            {d.errorTitle}
          </p>
          <p className="mt-1 text-muted-foreground">
            {d.errorDesc}{' '}
            <a
              href={mailtoFallback}
              className="font-medium text-primary underline underline-offset-4"
            >
              {FIRM_EMAIL}
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {d.sending}
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            {d.submit}
          </>
        )}
      </button>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        {d.privacy}
      </p>
    </form>
  )
}
