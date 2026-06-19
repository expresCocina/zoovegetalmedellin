import Link from 'next/link'
import { ArrowRight, CheckCircle, Award, Leaf, Beaker, Truck, ChevronRight, ChevronDown } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { getSetting } from '@/lib/settings'
import HeroHeadline from '@/components/site/HeroHeadline'

// Render dinámico: refleja al instante los cambios hechos desde el admin
// (imagen del hero, productos destacados) sin necesidad de redesplegar.
export const dynamic = 'force-dynamic'

async function getFeaturedProducts() {
  try {
    return await prisma.product.findMany({
      where: { active: true, featured: true },
      orderBy: { order: 'asc' },
      take: 6,
    })
  } catch {
    return []
  }
}

async function getLatestPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      take: 3,
    })
  } catch {
    return []
  }
}

const categoryCards = [
  {
    id: 'canino',
    label: 'Caninos',
    emoji: '🐕',
    desc: 'Snacks, concentrado seco, comida cocida congelada y suplementos para perros de todas las razas y edades.',
    accentColor: '#7ec823',
    bgGradient: 'linear-gradient(135deg, #f0f9e0 0%, #e8f5d0 100%)',
    borderColor: 'rgba(126,200,35,0.2)',
    href: '/productos?cat=canino',
    tag: '20+ productos',
  },
  {
    id: 'felino',
    label: 'Felinos',
    emoji: '🐈',
    desc: 'Nutrición balanceada, galletas y suplementos especializados para gatos con ingredientes naturales.',
    accentColor: '#f5a623',
    bgGradient: 'linear-gradient(135deg, #fffbf0 0%, #fff3d6 100%)',
    borderColor: 'rgba(245,166,35,0.2)',
    href: '/productos?cat=felino',
    tag: '15+ productos',
  },
  {
    id: 'equino',
    label: 'Equinos',
    emoji: '🐴',
    desc: 'Concentrado, snacks y suplementos nutricionales pelletizados para caballos de alto rendimiento.',
    accentColor: '#063b05',
    bgGradient: 'linear-gradient(135deg, #edf7ec 0%, #dff0de 100%)',
    borderColor: 'rgba(6,59,5,0.15)',
    href: '/productos?cat=equino',
    tag: '10+ productos',
  },
  {
    id: 'pequeños-mamiferos',
    label: 'Pequeños Mamíferos',
    emoji: '🐹',
    desc: 'Nutrición específica para hámsters, cavia porcellus (cobayas) y oryctolagus cuniculus (conejos).',
    accentColor: '#a07cc5',
    bgGradient: 'linear-gradient(135deg, #f5f0ff 0%, #ede4ff 100%)',
    borderColor: 'rgba(160,124,197,0.2)',
    href: '/contacto',
    tag: 'Consultar',
  },
]

// Stats más específicos y creíbles
const stats = [
  { value: '9+', label: 'Años de experiencia', sub: 'Desde 2015 en Medellín', icon: '⏱️' },
  { value: '99%', label: 'Ingredientes naturales', sub: 'Grado humano', icon: '🌿' },
  { value: 'BPM', label: 'Certificación ICA', sub: 'Auditada anualmente', icon: '🏆' },
  { value: '100%', label: 'Propiedad del cliente', sub: 'Fórmulas exclusivas', icon: '🤝' },
]

const services = [
  {
    icon: Beaker,
    title: 'Co-desarrollo de Fórmula',
    desc: 'Diseñamos tu fórmula desde cero usando fitoterapia y nutrición avanzada. El desarrollo es 100% de tu propiedad.',
    color: '#7ec823',
    bg: 'rgba(126,200,35,0.12)',
  },
  {
    icon: Leaf,
    title: 'Maquila Exclusiva BPM',
    desc: 'Producción a escala bajo Buenas Prácticas de Manufactura. Tu marca, nuestra planta certificada.',
    color: '#f5a623',
    bg: 'rgba(245,166,35,0.12)',
  },
  {
    icon: Award,
    title: 'Registro y Cumplimiento',
    desc: 'Acompañamiento en el proceso de registro ICA y normatividad BPMAA para que puedas comercializar legalmente.',
    color: '#c8e88a',
    bg: 'rgba(200,232,138,0.15)',
  },
  {
    icon: Truck,
    title: 'Entrega Producto Terminado',
    desc: 'Recibas tu producto listo para la venta, empacado y etiquetado bajo tu marca. Sin complicaciones.',
    color: '#7ec823',
    bg: 'rgba(126,200,35,0.12)',
  },
]

