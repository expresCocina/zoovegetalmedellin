'use client'

import { useEffect, useState } from 'react'
import { useT } from '@/components/i18n/LanguageProvider'

const STORAGE_KEY = 'zoovegetal_cookie_consent'

export default function CookieConsent() {
  const t = useT()
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Pequeño retraso para que la aparición se sienta suave
        const timer = setTimeout(() => setShow(true), 800)
        return () => clearTimeout(timer)
      }
    } catch {
      setShow(true)
    }
  }, [])

  const decide = (value: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
      document.cookie = `cookie_consent=${value}; path=/; max-age=31536000; samesite=lax`
    } catch {
      /* noop */
    }
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10001,
        background: '#ffffff',
        borderTop: '3px solid #7ec823',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.14)',
        animation: 'cookie-up 0.4s cubic-bezier(0.22,1,0.36,1) both',
      }}
    >
      <style>{`
        @keyframes cookie-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1, minWidth: '260px' }}>
          <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>🍪</span>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif",
            fontSize: '0.88rem',
            color: 'var(--gray-600)',
            lineHeight: 1.55,
            margin: 0,
          }}>
            {t('Usamos cookies para mejorar tu experiencia en el sitio. Puedes aceptarlas o rechazarlas.')}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => decide('rejected')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '100px',
              border: '1.5px solid var(--gray-200)',
              background: '#ffffff',
              cursor: 'pointer',
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: 'var(--gray-600)',
              transition: 'all 0.15s ease',
            }}
          >
            {t('Rechazar')}
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="btn-primary"
            style={{ padding: '0.65rem 1.6rem', fontSize: '0.85rem' }}
          >
            {t('Aceptar')}
          </button>
        </div>
      </div>
    </div>
  )
}
