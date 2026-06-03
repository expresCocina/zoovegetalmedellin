import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Maquila y Co-Desarrollo | Zoovegetal',
  description: 'Co-desarrollo y maquila exclusiva de alimentos y suplementos para mascotas. Fórmulas personalizadas 99% naturales, certificadas BPM. Tu marca, nuestra planta.',
}

const phases = [
  {
    id: 'conceptualizacion',
    number: '01',
    emoji: '🔬',
    title: 'Conceptualización y Diseño de Fórmula',
    subtitle: 'Tu idea. Nuestra ciencia.',
    desc: 'Acompañamos la creación del producto ideal combinando fitoterapia, nutrición avanzada y bienestar animal. Diseñamos fórmulas personalizadas con materias primas 99% naturales, de grado humano, adaptadas a la especie, etapa de vida y objetivo funcional del producto.',
    features: [
      'Consultoría en nutrición animal y fitoterapia aplicada',
      'Diseño de fórmula personalizada para cada especie',
      'Selección de ingredientes botánicos y materias primas premium',
      'Definición de formatos galénicas: bits, polvos, cremosos, pellets',
      'Acuerdo de confidencialidad y propiedad intelectual del cliente',
    ],
    accentColor: '#7ec823',
    bgColor: '#f0f9e0',
    note: 'Cada fórmula desarrollada es 100% de propiedad del cliente.',
  },
  {
    id: 'pruebas',
    number: '02',
    emoji: '🐾',
    title: 'Pruebas de Palatabilidad y Estabilidad',
    subtitle: 'Garantía de que funciona — y que les encanta.',
    desc: 'Antes de fabricar a escala, el producto pasa por pruebas rigurosas de palatabilidad con animales reales y análisis de estabilidad fisicoquímica y microbiológica. Solo cuando el resultado es óptimo, avanzamos a producción.',
    features: [
      'Pruebas de palatabilidad con animales de la especie objetivo',
      'Análisis bromatológico y microbiológico por lote piloto',
      'Evaluación de estabilidad y vida útil del producto',
      'Ajustes de fórmula hasta lograr el estándar ideal',
      'Documentación técnica completa del proceso',
    ],
    accentColor: '#f5a623',
    bgColor: '#fff8ec',
    note: 'Avanzamos a producción solo cuando el producto supera todas las pruebas.',
  },
  {
    id: 'fabricacion',
    number: '03',
    emoji: '🏭',
    title: 'Fabricación Bajo Normas BPM',
    subtitle: 'Rigor farmacéutico. Escala industrial.',
    desc: 'Producción a escala en nuestra planta certificada BPM ICA, bajo los más altos estándares de inocuidad alimentaria. Cada lote es documentado, trazable y entregado con certificado de análisis. Tu marca en cada empaque.',
    features: [
      'Producción en planta propia certificada BPM',
      'Fabricación white label bajo tu marca exclusiva',
      'Control de calidad documentado en cada lote',
      'Bits/galletas, polvos, cremosos y pelletizados',
      'Registro ICA con acompañamiento en trámite',
      'Cumplimiento de normatividad BPMAA vigente',
    ],
    accentColor: '#7ec823',
    bgColor: '#edf7ec',
    note: 'Zoovegetal no vende a granel ni compite con los productos de sus clientes.',
  },
  {
    id: 'entrega',
    number: '04',
    emoji: '📦',
    title: 'Entrega de Producto Terminado',
    subtitle: 'Listo para vender. Listo para tu marca.',
    desc: 'Recibes tu producto terminado, empacado y etiquetado bajo tu marca, acompañado de todos los documentos técnicos y registros necesarios para su comercialización inmediata. Sin complicaciones logísticas.',
    features: [
      'Producto terminado listo para comercialización',
      'Empaque y etiquetado bajo la marca del cliente',
      'Certificados de análisis y documentación ICA',
      'Entrega a nivel nacional',
      'Soporte técnico post-entrega',
    ],
    accentColor: '#063b05',
    bgColor: '#f0f9e0',
    note: 'El producto sale listo para que tu equipo lo comercialice desde el primer día.',
  },
]