// Por qué elegirnos — ADN Zoovegetal B2B
const whyUsCards = [
  {
    icon: '🔒',
    title: 'Propiedad Intelectual del Cliente',
    desc: 'Cada fórmula desarrollada es 100% de tu propiedad. Confidencialidad total y exclusividad garantizada.',
    color: '#7ec823',
    bg: '#f0f9e0',
    border: 'rgba(126,200,35,0.25)',
  },
  {
    icon: '🌿',
    title: 'Calidad Grado Humano · 99% Natural',
    desc: 'Materias primas seleccionadas aptas para consumo humano e ingredientes botánicos. Sin subproductos de baja calidad.',
    color: '#f5a623',
    bg: '#fff8ec',
    border: 'rgba(245,166,35,0.25)',
  },
  {
    icon: '🏅',
    title: 'Planta Certificada BPM',
    desc: 'Rigor farmacéutico en cada lote. Procesos estandarizados bajo normatividad BPMAA que garantizan inocuidad.',
    color: '#7ec823',
    bg: '#edf7ec',
    border: 'rgba(126,200,35,0.25)',
  },
  {
    icon: '🤝',
    title: 'No competimos con nuestros clientes',
    desc: 'No vendemos a granel ni al consumidor final. Zoovegetal fabrica para el éxito de tu marca, no para competir con ella.',
    color: '#063b05',
    bg: '#f0f9e0',
    border: 'rgba(6,59,5,0.2)',
  },
]

// FAQs
const faqs = [
  {
    q: '¿La fórmula desarrollada es de mi propiedad?',
    a: 'Sí, absolutamente. Cada fórmula co-desarrollada es 100% propiedad del cliente. Firmamos acuerdo de confidencialidad y exclusividad desde el inicio del proyecto. Zoovegetal no replica ni vende tus desarrollos a terceros.',
  },
  {
    q: '¿Trabajan con emprendedores o solo con grandes empresas?',
    a: 'Atendemos marcas en todas las etapas: emprendedores con una idea clara, marcas medianas en expansión y grandes compañías del sector agroveterinario. Si tienes visión de mercado y un proyecto serio, podemos acompañarte.',
  },
  {
    q: '¿Cuánto demora el co-desarrollo de un producto nuevo?',
    a: 'El diseño de fórmula y pruebas de palatabilidad toman entre 4 y 8 semanas. El registro ICA puede demorar entre 2 y 4 meses adicionales. Te acompañamos en todo el proceso.',
  },
  {
    q: '¿Qué formatos galénicas pueden producir?',
    a: 'Producimos bits y galletas (snacks funcionales), polvos solubles y palatables, cremosos y pastas de alta aceptación, y peletizados con extrusión en frío. Cada formato se adapta a la especie y objetivo del producto.',
  },
  {
    q: '¿Qué tan naturales son los ingredientes?',
    a: 'Nuestras formulaciones son 99% naturales. Usamos materias primas de grado humano (proteínas animales y vegetales, extractos botánicos y fitoterapéuticos). Sin colorantes artificiales, sin conservantes sintéticos, sin subproductos de baja calidad.',
  },
]

