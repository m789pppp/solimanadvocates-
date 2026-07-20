'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import { content, type Lang, type Dict } from '@/lib/content'

type LanguageContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Dict
  toggle: () => void
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const applyLang = useCallback((next: Lang) => {
    setLangState(next)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next
      document.documentElement.dir = content[next].dir
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = content[lang].dir
  }, [lang])

  const toggle = useCallback(() => {
    applyLang(lang === 'en' ? 'ar' : 'en')
  }, [lang, applyLang])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir: content[lang].dir,
        t: content[lang],
        toggle,
        setLang: applyLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
