'use client'

import { useRef, useState } from 'react'
import { UploadCloud, X, ImageIcon, Loader2 } from 'lucide-react'

interface ImageUploadProps {
  value: string | null
  onChange: (url: string | null) => void
  /** Relación de aspecto del recuadro de previsualización (ancho/alto). Por defecto 16/9 */
  aspect?: string
  label?: string
}

export default function ImageUpload({ value, onChange, aspect = '16 / 9', label }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)

  const handleFile = async (file: File) => {
    setError('')
    if (!file.type.startsWith('image/')) {
      setError('El archivo debe ser una imagen')
      return
    }
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Error al subir la imagen')
        return
      }
      onChange(data.url)
    } catch {
      setError('Error de conexión al subir')
    } finally {
      setUploading(false)
    }
  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
    e.target.value = ''
  }

  return (
    <div>
      {label && (
        <label style={{
          display: 'block', fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 700, fontSize: '0.78rem', color: 'var(--gray-700)',
          marginBottom: '0.45rem', letterSpacing: '0.02em',
        }}>
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        onChange={onInput}
        style={{ display: 'none' }}
      />

      {value ? (
        <div style={{
          position: 'relative',
          aspectRatio: aspect,
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid var(--gray-200)',
          background: '#f1f5f9',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Vista previa" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

          {/* Acciones sobre la imagen */}
          <div style={{ position: 'absolute', top: '0.6rem', right: '0.6rem', display: 'flex', gap: '0.4rem' }}>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              style={{
                padding: '0.4rem 0.7rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: '0.72rem',
                color: 'var(--gray-700)', display: 'flex', alignItems: 'center', gap: '0.3rem',
              }}
            >
              {uploading ? <Loader2 size={12} className="iu-spin" /> : <UploadCloud size={12} />}
              Cambiar
            </button>
            <button
              type="button"
              onClick={() => onChange(null)}
              disabled={uploading}
              style={{
                width: '30px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444',
              }}
              title="Quitar imagen"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault(); setDragOver(false)
            const f = e.dataTransfer.files?.[0]
            if (f) handleFile(f)
          }}
          disabled={uploading}
          style={{
            width: '100%', aspectRatio: aspect,
            borderRadius: '14px', cursor: 'pointer',
            border: `2px dashed ${dragOver ? 'var(--green-bright)' : 'var(--gray-200)'}`,
            background: dragOver ? '#f0f9e0' : '#fafafa',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem', transition: 'all 0.15s ease', padding: '1rem',
          }}
        >
          {uploading ? (
            <>
              <Loader2 size={26} className="iu-spin" style={{ color: 'var(--green-bright)' }} />
              <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.82rem', color: 'var(--gray-500)' }}>
                Subiendo...
              </span>
            </>
          ) : (
            <>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px', background: '#f0f9e0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ImageIcon size={20} style={{ color: 'var(--green-bright)' }} />
              </div>
              <span style={{
                fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700,
                fontSize: '0.85rem', color: 'var(--gray-700)',
              }}>
                Subir imagen
              </span>
              <span style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: '0.72rem', color: 'var(--gray-400)' }}>
                Arrastra o haz clic · JPG, PNG, WEBP · máx 8 MB
              </span>
            </>
          )}
        </button>
      )}

      {error && (
        <p style={{
          marginTop: '0.5rem', fontFamily: "'Lexend Deca', sans-serif",
          fontSize: '0.78rem', color: '#dc2626',
        }}>
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
