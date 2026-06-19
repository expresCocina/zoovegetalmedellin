'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

export interface CarouselProduct {
  id: string
  name: string
  image: string | null
  subcategory: string
  category: string
  slug: string
}

const catMeta: Record<string, { emoji: string; label: string; grad: string; accent: string }> = {
  canino:               { emoji: '🐕', label: 'Caninos',           grad: 'linear-gradient(135deg, #1a3a08 0%, #2d5410 100%)', accent: '#9fd63a' },
  felino:               { emoji: '🐈', label: 'Felinos',           grad: 'linear-gradient(135deg, #3a2a08 0%, #5c4410 100%)', accent: '#fbb03b' },
  equino:               { emoji: '🐴', label: 'Equinos',           grad: 'linear-gradient(135deg, #0a2a08 0%, #1a4410 100%)', accent: '#9fd63a' },
  'pequeños-mamiferos': { emoji: '🐹', label: 'Pequeños Mamíferos', grad: 'linear-gradient(135deg, #2a1a3a 0%, #44285c 100%)', accent: '#c8a8e8' },
  avicola:              { emoji: '🐔', label: 'Aves',              grad: 'linear-gradient(135deg, #3a3208 0%, #5c5210 100%)', accent: '#fbcb3b' },
  porcino:              { emoji: '🐷', label: 'Porcinos',          grad: 'linear-gradient(135deg, #3a0820 0%, #5c1038 100%)', accent: '#f090b0' },
}

export default function HeroProductsCarousel({ products }: { products: CarouselProduct[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = products.length

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
        Presentaciones que fabricamos
      </div>

      {/* Pista de slides */}
      <div className="hpc-viewport">
        <div className="hpc-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {products.map((p) => {
            const meta = catMeta[p.category] ?? catMeta.canino
            return (
              <Link key={p.id} href={`/productos/${p.slug}`} className="hpc-slide" style={{ background: meta.grad }}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.name} className="hpc-img" />
                ) : (
                  <div className="hpc-placeholder" style={{ color: meta.accent }}>
                    <span style={{ fontSize: '4.5rem', lineHeight: 1 }}>{meta.emoji}</span>
                  </div>
                )}

                {/* Degradado + info */}
                <div className="hpc-info">
                  <span className="hpc-badge" style={{ color: meta.accent, borderColor: `${meta.accent}55`, background: `${meta.accent}1a` }}>
                    {p.subcategory}
                  </span>
                  <h3 className="hpc-name">{p.name}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Indicadores */}
      {count > 1 && (
        <div className="hpc-dots">
          {products.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Ver ${p.name}`}
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
          display: block; text-decoration: none;
          overflow: hidden;
        }
        .hpc-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .hpc-placeholder {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .hpc-info {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 1.5rem 1.25rem 1.1rem;
          background: linear-gradient(to top, rgba(2,18,1,0.92) 0%, rgba(2,18,1,0.55) 55%, transparent 100%);
        }
        .hpc-badge {
          display: inline-block; border: 1px solid; border-radius: 100px;
          font-family: 'Red Hat Display', sans-serif; font-weight: 700;
          font-size: 0.62rem; letter-spacing: 0.05em; text-transform: uppercase;
          padding: 0.15rem 0.6rem; margin-bottom: 0.45rem;
        }
        .hpc-name {
          font-family: 'Red Hat Display', sans-serif; font-weight: 800;
          font-size: 1.1rem; color: #ffffff; letter-spacing: -0.02em;
          line-height: 1.2; margin: 0;
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
