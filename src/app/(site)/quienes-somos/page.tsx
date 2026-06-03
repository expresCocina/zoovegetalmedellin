import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Zoovegetal',
  description: 'Laboratorio de desarrollo y planta de producción BPM en Medellín. Co-desarrollamos y maquilamos alimentos y suplementos para mascotas con ingredientes 99% naturales.',
}

const values = [
  {
    emoji: '🔒',
    title: 'Propiedad del Cliente',
    desc: 'Cada fórmula co-desarrollada es 100% propiedad intelectual del cliente. Confidencialidad y exclusividad garantizadas desde el primer acuerdo.',
    color: '#7ec823',
    bg: '#f0f9e0',
  },
  {
    emoji: '🌿',
    title: '99% Natural',
    desc: 'Materias primas de grado humano, extractos botánicos y fitoterapéuticos. Sin subproductos de baja calidad, sin conservantes sintéticos.',
    color: '#f5a623',
    bg: '#fff8ec',
  },
  {
    emoji: '🏆',
    title: 'Planta Certificada BPM',
    desc: 'Fabricación bajo Buenas Prácticas de Manufactura (BPMAA). Cada lote es documentado, trazable y entregado con certificado de análisis.',
    color: '#7ec823',
    bg: '#f0f9e0',
  },
  {
    emoji: '🤝',
    title: 'Aliado, No Competidor',
    desc: 'Zoovegetal no vende a granel ni compite con sus clientes. Nuestra razón de ser es el éxito del producto final del contratante.',
    color: '#f5a623',
    bg: '#fff8ec',
  },
]

const proteins = [
  { icon: '🥩', name: 'Res', type: 'Animal' },
  { icon: '🍗', name: 'Pollo', type: 'Animal' },
  { icon: '🐷', name: 'Cerdo', type: 'Animal' },
  { icon: '🫘', name: 'Garbanzo', type: 'Vegetal' },
  { icon: '🌱', name: 'Lenteja', type: 'Vegetal' },
  { icon: '🌾', name: 'Soya', type: 'Vegetal' },
]

const timeline = [
  { year: '2015', event: 'Fundación de Zoovegetal en Medellín, Antioquia.', active: false },
  { year: '2016', event: 'Obtención de la primera certificación BPM ICA.', active: false },
  { year: '2018', event: 'Expansión de líneas de producto a felinos y equinos.', active: false },
  { year: '2022', event: 'Superamos los 50 productos desarrollados para marcas clientes.', active: false },
  { year: '2024', event: 'Consolidación como referente de maquila de alimentos para mascotas en Colombia.', active: true },
]

const certifications = [
  { title: 'BPM ICA', sub: 'Buenas Prácticas de Manufactura — auditada anualmente', icon: '🏅' },
  { title: 'Registro ICA', sub: 'Certificación individual por cada producto fabricado', icon: '📋' },
  { title: 'Análisis Microbiológico', sub: 'Control de calidad documentado por lote', icon: '🔬' },
  { title: 'Análisis Bromatológico', sub: 'Composición nutricional certificada en laboratorio', icon: '🧪' },
]

// Equipo / Fundador
const team = [
  {
    name: 'Fundador & Director',
    role: 'Nutrición Animal — Medellín',
    bio: 'Más de 9 años desarrollando fórmulas nutricionales con ingredientes de grado humano para mascotas. Fundó Zoovegetal con la visión de democratizar el acceso a alimentos premium para animales.',
    emoji: '👨‍🔬',
    color: '#f0f9e0',
    border: 'rgba(126,200,35,0.2)',
  },
  {
    name: 'Equipo Técnico',
    role: 'Formulación y Control de Calidad',
    bio: 'Profesionales en nutrición, veterinaria y bromatología que garantizan que cada lote cumpla con los más altos estándares antes de salir de la planta.',
    emoji: '🔬',
    color: '#fff8ec',
    border: 'rgba(245,166,35,0.2)',
  },
  {
    name: 'Equipo de Producción',
    role: 'Planta certificada BPM ICA',
    bio: 'Operarios capacitados en BPM con protocolos estrictos de higiene y manipulación. Cada turno documentado y trazable desde la materia prima hasta el producto terminado.',
    emoji: '🏭',
    color: '#edf7ec',
    border: 'rgba(126,200,35,0.2)',
  },
]

