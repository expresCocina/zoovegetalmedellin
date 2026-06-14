'use client'

import { useEffect, useState } from 'react'

export default function HeroHeadline() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setStarted(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <h1 className="hero-headline" style={{
      fontFamily: "'Red Hat Display', sans-serif",
      fontWeight: 900,
      fontSize: 'clamp(2.2rem, 6.4vw, 4rem)',
      color: '#ffffff',
      letterSpacing: '-0.03em',
      lineHeight: 1.02,
      marginBottom: '1.1rem',
      overflow: 'hidden',
    }}>
      {/* Línea 1 */}
      <span className="hero-line-wrap">
        <span className={`hero-line ${started ? 'hero-line--in' : ''}`} style={{ transitionDelay: '0ms' }}>
          Creamos los productos
        </span>
      </span>
      {/* Línea 2 */}
      <span className="hero-line-wrap">
        <span className={`hero-line ${started ? 'hero-line--in' : ''}`} style={{ transitionDelay: '120ms' }}>
          de tu marca.
        </span>
      </span>
      {/* Línea 3 — degradado animado */}
      <span className="hero-line-wrap">
        <span
          className={`hero-line hero-gradient-text ${started ? 'hero-line--in' : ''}`}
          style={{ transitionDelay: '260ms' }}
        >
          Naturales.{' '}
          <span className={started ? 'hero-sweep' : ''}>Certificados.</span>
        </span>
      </span>
    </h1>
  )
}
