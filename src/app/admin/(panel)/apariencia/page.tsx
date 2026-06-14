'use client'

import { useState, useEffect, useCallback } from 'react'
import { Palette, Save, Check, Info } from 'lucide-react'
import ImageUpload from '@/components/admin/ImageUpload'

export default function AdminAparienciaPage() {
  const [heroBg, setHeroBg] = useState<string | null>(null)
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
        body: JSON.stringify({ hero_background: heroBg ?? '' }),
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

        {error && (
          <div style={{
            marginTop: '1rem', padding: '0.85rem 1rem', borderRadius: '12px',
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
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