const formats = [
  {
    emoji: '🦴',
    title: 'Bits y Galletas',
    desc: 'Snacks funcionales de alta palatabilidad. Ideales para premios con propósito terapéutico o nutricional.',
  },
  {
    emoji: '🌿',
    title: 'Polvos Solubles',
    desc: 'Fáciles de dosificar y mezclar con el alimento diario. Perfectos para suplementación de alta absorción.',
  },
  {
    emoji: '🥄',
    title: 'Cremosos y Pastas',
    desc: 'Innovación en textura para alta aceptación y palatabilidad. Absorción rápida y atractivo sensorial.',
  },
  {
    emoji: '⚙️',
    title: 'Peletizados y Extrusión en Frío',
    desc: 'Formatos de alta densidad nutricional, ideales para equinos y líneas de suplementación especializada.',
  },
]

const sectors = [
  {
    icon: '🌱',
    title: 'Emprendedores',
    desc: 'Tienes la idea y la visión. Nosotros ponemos la ciencia, la planta y el proceso. Te llevamos del concepto al producto real.',
    color: '#7ec823',
    bg: '#f0f9e0',
  },
  {
    icon: '📈',
    title: 'Marcas Consolidadas',
    desc: 'Amplía tu portafolio con nuevas líneas o formatos. Desarrollo ágil y producción confiable para escalar tu marca.',
    color: '#f5a623',
    bg: '#fff8ec',
  },
  {
    icon: '🏢',
    title: 'Grandes Compañías',
    desc: 'Aliado estratégico para grupos empresariales del sector agroveterinario que requieren maquila de alto volumen y estándares rigurosos.',
    color: '#063b05',
    bg: '#edf7ec',
  },
]

