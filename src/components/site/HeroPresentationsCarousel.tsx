'use client'

import { useState, useEffect, useCallback } from 'react'
import { useT } from '@/components/i18n/LanguageProvider'

export default function HeroPresentationsCarousel({ images }: { images: string[] }) {
  const t = useT()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])

  useEffect(() => {
    if (count <= 1 || paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 4000)
    return () => clearInterval(t)
  }, [count, paused])

  if (count === 0) return null

  return (
    <div
      className="hpc-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Etiqueta superior */}
      <div className="hpc-tag">
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#9fd63a', display: 'inline-block' }} />
        {t('Presentaciones que fabricamos')}
      </div>

      {/* Pista de slides */}
      <div className="hpc-viewport">
        <div className="hpc-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="hpc-slide">
              {/* Fondo difuminado (efecto espejo) — misma foto */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" aria-hidden className="hpc-bg" />
              {/* Foto completa al frente */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Presentación ${i + 1}`} className="hpc-img" />
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      {count > 1 && (
        <div className="hpc-dots">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver presentación ${i + 1}`}
              onClick={() => go(i)}
              className={`hpc-dot ${i === index ? 'hpc-dot--on' : ''}`}
            />
          ))}
        </div>
      )}

      <style>{`
        .hpc-wrap {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(141,208,43,0.22);
          border-radius: 28px;
          padding: 1.1rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .hpc-tag {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: 'Red Hat Display', sans-serif; font-weight: 800;
          font-size: 0.72rem; color: #9fd63a; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 0.3rem 0.4rem 0.85rem;
        }
        .hpc-viewport { overflow: hidden; border-radius: 20px; }
        .hpc-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hpc-slide {
          position: relative; flex: 0 0 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #0a1f06;
        }
        /* Fondo difuminado de la misma imagen (efecto espejo/vidrio) */
        .hpc-bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: blur(22px) brightness(0.55) saturate(1.1);
          transform: scale(1.2);
        }
        /* Foto completa, sin recortes, centrada al frente */
        .hpc-img {
          position: absolute; inset: 0; z-index: 1;
          width: 100%; height: 100%; object-fit: contain; display: block;
        }
        .hpc-dots {
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
          padding-top: 0.9rem;
        }
        .hpc-dot {
          width: 7px; height: 7px; border-radius: 50%; border: none; cursor: pointer;
          background: rgba(255,255,255,0.25); padding: 0;
          transition: all 0.3s ease;
        }
        .hpc-dot--on { width: 22px; border-radius: 4px; background: #9fd63a; }
      `}</style>
    </div>
  )
}
