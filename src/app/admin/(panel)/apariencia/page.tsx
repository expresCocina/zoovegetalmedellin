'use client'

import { useState, useEffect, useCallback } from 'react'
import { Palette, Save, Check, Info, Images, Tag } from 'lucide-react'
import ImageUpload from '@/components/admin/ImageUpload'
import MultiImageUpload from '@/components/admin/MultiImageUpload'
import StringListInput from '@/components/admin/StringListInput'

export default function AdminAparienciaPage() {
  const [heroBg, setHeroBg] = useState<string | null>(null)
  const [presentations, setPresentations] = useState<string[]>([])
  const [messages, setMessages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/settings')
      const data = await res.json()
      setHeroBg(data.hero_background || null)
      try {
        const parsed = data.hero_presentations ? JSON.parse(data.hero_presentations) : []
        setPresentations(Array.isArray(parsed) ? parsed : [])
      } catch {
        setPresentations([])
      }
      try {
        const parsedM = data.social_messages ? JSON.parse(data.social_messages) : []
        setMessages(Array.isArray(parsedM) ? parsedM : [])
      } catch {
        setMessages([])
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load() }, [load])

  const save = async () => {
    setSaving(true)
    setError('')
    setSaved(false)
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hero_background: heroBg ?? '',
          hero_presentations: JSON.stringify(presentations),
          social_messages: JSON.stringify(messages),
        }),
      })
      if (!res.ok) {
        const d = await res.json()
        setError(d.error || 'Error al guardar')
        return
      }
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch {
      setError('Error de conexión')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{
          width: '42px', height: '42px', borderRadius: '12px', background: '#fdf2f8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Palette size={20} style={{ color: '#ec4899' }} />
        </div>
        <div>
          <h1 style={{
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 900,
            fontSize: '1.5rem', color: 'var(--green-dark)', letterSpacing: '-0.03em',
          }}>
            Apariencia
          </h1>
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.8rem',
            color: 'var(--gray-400)', marginTop: '0.1rem',
          }}>
            Personaliza las imágenes del sitio
          </p>
        </div>
      </div>

      {/* Card */}
      <div style={{
        background: '#ffffff', borderRadius: '20px', padding: '1.75rem',
        border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)', maxWidth: '640px',
      }}>
        <h2 style={{
          fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
          fontSize: '1.05rem', color: 'var(--gray-900)', marginBottom: '0.35rem',
        }}>
          Fondo del Hero (portada)
        </h2>
        <p style={{
          fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.82rem',
          color: 'var(--gray-500)', lineHeight: 1.55, marginBottom: '1.25rem',
        }}>
          Esta imagen se muestra de fondo en la sección principal de la página de inicio,
          con un degradado verde encima para que el texto se lea bien. Si no subes ninguna,
          se usa el fondo verde por defecto.
        </p>

        {loading ? (
          <div style={{
            aspectRatio: '16 / 9', borderRadius: '14px', background: '#f1f5f9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '32px', height: '32px', border: '3px solid var(--gray-200)',
              borderTopColor: 'var(--green-bright)', borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        ) : (
          <ImageUpload value={heroBg} onChange={setHeroBg} aspect="16 / 9" />
        )}

        {/* Recomendación */}
        <div style={{
          display: 'flex', gap: '0.6rem', marginTop: '1rem', padding: '0.75rem 1rem',
          background: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe',
        }}>
          <Info size={15} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '0.1rem' }} />
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.76rem',
            color: '#1e40af', lineHeight: 1.5, margin: 0,
          }}>
            Recomendado: imagen horizontal (apaisada) de al menos 1920×1080 px.
            Las fotos con espacios despejados se ven mejor porque el texto va encima.
          </p>
        </div>

      </div>

      {/* Card: Presentaciones del hero (carrusel) */}
      <div style={{
        background: '#ffffff', borderRadius: '20px', padding: '1.75rem', marginTop: '1.25rem',
        border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)', maxWidth: '640px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <Images size={17} style={{ color: '#ec4899' }} />
          <h2 style={{
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
            fontSize: '1.05rem', color: 'var(--gray-900)',
          }}>
            Carrusel de presentaciones
          </h2>
        </div>
        <p style={{
          fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.82rem',
          color: 'var(--gray-500)', lineHeight: 1.55, marginBottom: '1.25rem',
        }}>
          Estas imágenes aparecen en el recuadro deslizable del hero (lado derecho), rotando
          automáticamente. Sube hasta 6 fotos de presentaciones de producto. Mientras no subas
          ninguna, se muestran unas imágenes por defecto.
        </p>

        {loading ? (
          <div style={{
            aspectRatio: '16 / 5', borderRadius: '14px', background: '#f1f5f9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '32px', height: '32px', border: '3px solid var(--gray-200)',
              borderTopColor: 'var(--green-bright)', borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        ) : (
          <MultiImageUpload value={presentations} onChange={setPresentations} max={6} />
        )}

        <div style={{
          display: 'flex', gap: '0.6rem', marginTop: '1rem', padding: '0.75rem 1rem',
          background: '#eff6ff', borderRadius: '12px', border: '1px solid #dbeafe',
        }}>
          <Info size={15} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '0.1rem' }} />
          <p style={{
            fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.76rem',
            color: '#1e40af', lineHeight: 1.5, margin: 0,
          }}>
            Recomendado: fotos en formato horizontal con el producto centrado y fondo limpio.
            El recuadro las recorta a proporción 4:3.
          </p>
        </div>
      </div>

      {/* Card: Marcas (habladores) */}
      <div style={{
        background: '#ffffff', borderRadius: '20px', padding: '1.75rem', marginTop: '1.25rem',
        border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)', maxWidth: '640px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <Tag size={17} style={{ color: '#ec4899' }} />
          <h2 style={{
            fontFamily: "'Red Hat Display', sans-serif", fontWeight: 800,
            fontSize: '1.05rem', color: 'var(--gray-900)',
          }}>
            Mensajes del aviso (habladores)
          </h2>
        </div>
        <p style={{
          fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.82rem',
          color: 'var(--gray-500)', lineHeight: 1.55, marginBottom: '1.25rem',
        }}>
          Frases que aparecen en el aviso animado (abajo a la izquierda del sitio), rotando una por
          una. Ideal para reafirmar la alimentación y suplementación natural de alta palatabilidad.
          Si no agregas ninguna, se muestran unos mensajes por defecto.
        </p>

        {loading ? (
          <div style={{
            height: '54px', borderRadius: '12px', background: '#f1f5f9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '28px', height: '28px', border: '3px solid var(--gray-200)',
              borderTopColor: 'var(--green-bright)', borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        ) : (
          <StringListInput value={messages} onChange={setMessages} placeholder="Ej: Alimentación natural de alta palatabilidad" max={40} />
        )}
      </div>

      {error && (
        <div style={{
          marginTop: '1rem', maxWidth: '640px', padding: '0.85rem 1rem', borderRadius: '12px',
          background: '#fef2f2', border: '1px solid #fecaca',
          fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.85rem', color: '#dc2626',
        }}>
          {error}
        </div>
      )}

      <button
        onClick={save}
        disabled={saving}
        className="btn-primary"
        style={{ marginTop: '1.5rem', justifyContent: 'center', opacity: saving ? 0.75 : 1 }}
      >
        {saving ? (
          <div style={{
            width: '16px', height: '16px', border: '2px solid currentColor',
            borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite',
          }} />
        ) : saved ? (
          <><Check size={15} /> Guardado</>
        ) : (
          <><Save size={15} /> Guardar cambios</>
        )}
      </button>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