export default function QuienesSomosPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <div style={{
        padding: '7rem 1.5rem 5rem',
        textAlign: 'center',
        background: 'linear-gradient(145deg, #021f01 0%, #063b05 50%, #0d5c0b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '10%', right: '5%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126,200,35,0.14) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.35rem 1rem',
            borderRadius: '100px',
            border: '1px solid rgba(126,200,35,0.35)',
            background: 'rgba(126,200,35,0.1)',
            color: '#9fd63a',
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            marginBottom: '1.5rem',
          }}>
            Nuestra Historia
          </span>
          <h1 style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            marginBottom: '1.25rem',
          }}>
            Tu aliado en{' '}
            <span style={{ color: '#9fd63a' }}>nutrición animal</span>
          </h1>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.68)',
            lineHeight: 1.75,
            maxWidth: '580px',
            margin: '0 auto',
          }}>
            Desde 2015 en Medellín, somos el laboratorio de desarrollo y la planta de manufactura
            que las marcas necesitan para lanzar productos de nutrición animal 99% naturales bajo
            su propia marca.
          </p>
        </div>
      </div>

      {/* ── Misión — concisa (reemplaza 300+ palabras) ── */}
      <section style={{ padding: '7rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left — mission text — CONDENSADO */}
            <div>
              <span className="section-badge">Misión</span>
              <h2 style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--green-dark)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}>
                Desarrollamos soluciones.<br />
                <span style={{ color: 'var(--green-bright)' }}>Tú construyes la marca.</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.25rem' }}>
                {[
                  { icon: '🔒', txt: 'Cada fórmula co-desarrollada es propiedad exclusiva del cliente. Confidencialidad total garantizada desde el inicio.' },
                  { icon: '🌿', txt: 'Usamos materias primas 99% naturales de grado humano, plantas medicinales y extractos botánicos. Sin subproductos.' },
                  { icon: '🏭', txt: 'Planta propia certificada BPM ICA en Medellín. Fabricación trazable, documentada y lista para registro ICA.' },
                ].map((pt) => (
                  <div key={pt.txt} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '1px' }}>{pt.icon}</span>
                    <p style={{
                      fontFamily: "'Lexend Deca', sans-serif",
                      fontSize: '0.95rem',
                      color: 'var(--gray-600)',
                      lineHeight: 1.75,
                    }}>{pt.txt}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link href="/contacto" className="btn-primary">
                  Trabajar con nosotros
                  <ArrowRight size={17} />
                </Link>
                <Link href="/servicios" className="btn-amber">
                  Ver servicios
                </Link>
              </div>
            </div>

            {/* Right — values grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {values.map((v) => (
                <div
                  key={v.title}
                  className="card"
                  style={{
                    padding: '1.75rem',
                    background: v.bg,
                    border: `1.5px solid ${v.color}20`,
                  }}
                >
                  <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{v.emoji}</div>
                  <h3 style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: 'var(--green-dark)',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.5rem',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Lexend Deca', sans-serif",
                    fontSize: '0.82rem',
                    color: 'var(--gray-600)',
                    lineHeight: 1.65,
                  }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipo — personas detrás de la marca (Dr. Tim's style) ── */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Nuestro Equipo</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}>
              Las personas detrás{' '}
              <span style={{ color: 'var(--green-bright)' }}>de cada producto</span>
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'var(--gray-500)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Somos un equipo pequeño y apasionado. La transparencia comienza aquí.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem',
          }}>
            {team.map((member) => (
              <div
                key={member.name}
                className="card"
                style={{
                  padding: '2.5rem 2rem',
                  background: member.color,
                  border: `1.5px solid ${member.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Avatar placeholder */}
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: `2px solid ${member.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}>
                  {member.emoji}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: 'var(--green-dark)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}>
                    {member.name}
                  </h3>
                  <span style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    color: 'var(--green-bright)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase' as const,
                  }}>
                    {member.role}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.875rem',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section style={{ padding: '7rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-badge">Ingredientes</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              Solo ingredientes de{' '}
              <span style={{ color: 'var(--green-bright)' }}>grado humano</span>
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'var(--gray-500)',
              maxWidth: '480px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}>
              Las mismas materias primas que se usan en alimentos para personas. Sin atajos.
            </p>
          </div>

          {/* Protein grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}>
            {proteins.map((p) => (
              <div
                key={p.name}
                className="card"
                style={{ padding: '1.5rem 1rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>{p.icon}</div>
                <div style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: 'var(--green-dark)',
                  letterSpacing: '-0.01em',
                }}>
                  {p.name}
                </div>
                <div style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.72rem',
                  color: 'var(--gray-400)',
                  marginTop: '0.2rem',
                  fontWeight: 500,
                }}>
                  Proteína {p.type}
                </div>
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { title: 'Vitaminas y Minerales', desc: 'Extraídos de frutas y vegetales frescos para complementar la nutrición.', emoji: '🥦' },
              { title: 'Sin Conservantes Artificiales', desc: 'Formulaciones limpias sin colorantes ni conservantes artificiales.', emoji: '🚫' },
              { title: 'Altamente Digestibles', desc: 'Fórmulas optimizadas para la máxima absorción de nutrientes.', emoji: '✅' },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
                style={{ padding: '2rem', background: '#ffffff' }}
              >
                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{item.emoji}</div>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: 'var(--green-dark)',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.6rem',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.875rem',
                  color: 'var(--gray-500)',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{
        padding: '7rem 1.5rem',
        background: 'linear-gradient(160deg, #021f01 0%, #063b05 50%, #0d5c0b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-50px', right: '-50px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(126,200,35,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              borderRadius: '100px',
              border: '1px solid rgba(126,200,35,0.3)',
              background: 'rgba(126,200,35,0.08)',
              color: '#9fd63a',
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              marginBottom: '1.2rem',
            }}>
              Calidad Garantizada
            </span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
            }}>
              Certificaciones y estándares
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '1rem',
              maxWidth: '460px',
              margin: '1rem auto 0',
              lineHeight: 1.65,
            }}>
              No es marketing. Es documentación verificable que protege a tu marca y a los animales.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}>
            {certifications.map((cert) => (
              <div key={cert.title} className="card-glass" style={{ padding: '2.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.75rem', marginBottom: '1.1rem' }}>{cert.icon}</div>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem',
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.58)',
                  lineHeight: 1.6,
                }}>
                  {cert.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: '7rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-badge">Historia</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
            }}>
              Nuestro camino
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '32px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--green-bright), var(--green-light))',
              borderRadius: '1px',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
              {timeline.map((item) => (
                <div key={item.year} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  {/* Year circle */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    letterSpacing: '-0.01em',
                    position: 'relative',
                    zIndex: 1,
                    background: item.active
                      ? 'var(--green-bright)'
                      : 'var(--green-pale)',
                    color: 'var(--green-dark)',
                    boxShadow: item.active ? 'var(--shadow-green)' : 'none',
                    border: item.active ? 'none' : '2px solid rgba(126,200,35,0.2)',
                  }}>
                    {item.year}
                  </div>

                  {/* Event text */}
                  <div style={{ paddingTop: '1rem', flex: 1 }}>
                    <p style={{
                      fontFamily: "'Lexend Deca', sans-serif",
                      fontSize: '0.95rem',
                      color: item.active ? 'var(--green-dark)' : 'var(--gray-700)',
                      lineHeight: 1.65,
                      fontWeight: item.active ? 600 : 400,
                    }}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '6rem 1.5rem',
        textAlign: 'center',
        background: 'var(--green-pale)',
      }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.85rem, 4vw, 2.5rem)',
            color: 'var(--green-dark)',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>
            ¿Quieres crecer tu marca con nosotros?
          </h2>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif",
            fontSize: '1rem',
            color: 'var(--gray-600)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}>
            Somos el aliado que tu marca de alimentos para mascotas necesita.
          </p>
          <Link href="/contacto" className="btn-primary" style={{ fontSize: '0.95rem' }}>
            Contactar ahora
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  )
}
