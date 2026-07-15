import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { getSetting } from '@/lib/settings'
import { getT } from '@/lib/i18n/server'

export const metadata: Metadata = {
  title: 'Presentaciones | Zoovegetal',
  description: 'Presentaciones que fabricamos para tu marca: croqueta, peletizado y polvo. Maquila y co-desarrollo de alimentos y suplementos para mascotas, 99% naturales, bajo normas BPM.',
}

export const dynamic = 'force-dynamic'

const presentations = [
  {
    emoji: '🦴',
    title: 'Bits o galletas',
    desc: 'Snacks funcionales de alta palatabilidad, ideales como premios con propósito nutricional.',
    points: ['Alta palatabilidad', 'Fórmula personalizada', 'Empacado bajo tu marca'],
    bg: 'linear-gradient(135deg, #f0f9e0 0%, #e8f5d0 100%)',
    accent: '#7ec823',
  },
  {
    emoji: '🥄',
    title: 'Polvos funcionales',
    desc: 'Suplementos y mezclas en polvo, de fácil dosificación y alta absorción para el día a día.',
    points: ['Fácil dosificación', 'Alta absorción', 'Mezcla con el alimento'],
    bg: 'linear-gradient(135deg, #fff8ec 0%, #fff3d6 100%)',
    accent: '#f5a623',
  },
  {
    emoji: '❄️',
    title: 'Prensado en frío',
    desc: 'Elaborado por prensado en frío, preservando al máximo los nutrientes y la palatabilidad.',
    points: ['Preserva nutrientes', 'Sin altas temperaturas', 'Alta palatabilidad'],
    bg: 'linear-gradient(135deg, #edf7ec 0%, #dff0de 100%)',
    accent: '#063b05',
  },
  {
    emoji: '⚙️',
    title: 'Peletizado',
    desc: 'Formato peletizado de alta densidad nutricional, ideal para líneas especializadas.',
    points: ['Alta densidad nutricional', 'Líneas especializadas', 'Formato uniforme'],
    bg: 'linear-gradient(135deg, #f0f9e0 0%, #dff0cc 100%)',
    accent: '#7ec823',
  },
]

function parsePresentations(raw: string | null): string[] {
  if (!raw) return []
  try {
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string' && x) : []
  } catch {
    return []
  }
}

export default async function PresentacionesPage() {
  const gallery = parsePresentations(await getSetting('hero_presentations'))
  const t = await getT()

  return (
    <div>
      {/* ── Hero ── */}
      <div style={{
        padding: '7rem 1.5rem 4rem',
        textAlign: 'center',
        background: 'linear-gradient(145deg, #021f01 0%, #063b05 50%, #0d5c0b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126,200,35,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '100px',
            border: '1px solid rgba(126,200,35,0.35)', background: 'rgba(126,200,35,0.1)',
            color: '#9fd63a', fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.12em',
            textTransform: 'uppercase' as const, marginBottom: '1.25rem',
          }}>
            {t('Presentaciones')}
          </span>
          <h1 style={{
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ffffff',
            letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem',
          }}>
            {t('Presentaciones que')}<br />{t('fabricamos para tu marca')}
          </h1>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif", fontSize: '1rem',
            color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto',
          }}>
            {t('Maquilamos en distintos formatos según el objetivo de tu producto. Cada presentación es personalizable, 99% natural y de propiedad exclusiva del cliente.')}
          </p>
        </div>
      </div>

      {/* ── Presentaciones (formatos) ── */}
      <section style={{ padding: 'clamp(3.5rem, 7vw, 5rem) 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem',
          }}>
            {presentations.map((p) => (
              <div key={p.title} className="card-category" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  background: p.bg, padding: '2.75rem 2rem 2.25rem',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: '-20px', right: '-20px',
                    width: '110px', height: '110px', borderRadius: '50%',
                    background: p.accent, opacity: 0.08,
                  }} />
                  <div style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '1rem' }}>{p.emoji}</div>
                  <h3 style={{
                    fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
                    fontSize: '1.5rem', color: 'var(--green-dark)', letterSpacing: '-0.02em',
                  }}>
                    {t(p.title)}
                  </h3>
                </div>
                <div style={{
                  padding: '1.75rem 2rem 2rem', flex: 1, display: 'flex', flexDirection: 'column',
                  borderTop: `2px solid ${p.accent}25`,
                }}>
                  <p style={{
                    fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.92rem',
                    color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '1.25rem',
                  }}>
                    {t(p.desc)}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                        <CheckCircle size={15} style={{ color: p.accent, flexShrink: 0 }} />
                        <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.85rem', color: 'var(--gray-700)' }}>{t(pt)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Resalte: palatabilidad y proteína animal real */}
          <div style={{
            marginTop: '1.75rem',
            display: 'flex', alignItems: 'center', gap: '1rem',
            flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center',
            background: 'linear-gradient(135deg, #fff8ec 0%, #fff3d6 100%)',
            border: '1.5px solid rgba(245,166,35,0.4)',
            borderRadius: '20px', padding: '1.5rem 2rem',
          }}>
            <span style={{ fontSize: '1.75rem' }}>🥩</span>
            <span style={{
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#b07210', letterSpacing: '-0.01em', lineHeight: 1.4,
            }}>
              {t('Productos altamente palatables, con proteína animal real')}
              {' — '}
              <span style={{ color: '#c0392b' }}>{t('no harinas de sangre')}</span>
            </span>
          </div>

          {/* Mínimo por orden de compra */}
          <div style={{
            marginTop: '1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
            flexWrap: 'wrap', textAlign: 'center',
            background: 'linear-gradient(135deg, #063b05, #0a4a08)',
            borderRadius: '20px', padding: '1.5rem 2rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>⚖️</span>
            <span style={{
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.4,
            }}>
              {t('Mínimo de producción:')} <span style={{ color: '#9fd63a' }}>100 kg</span> {t('por referencia en orden de compra')}
            </span>
          </div>
        </div>
      </section>

      {/* ── Galería de presentaciones (gestionable desde el admin) ── */}
      {gallery.length > 0 && (
        <section style={{ padding: 'clamp(3.5rem, 7vw, 5rem) 1.5rem', background: '#f8faf5' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-badge">{t('Galería')}</span>
              <h2 style={{
                fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
                fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)', color: 'var(--green-dark)',
                letterSpacing: '-0.03em',
              }}>
                {t('Algunas presentaciones que hemos creado')}
              </h2>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.1rem',
            }}>
              {gallery.map((src, i) => (
                <div key={i} style={{
                  aspectRatio: '4 / 3', borderRadius: '18px', overflow: 'hidden',
                  border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)', background: '#fff',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Presentación ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <div style={{ padding: '3.5rem 1.5rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          borderRadius: '24px',
          padding: '3.5rem 3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #021f01 0%, #063b05 60%, #0d5c0b 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(126,200,35,0.12) 0%, transparent 70%)',
          }} />
          <h2 style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
          }}>
            {t('¿Quieres tu marca en estas presentaciones?')}
          </h2>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif",
            fontSize: '0.97rem',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '2rem',
            lineHeight: 1.65,
          }}>
            {t('Co-desarrollamos y maquilamos tu línea con fórmula personalizada, ingredientes 99% naturales y propiedad exclusiva del cliente.')}
          </p>
          <Link href="/contacto" className="btn-primary" style={{ fontSize: '0.95rem' }}>
            {t('Cotiza tu proyecto de maquila')}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  )
}
