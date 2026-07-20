'use client'

import { useEffect, useRef, useState } from 'react'
import { X, FileText, CheckCircle2, AlertTriangle, Loader2, Send } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { FIRM_EMAIL } from '@/lib/content'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function DownloadModal({
  serviceLabel,
  serviceEn,
  onClose,
}: {
  /** Service title in the visitor's language (shown in the modal) */
  serviceLabel: string
  /** Service title in English (used in the email to the firm) */
  serviceEn: string
  onClose: () => void
}) {
  const { t, lang } = useLanguage()
  const d = t.download
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

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

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={d.modalTitle}
    >
      <button
        aria-label={d.close}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-background/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-2xl sm:p-9">
        <button
          onClick={onClose}
          aria-label={d.close}
          className="absolute end-4 top-4 flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-semibold">
              {d.successTitle}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {d.successDesc}
            </p>
            <button
              onClick={onClose}
              className="mt-7 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {d.close}
            </button>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-primary">
              <FileText className="h-3.5 w-3.5" />
              {d.modalEyebrow}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug">
              {d.modalTitle}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {d.modalDesc}
            </p>
            <p className="mt-2 font-medium text-foreground">{serviceLabel}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="brief-name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {d.name}
                </label>
                <input
                  id="brief-name"
                  ref={nameRef}
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
                    <Send className="h-4 w-4" />
                    {d.submit}
                  </>
                )}
              </button>
              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                {d.privacy}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