export default async function HomePage() {
  const [featuredProducts, latestPosts, heroBg] = await Promise.all([
    getFeaturedProducts(),
    getLatestPosts(),
    getSetting('hero_background'),
  ])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {/* ══════════════════════════════════════════════════════
          HERO — Split 2-column professional layout
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #021f01 0%, #042d03 30%, #063b05 55%, #0a4a08 80%, #0d5c0b 100%)',
        }}
      >
        {/* Diagonal light divider */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, transparent 45%, rgba(141,208,43,0.04) 45%)',
          pointerEvents: 'none',
        }} />

        {/* Imagen de fondo (configurable desde el admin) */}
        {heroBg && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroBg} alt="" className="hero-bg-img" />
            {/* Overlay verde para legibilidad del texto (responsive) */}
            <div className="hero-bg-overlay" />
          </>
        )}

        {/* Orbs */}
        <div style={{
          position: 'absolute', top: '-5%', right: '-3%', zIndex: 2,
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(141,208,43,0.14) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%', zIndex: 2,
          width: '450px', height: '450px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,176,59,0.10) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />

        {/* ── 2-column grid ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          maxWidth: '1280px', width: '100%', margin: '0 auto',
          padding: 'clamp(5.5rem, 8vw, 6.5rem) 2rem clamp(2.5rem, 4vw, 3.5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Headline animado */}
            <HeroHeadline />

            <p className="animate-fade-in-up delay-100" style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: 'clamp(0.92rem, 1.4vw, 1.05rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: '1.75rem',
              maxWidth: '460px',
            }}>
              Co-desarrollo y maquila exclusiva de alimentos y suplementos para mascotas.{' '}
              <strong style={{ color: '#9fd63a', fontWeight: 600 }}>Fórmulas 99% naturales</strong>,
              propiedad del cliente, bajo normas BPM — Medellín, Colombia.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-200" style={{ marginBottom: '1.75rem' }}>
              <Link href="/contacto" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
                background: 'linear-gradient(135deg, #7ec823 0%, #5a9a18 100%)',
                color: '#ffffff', padding: '1rem 2.2rem',
                borderRadius: '100px', textDecoration: 'none',
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 800, fontSize: '1.05rem',
                boxShadow: '0 8px 32px rgba(126,200,35,0.45), 0 2px 8px rgba(0,0,0,0.2)',
                letterSpacing: '-0.01em',
              }}>
                Cotiza tu proyecto de maquila
                <ArrowRight size={18} />
              </Link>
              <div style={{ marginTop: '0.85rem' }}>
                <Link href="/servicios" style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  paddingBottom: '1px',
                  transition: 'color 0.2s',
                }}>
                  Ver cómo trabajamos <ChevronRight size={13} />
                </Link>
              </div>
            </div>

            {/* Stats row — responsive */}
            <div className="animate-fade-in-up delay-300 hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stats-cell">
                  <div style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 900, fontSize: '1.5rem',
                    color: '#9fd63a', letterSpacing: '-0.03em', lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.58rem',
                    color: 'rgba(255,255,255,0.45)', marginTop: '0.3rem', lineHeight: 1.3,
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.52rem',
                    color: 'rgba(255,255,255,0.28)', marginTop: '0.15rem', lineHeight: 1.2,
                  }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: B2B Value Card ── */}
          <div className="animate-fade-in delay-200" style={{ position: 'relative', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>

            {/* Floating badge top */}
            <div style={{
              position: 'absolute', top: '-4px', right: '16px',
              background: 'linear-gradient(135deg, #fbb03b, #f5a623)',
              borderRadius: '14px', padding: '0.55rem 1rem',
              boxShadow: '0 8px 24px rgba(251,176,59,0.45)',
              display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 5,
            }}>
              <span style={{ fontSize: '0.95rem' }}>🌿</span>
              <div>
                <div style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900, fontSize: '0.7rem', color: '#063b05', lineHeight: 1 }}>99% Natural</div>
                <div style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.58rem', color: 'rgba(6,59,5,0.7)', lineHeight: 1.2 }}>Grado humano certificado</div>
              </div>
            </div>

            {/* Main card */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(141,208,43,0.22)',
              borderRadius: '28px', padding: '2rem',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}>
              {/* Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{
                  fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
                  fontSize: '0.72rem', color: '#9fd63a', letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const, marginBottom: '0.4rem',
                }}>Modelo de trabajo</p>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
                  fontSize: '1.3rem', color: '#ffffff', lineHeight: 1.15, margin: 0,
                  letterSpacing: '-0.02em',
                }}>
                  Tú pones la marca.<br />Nosotros ponemos todo lo demás.
                </h3>
              </div>

              {/* Process flow */}
              <div className="process-flow">
                {[
                  { icon: '💡', label: 'Tu idea' },
                  { icon: '→', label: '' },
                  { icon: '🔬', label: 'Fórmula' },
                  { icon: '→', label: '' },
                  { icon: '🏭', label: 'Planta BPM' },
                  { icon: '→', label: '' },
                  { icon: '🏷️', label: 'Tu marca' },
                ].map((s, i) => s.icon === '→' ? (
                  <span key={i} className="pf-arrow">→</span>
                ) : (
                  <div key={i} className="pf-step">
                    <span className="pf-icon">{s.icon}</span>
                    <span className="pf-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* 4 deliverables */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: '🔒', text: 'Fórmula 100% de tu propiedad', color: '#9fd63a' },
                  { icon: '🌿', text: 'Ingredientes 99% naturales · grado humano', color: '#9fd63a' },
                  { icon: '🏆', text: 'Fabricación bajo normas BPM ICA', color: '#9fd63a' },
                  { icon: '📦', text: 'Producto terminado listo para vender', color: '#9fd63a' },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '10px', flexShrink: 0,
                      background: 'rgba(141,208,43,0.1)', border: '1px solid rgba(141,208,43,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem',
                    }}>{item.icon}</div>
                    <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.83rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.4 }}>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust footer */}
              <div style={{
                paddingTop: '1.1rem', borderTop: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
                    Respondemos en menos de 24 horas
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
                    🔒 Propuesta sin costo
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge bottom left */}
            <div style={{
              position: 'absolute', bottom: '-4px', left: '16px',
              background: 'rgba(6,59,5,0.95)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(141,208,43,0.3)',
              borderRadius: '14px', padding: '0.55rem 1rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 5,
            }}>
              <span style={{ fontSize: '0.95rem' }}>🏅</span>
              <div>
                <div style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900, fontSize: '0.7rem', color: '#9fd63a', lineHeight: 1 }}>BPM ICA</div>
                <div style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.58rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.2 }}>Planta certificada · Medellín</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }} className="animate-fade-in delay-500">
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Lexend Deca', sans-serif" }}>
            Scroll
          </span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, rgba(126,200,35,0.6), transparent)',
            animation: 'pulse-glow 2s infinite',
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BARRA DE CERTIFICACIONES — visible desde el inicio
      ══════════════════════════════════════════════════════ */}
      <section style={{
        padding: '1.25rem 1.5rem',
        background: '#f8faf5',
        borderBottom: '1px solid rgba(126,200,35,0.12)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(1.5rem, 4vw, 4rem)', flexWrap: 'wrap',
        }}>
          {[
            { icon: '🏅', label: 'Certificación BPM ICA', sub: 'Vigente' },
            { icon: '📋', label: 'Registro ICA por producto', sub: 'Individual' },
            { icon: '🔬', label: 'Análisis microbiológico', sub: 'Por lote' },
            { icon: '🧪', label: 'Análisis bromatológico', sub: 'Composición nutricional' },
            { icon: '🌿', label: 'Ingredientes grado humano', sub: '100% verificados' },
          ].map((cert) => (
            <div key={cert.label} style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <span style={{ fontSize: '1.2rem' }}>{cert.icon}</span>
              <div>
                <div style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 700, fontSize: '0.78rem',
                  color: '#063b05',
                  lineHeight: 1,
                }}>{cert.label}</div>
                <div style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.65rem', color: '#6b7280',
                  marginTop: '0.1rem',
                }}>{cert.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SEGMENTACIÓN — ¿Tienes perro, gato o caballo? (Lyka)
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '7rem 1.5rem 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Encuentra tu línea</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}>
              Desarrollamos para{' '}
              <span style={{ color: '#7ec823' }}>cada</span>{' '}
              <span style={{ color: '#f5a623' }}>especie</span>
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--gray-500)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Fabricamos para tu marca en todas las especies. Fórmulas personalizadas
              con materias primas 99% naturales, de propiedad exclusiva del cliente.
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
          }}>
            {categoryCards.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="card-category"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                {/* Card header band */}
                <div style={{
                  background: cat.bgGradient,
                  padding: '3rem 2rem 2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Decorative circle */}
                  <div style={{
                    position: 'absolute', top: '-20px', right: '-20px',
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: cat.accentColor,
                    opacity: 0.08,
                  }} />
                  <div style={{ fontSize: '4rem', lineHeight: 1, marginBottom: '1.25rem' }}>
                    {cat.emoji}
                  </div>
                  <h3 style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    color: 'var(--green-dark)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.4rem',
                  }}>
                    {cat.label}
                  </h3>
                  <span style={{
                    display: 'inline-block',
                    background: cat.accentColor,
                    color: 'white',
                    borderRadius: '100px',
                    fontSize: '0.68rem',
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    letterSpacing: '0.04em',
                  }}>
                    {cat.tag}
                  </span>
                </div>

                {/* Card body */}
                <div style={{
                  padding: '1.75rem 2rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  borderTop: `2px solid ${cat.borderColor}`,
                }}>
                  <p style={{
                    fontFamily: "'Lexend Deca', sans-serif",
                    fontSize: '0.92rem',
                    color: 'var(--gray-600)',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: '1.5rem',
                  }}>
                    {cat.desc}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: cat.accentColor === '#063b05' ? cat.accentColor : cat.accentColor,
                  }}>
                    Solicitar esta línea
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUCTOS DESTACADOS
      ══════════════════════════════════════════════════════ */}
      {featuredProducts.length > 0 && (
        <section style={{ padding: '6rem 1.5rem', background: 'var(--off-white)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'flex', alignItems: 'flex-end',
              justifyContent: 'space-between', marginBottom: '2.75rem',
              flexWrap: 'wrap', gap: '1rem',
            }}>
              <div>
                <span className="section-badge">Portafolio</span>
                <h2 style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
                  color: 'var(--green-dark)',
                  letterSpacing: '-0.03em',
                }}>
                  Capacidades de desarrollo
                </h2>
              </div>
              <Link
                href="/productos"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: 'var(--green-bright)',
                  textDecoration: 'none',
                }}
              >
                Ver todos <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}>
              {featuredProducts.map((product) => {
                const catColor = product.category === 'canino' ? '#7ec823' : product.category === 'felino' ? '#f5a623' : '#063b05'
                const catBg   = product.category === 'canino' ? '#f0f9e0' : product.category === 'felino' ? '#fff8ec' : '#edf7ec'
                const catEmoji = product.category === 'canino' ? '🐕' : product.category === 'felino' ? '🐈' : '🐴'
                return (
                  <div key={product.id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    {/* Product image area */}
                    <div style={{
                      height: '160px',
                      background: catBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '3.5rem',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {product.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <>
                          <div style={{
                            position: 'absolute', bottom: '-15px', right: '-15px',
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: catColor, opacity: 0.1,
                          }} />
                          {catEmoji}
                        </>
                      )}
                    </div>

                    <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <span style={{
                        display: 'inline-block',
                        background: catBg,
                        color: catColor,
                        border: `1px solid ${catColor}30`,
                        borderRadius: '100px',
                        fontSize: '0.68rem',
                        fontFamily: "'Red Hat Display', sans-serif",
                        fontWeight: 700,
                        padding: '0.2rem 0.65rem',
                        letterSpacing: '0.05em',
                        marginBottom: '0.65rem',
                        textTransform: 'uppercase' as const,
                      }}>
                        {product.subcategory}
                      </span>
                      <h3 style={{
                        fontFamily: "'Red Hat Display', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        color: 'var(--green-dark)',
                        letterSpacing: '-0.02em',
                        marginBottom: '0.5rem',
                        lineHeight: 1.25,
                      }}>
                        {product.name}
                      </h3>
                      <p style={{
                        fontFamily: "'Lexend Deca', sans-serif",
                        fontSize: '0.85rem',
                        color: 'var(--gray-500)',
                        lineHeight: 1.6,
                        flex: 1,
                        marginBottom: '1.1rem',
                      }}>
                        {product.description.slice(0, 100)}…
                      </p>
                      <Link
                        href={`/productos/${product.slug}`}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.3rem',
                          fontFamily: "'Red Hat Display', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          color: 'var(--green-bright)',
                          textDecoration: 'none',
                        }}
                      >
                        Ver esta línea <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          SERVICIOS — tarjetas en fondo verde oscuro
      ══════════════════════════════════════════════════════ */}
      <section style={{
        padding: '7rem 1.5rem',
        background: 'linear-gradient(160deg, #021f01 0%, #063b05 50%, #0d5c0b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background orb */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
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
              Nuestros Servicios
            </span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}>
              Hacemos realidad{' '}
              <span style={{ color: '#9fd63a' }}>tu marca de alimentos</span>
            </h2>
            <p style={{
              marginTop: '1.25rem',
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '500px',
              margin: '1.25rem auto 0',
              lineHeight: 1.7,
            }}>
              Desde la fórmula hasta el producto terminado, somos tu aliado estratégico en nutrición animal.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}>
            {services.map((svc) => (
              <div key={svc.title} className="card-glass" style={{ padding: '2.25rem 1.75rem' }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '16px',
                  background: svc.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}>
                  <svc.icon size={24} style={{ color: svc.color }} />
                </div>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}>
                  {svc.title}
                </h3>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.58)',
                  lineHeight: 1.7,
                }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/servicios" className="btn-primary" style={{ fontSize: '0.95rem' }}>
              Conocer todos los servicios
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIDEO SHOWCASE
      ══════════════════════════════════════════════════════ */}
      <section style={{
        padding: '7rem 1.5rem',
        background: 'linear-gradient(160deg, #021f01 0%, #063b05 60%, #0a4a08 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Paw prints background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cellipse cx='20' cy='20' rx='8' ry='10' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='12' cy='10' r='4' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='28' cy='10' r='4' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='9' cy='17' r='3.5' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='31' cy='17' r='3.5' fill='%23ffffff' opacity='0.03'/%3E%3Cellipse cx='70' cy='60' rx='8' ry='10' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='62' cy='50' r='4' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='78' cy='50' r='4' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='59' cy='57' r='3.5' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='81' cy='57' r='3.5' fill='%23ffffff' opacity='0.03'/%3E%3C/svg%3E")`,
        }} />
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(141,208,43,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1.1rem',
              borderRadius: '100px',
              border: '1px solid rgba(141,208,43,0.35)',
              background: 'rgba(141,208,43,0.1)',
              color: '#9fd63a',
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              marginBottom: '1.25rem',
            }}>
              🎬 Así lo hacemos
            </span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}>
              Conoce el proceso{' '}
              <span style={{ color: '#9fd63a' }}>detrás de la calidad</span>
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}>
              Conoce la planta donde fabricamos los productos de nuestros clientes.
              Instalaciones certificadas BPM ICA, procesos documentados y trazables.
            </p>
          </div>

          {/* Video embed container */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(141,208,43,0.15)',
            background: '#000',
            aspectRatio: '16/9',
            maxWidth: '880px',
            margin: '0 auto',
          }}>
            {/* Decorative corner accents */}
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '60px', height: '60px',
              borderTop: '3px solid #8cd02b',
              borderLeft: '3px solid #8cd02b',
              borderRadius: '24px 0 0 0',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '60px', height: '60px',
              borderBottom: '3px solid #8cd02b',
              borderRight: '3px solid #8cd02b',
              borderRadius: '0 0 24px 0',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <iframe
              src="https://www.youtube.com/embed/ilPV_5UEtX8?rel=0&modestbranding=1&color=white"
              title="Zoovegetal — Conoce nuestro proceso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                border: 'none',
              }}
            />
          </div>

          {/* Below-video trust row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2.5rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '🏭', label: 'Planta propia en Medellín' },
              { icon: '✅', label: 'Certificación BPM ICA' },
              { icon: '🌿', label: 'Ingredientes grado humano' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.65)',
              }}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GALERÍA — 4 fotos limpias (reemplaza masonry de 13)
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '7rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-badge">⚙️ Nuestros Procesos</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '0.85rem',
            }}>
              Fabricación con{' '}
              <span style={{ color: 'var(--green-bright)' }}>estándares de calidad</span>
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'var(--gray-500)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Planta certificada BPM, equipos de grado industrial y procesos controlados
              para cada proyecto de maquila en Medellín.
            </p>
          </div>

          {/* ── 1 grande + 3 lado — responsive ── */}
          <div className="process-gallery">

            {/* Imagen principal izquierda */}
            <div className="process-gallery-main">
              <img src="/DSC_8835.jpg" alt="Planta de producción Zoovegetal — vista general" />
              <div className="gallery-overlay">
                <span style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>
                  Zona de producción principal
                </span>
              </div>
            </div>

            {/* 3 imágenes lado derecho */}
            <div className="process-gallery-side">
              {[
                { src: '/DSC_8840.jpg', label: 'Equipos de producción' },
                { src: '/DSC_8851.jpg', label: 'Zona de almacenamiento' },
                { src: '/DSC_8860.jpg', label: 'Control de calidad' },
              ].map((photo) => (
                <div key={photo.src} className="process-gallery-item">
                  <img src={photo.src} alt={photo.label} />
                  <div className="gallery-overlay-sm">
                    <span style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 600, fontSize: '0.72rem', color: 'rgba(255,255,255,0.92)' }}>
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div style={{
            marginTop: '2.5rem',
            background: 'linear-gradient(135deg, var(--green-pale) 0%, #edffd0 100%)',
            border: '1.5px solid rgba(141,208,43,0.25)',
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}>
            <div>
              <div style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 900, fontSize: '1.15rem',
                color: 'var(--green-dark)', letterSpacing: '-0.02em',
              }}>¿Quieres conocer nuestra planta en persona?</div>
              <div style={{
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: '0.88rem', color: 'var(--gray-600)', marginTop: '0.3rem',
              }}>Agenda una visita y te mostramos todo el proceso de fabricación.</div>
            </div>
            <Link href="/contacto" className="btn-primary" style={{ whiteSpace: 'nowrap' as const }}>
              Agendar visita
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          POR QUÉ ZOOVEGETAL — 4 cards visuales (estilo BeFrank)
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '7rem 1.5rem', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">¿Por qué elegirnos?</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}>
              Calidad que{' '}
              <span style={{ color: 'var(--green-bright)' }}>se puede medir</span>
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--gray-500)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Cuatro pilares que garantizan el éxito de cada proyecto de maquila.
              Lo que nos hace el aliado estratégico ideal para tu marca.
            </p>
          </div>

          {/* 4 cards visuales */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            {whyUsCards.map((card) => (
              <div
                key={card.title}
                className="card"
                style={{
                  padding: '2.25rem 1.75rem',
                  background: card.bg,
                  border: `1.5px solid ${card.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '18px',
                  background: '#ffffff',
                  border: `1.5px solid ${card.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.75rem',
                  marginBottom: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: 'var(--green-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.88rem',
                  color: 'var(--gray-600)',
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/quienes-somos" className="btn-primary">
              Conocer más sobre nosotros
              <ArrowRight size={17} />
            </Link>
            <Link href="/contacto" className="btn-amber">
              Hablar con un experto
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════════════════ */}
      {latestPosts.length > 0 && (
        <section style={{ padding: '7rem 1.5rem', background: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'flex', alignItems: 'flex-end',
              justifyContent: 'space-between', marginBottom: '3rem',
              flexWrap: 'wrap', gap: '1rem',
            }}>
              <div>
                <span className="section-badge">Blog</span>
                <h2 style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
                  color: 'var(--green-dark)',
                  letterSpacing: '-0.03em',
                }}>
                  Conocimiento para marcas del sector animal
                </h2>
              </div>
              <Link
                href="/blog"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: 'var(--green-bright)',
                  textDecoration: 'none',
                }}
              >
                Ver todos <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}>
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card"
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                >
                  <div style={{
                    height: '150px',
                    background: 'linear-gradient(135deg, #f0f9e0 0%, #e4f5c8 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', top: '-10px', right: '-10px',
                      width: '70px', height: '70px', borderRadius: '50%',
                      background: 'rgba(126,200,35,0.12)',
                    }} />
                    📝
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: 'var(--green-dark)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.3,
                      marginBottom: '0.6rem',
                      flex: 1,
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Lexend Deca', sans-serif",
                      fontSize: '0.85rem',
                      color: 'var(--gray-500)',
                      lineHeight: 1.6,
                      marginBottom: '1.1rem',
                    }}>
                      {post.excerpt.slice(0, 100)}…
                    </p>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      fontFamily: "'Red Hat Display', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--green-bright)',
                    }}>
                      Leer más <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          FAQ — preguntas frecuentes
      ══════════════════════════════════════════════════════ */}
      <section style={{
        padding: '7rem 1.5rem',
        background: 'var(--off-white)',
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">FAQ</span>
            <h2 style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--green-dark)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}>
              Preguntas frecuentes
            </h2>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '1rem',
              color: 'var(--gray-500)',
              lineHeight: 1.7,
            }}>
              Todo lo que necesitas saber antes de empezar tu proyecto con nosotros.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid rgba(126,200,35,0.18)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                }}
              >
                <summary style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem 1.75rem',
                  cursor: 'pointer',
                  listStyle: 'none',
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: 'var(--green-dark)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.3,
                  userSelect: 'none' as const,
                  gap: '1rem',
                }}>
                  <span>{faq.q}</span>
                  <span style={{
                    flexShrink: 0,
                    width: '28px', height: '28px',
                    borderRadius: '50%',
                    background: 'var(--green-pale)',
                    border: '1.5px solid rgba(126,200,35,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--green-bright)',
                  }}>
                    <ChevronDown size={15} />
                  </span>
                </summary>
                <div style={{
                  padding: '0 1.75rem 1.5rem',
                  fontFamily: "'Lexend Deca', sans-serif",
                  fontSize: '0.92rem',
                  color: 'var(--gray-600)',
                  lineHeight: 1.75,
                  borderTop: '1px solid rgba(126,200,35,0.1)',
                  paddingTop: '1.25rem',
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: '0.92rem',
              color: 'var(--gray-500)',
              marginBottom: '1.25rem',
            }}>
              ¿Tienes otra pregunta? Escríbenos directamente.
            </p>
            <Link href="/contacto" className="btn-primary" style={{ fontSize: '0.92rem' }}>
              Contactar ahora
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA FINAL — degradado verde limón
      ══════════════════════════════════════════════════════ */}
      <section style={{
        padding: '7rem 1.5rem',
        background: 'linear-gradient(135deg, #7ec823 0%, #9fd63a 40%, #c8e88a 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '-60px', left: '-60px',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-40px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
        }} />

        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1 }}>🐾</div>
          <h2 style={{
            fontFamily: "'Red Hat Display', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            color: 'var(--green-dark)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            ¿Listo para lanzar tu línea de productos bajo tu propia marca?
          </h2>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(6,59,5,0.72)',
            lineHeight: 1.75,
            marginBottom: '2.75rem',
          }}>
            Emprendedores, marcas consolidadas y grandes compañías. Cuéntanos tu proyecto y en 24 horas te enviamos una propuesta técnica sin costo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto" className="btn-dark" style={{ fontSize: '0.95rem', padding: '0.9rem 2rem' }}>
              Cotizar mi proyecto
              <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/573206755306?text=Hola,%20quiero%20desarrollar%20un%20producto%20con%20Zoovegetal."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '100px',
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                background: '#25D366',
                color: 'white',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
