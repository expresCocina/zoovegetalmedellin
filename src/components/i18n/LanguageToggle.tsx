'use client'

import { useLanguage } from './LanguageProvider'

export default function LanguageToggle({ solid = true }: { solid?: boolean }) {
  const { locale, setLocale } = useLanguage()

  const base = {
    fontFamily: "'Red Hat Display', sans-serif",
    fontWeight: 800 as const,
    fontSize: '0.72rem',
    letterSpacing: '0.02em',
    padding: '0.28rem 0.55rem',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    lineHeight: 1,
  }

  const activeStyle = {
    ...base,
    background: solid ? 'var(--green-bright)' : 'rgba(255,255,255,0.95)',
    color: 'var(--green-dark)',
  }
  const inactiveStyle = {
    ...base,
    background: 'transparent',
    color: solid ? 'var(--gray-500)' : 'rgba(255,255,255,0.7)',
  }

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.1rem',
        padding: '0.15rem',
        borderRadius: '10px',
        background: solid ? 'var(--gray-100)' : 'rgba(255,255,255,0.12)',
        border: solid ? '1px solid var(--gray-200)' : '1px solid rgba(255,255,255,0.18)',
      }}
    >
      <button
        type="button"
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        style={locale === 'es' ? activeStyle : inactiveStyle}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        style={locale === 'en' ? activeStyle : inactiveStyle}
      >
        EN
      </button>
    </div>
  )
}
