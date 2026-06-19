'use client'

import { useRef, useState } from 'react'
import { UploadCloud, X, Loader2, ArrowLeft, ArrowRight } from 'lucide-react'

interface MultiImageUploadProps {
  value: string[]
  onChange: (urls: string[]) => void
  max?: number
}

export default function MultiImageUpload({ value, onChange, max = 6 }: MultiImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFiles = async (files: FileList) => {
    setError('')
    const room = max - value.length
    if (room <= 0) {
      setError(`Máximo ${max} imágenes`)
      return
    }
    const list = Array.from(files).slice(0, room)
    setUploading(true)
    try {
      const uploaded: string[] = []
      for (const file of list) {
        if (!file.type.startsWith('image/')) continue
        const fd = new FormData()
        fd.append('file', file)
        const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
        const data = await res.json()
        if (!res.ok) {
          setError(data.error || 'Error al subir una imagen')
          continue
        }
        uploaded.push(data.url)
      }
      if (uploaded.length) onChange([...value, ...uploaded])
    } catch {
      setError('Error de conexión al subir')
    } finally {
      setUploading(false)
    }
  }

  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i))

  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir
    if (j < 0 || j >= value.length) return
    const next = [...value]
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        multiple
        onChange={(e) => { if (e.target.files?.length) handleFiles(e.target.files); e.target.value = '' }}
        style={{ display: 'none' }}
      />

      {/* Grid de imágenes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
        {value.map((src, i) => (
          <div key={src + i} style={{
            position: 'relative', aspectRatio: '4 / 3', borderRadius: '12px',
            overflow: 'hidden', border: '1px solid var(--gray-200)', background: '#f1f5f9',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Presentación ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* Orden */}
            <div style={{
              position: 'absolute', top: '0.4rem', left: '0.4rem',
              background: 'rgba(0,0,0,0.6)', color: '#fff', borderRadius: '6px',
              fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: '0.65rem',
              padding: '0.1rem 0.4rem',
            }}>
              {i + 1}
            </div>

            {/* Quitar */}
            <button
              type="button" onClick={() => remove(i)} title="Quitar"
              style={{
                position: 'absolute', top: '0.4rem', right: '0.4rem',
                width: '26px', height: '26px', borderRadius: '7px', border: 'none', cursor: 'pointer',
                background: 'rgba(255,255,255,0.95)', color: '#ef4444',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <X size={13} />
            </button>

            {/* Reordenar */}
            <div style={{
              position: 'absolute', bottom: '0.4rem', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: '0.3rem',
            }}>
              <button
                type="button" onClick={() => move(i, -1)} disabled={i === 0} title="Mover izquierda"
                style={{
                  width: '24px', height: '24px', borderRadius: '6px', border: 'none',
                  cursor: i === 0 ? 'default' : 'pointer', opacity: i === 0 ? 0.4 : 1,
                  background: 'rgba(255,255,255,0.95)', color: 'var(--gray-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <ArrowLeft size={12} />
              </button>
              <button
                type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} title="Mover derecha"
                style={{
                  width: '24px', height: '24px', borderRadius: '6px', border: 'none',
                  cursor: i === value.length - 1 ? 'default' : 'pointer', opacity: i === value.length - 1 ? 0.4 : 1,
                  background: 'rgba(255,255,255,0.95)', color: 'var(--gray-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}

        {/* Botón añadir */}
        {value.length < max && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            style={{
              aspectRatio: '4 / 3', borderRadius: '12px', cursor: 'pointer',
              border: '2px dashed var(--gray-200)', background: '#fafafa',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '0.4rem', color: 'var(--gray-500)',
            }}
          >
            {uploading ? (
              <Loader2 size={22} className="iu-spin" style={{ color: 'var(--green-bright)' }} />
            ) : (
              <UploadCloud size={22} style={{ color: 'var(--green-bright)' }} />
            )}
            <span style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: '0.78rem' }}>
              {uploading ? 'Subiendo...' : 'Añadir'}
            </span>
          </button>
        )}
      </div>

      <p style={{
        marginTop: '0.6rem', fontFamily: "'Lexend Deca', sans-serif",
        fontSize: '0.72rem', color: 'var(--gray-400)',
      }}>
        {value.length}/{max} imágenes · puedes reordenarlas con las flechas
      </p>

      {error && (
        <p style={{ marginTop: '0.4rem', fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.78rem', color: '#dc2626' }}>
          {error}
        </p>
      )}

      <style>{`
        .iu-spin { animation: iu-spin 0.8s linear infinite; }
        @keyframes iu-spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