export default function ServiciosPage() {
  return (
    <div>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #021f01 0%, #063b05 60%, #0a4a08 100%)',
        padding: 'clamp(7rem, 14vw, 10rem) 1.5rem clamp(4rem, 8vw, 6rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(141,208,43,0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '100px',
            border: '1px solid rgba(141,208,43,0.4)', background: 'rgba(141,208,43,0.1)',
            color: '#9fd63a', fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em',
            textTransform: 'uppercase' as const, marginBottom: '1.5rem',
          }}>
            Maquila y Co-Desarrollo B2B
          </span>
          <h1 style={{
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#ffffff',
            letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1.25rem',
          }}>
            Nosotros fabricamos.<br />
            <span style={{ color: '#9fd63a' }}>Tú construyes tu marca.</span>
          </h1>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif", fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 2.5rem',
          }}>
            Co-desarrollo y maquila exclusiva de alimentos y suplementos funcionales para mascotas.
            Fórmulas 99% naturales, de propiedad del cliente, elaboradas bajo normas BPM.
          </p>
          <Link href="/contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'linear-gradient(135deg, #7ec823, #5a9a18)',
            color: 'white', padding: '0.95rem 2.2rem', borderRadius: '100px',
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
            fontSize: '0.95rem', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(126,200,35,0.35)',
          }}>
            Cotiza tu proyecto de maquila <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Sectores */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">¿Para quién trabajamos?</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--green-dark)',
              letterSpacing: '-0.03em', marginBottom: '0.75rem',
            }}>
              Atendemos marcas en todas las etapas
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif", fontSize: '1rem',
              color: 'var(--gray-500)', maxWidth: '520px', margin: '0 auto',
            }}>
              Desde la primera idea hasta el portafolio consolidado. Tu tamaño no importa, tu compromiso sí.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {sectors.map((s) => (
              <div key={s.title} style={{
                background: s.bg, borderRadius: '20px', padding: '2rem',
                border: `1px solid ${s.color}25`,
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
                  fontSize: '1.15rem', color: 'var(--green-dark)', marginBottom: '0.6rem',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.88rem',
                  color: 'var(--gray-600)', lineHeight: 1.7, margin: 0,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso 4 fases */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#f8faf5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Proceso de Co-Desarrollo</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--green-dark)',
              letterSpacing: '-0.03em', marginBottom: '0.75rem',
            }}>
              Del concepto al producto terminado
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif", fontSize: '1rem',
              color: 'var(--gray-500)', maxWidth: '520px', margin: '0 auto',
            }}>
              Un proceso transparente, documentado y diseñado para que tu marca llegue al mercado con confianza.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {phases.map((phase, i) => (
              <div
                key={phase.id}
                id={phase.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid var(--gray-100)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Visual side */}
                <div style={{
                  order: i % 2 === 0 ? 0 : 1,
                  background: phase.bgColor,
                  padding: '3rem 2.5rem',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  minHeight: '280px', textAlign: 'center', gap: '1rem',
                }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '24px',
                    background: 'white',
                    boxShadow: `0 8px 24px ${phase.accentColor}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.4rem',
                  }}>{phase.emoji}</div>
                  <div style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 900, fontSize: '4rem', color: `${phase.accentColor}20`,
                    lineHeight: 1,
                  }}>{phase.number}</div>
                  <div style={{
                    background: phase.accentColor + '18',
                    border: `1px solid ${phase.accentColor}30`,
                    borderRadius: '100px', padding: '0.3rem 0.9rem',
                    fontFamily: "'Lexend Deca', sans-serif",
                    fontSize: '0.75rem', color: phase.accentColor,
                    fontWeight: 600,
                  }}>
                    Fase {phase.number}
                  </div>
                </div>

                {/* Content side */}
                <div style={{ order: i % 2 === 0 ? 1 : 0, padding: '2.5rem' }}>
                  <p style={{
                    fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.78rem',
                    color: phase.accentColor, fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const, marginBottom: '0.4rem',
                  }}>{phase.subtitle}</p>
                  <h3 style={{
                    fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
                    fontSize: '1.4rem', color: 'var(--green-dark)',
                    letterSpacing: '-0.02em', marginBottom: '0.85rem',
                  }}>{phase.title}</h3>
                  <p style={{
                    fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.88rem',
                    color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: '1.25rem',
                  }}>{phase.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {phase.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle size={15} style={{ color: phase.accentColor, flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.84rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    background: phase.bgColor, borderRadius: '12px',
                    padding: '0.75rem 1rem', border: `1px solid ${phase.accentColor}20`,
                    fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.78rem',
                    color: 'var(--gray-600)', lineHeight: 1.5,
                  }}>
                    <strong style={{ color: phase.accentColor }}>Nota: </strong>{phase.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos galénicas */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Capacidades de Producción</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--green-dark)',
              letterSpacing: '-0.03em', marginBottom: '0.75rem',
            }}>
              Formatos que fabricamos para tu marca
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif", fontSize: '1rem',
              color: 'var(--gray-500)', maxWidth: '520px', margin: '0 auto',
            }}>
              Cada formato está diseñado para maximizar la palatabilidad y el valor nutricional según la especie y el objetivo del producto.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {formats.map((f) => (
              <div key={f.title} style={{
                background: '#f8faf5', borderRadius: '20px', padding: '1.75rem',
                border: '1px solid rgba(126,200,35,0.15)', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.emoji}</div>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
                  fontSize: '1rem', color: 'var(--green-dark)', marginBottom: '0.5rem',
                }}>{f.title}</h3>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.84rem',
                  color: 'var(--gray-500)', lineHeight: 1.65, margin: 0,
                }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        background: 'linear-gradient(135deg, #f0f9e0 0%, #e8f5cc 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
          <h2 style={{
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--green-dark)',
            letterSpacing: '-0.03em', marginBottom: '1rem',
          }}>
            ¿Listo para crear tu producto?
          </h2>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif", fontSize: '1rem',
            color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '2rem',
          }}>
            Cuéntanos tu idea. En 24 horas te respondemos con una propuesta técnica inicial sin costo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'linear-gradient(135deg, #7ec823, #5a9a18)',
              color: 'white', padding: '0.95rem 2.2rem', borderRadius: '100px',
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
              fontSize: '0.95rem', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(126,200,35,0.3)',
            }}>
              Cotizar proyecto <ArrowRight size={17} />
            </Link>
            <a href="https://wa.me/573136525779?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20maquila%20con%20Zoovegetal." target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#25d366', color: 'white',
              padding: '0.95rem 2.2rem', borderRadius: '100px',
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
              fontSize: '0.95rem', textDecoration: 'none',
            }}>
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
