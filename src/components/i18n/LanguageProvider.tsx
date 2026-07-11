'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { translate, type Locale } from '@/lib/i18n/dictionary'

interface LanguageContextValue {
  locale: Locale
  t: (s: string) => string
  setLocale: (l: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const router = useRouter()

  const setLocale = useCallback((l: Locale) => {
    document.cookie = `locale=${l}; path=/; max-age=31536000; samesite=lax`
    setLocaleState(l)
    // Re-renderiza los Server Components con el nuevo idioma
    router.refresh()
  }, [router])

  const t = useCallback((s: string) => translate(locale, s), [locale])

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    // Fallback seguro si se usa fuera del provider
    return { locale: 'es', t: (s) => s, setLocale: () => {} }
  }
  return ctx
}

/** Atajo para componentes de cliente: const t = useT() */
export function useT() {
  return useLanguage().t
}
