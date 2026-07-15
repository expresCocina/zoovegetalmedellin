'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface StringListInputProps {
  value: string[]
  onChange: (list: string[]) => void
  placeholder?: string
  max?: number
}

export default function StringListInput({ value, onChange, placeholder = 'Escribe y presiona Añadir', max = 40 }: StringListInputProps) {
  const [draft, setDraft] = useState('')

  const add = () => {
    const v = draft.trim()
    if (!v) return
    if (value.length >= max) return
    if (value.some((x) => x.toLowerCase() === v.toLowerCase())) { setDraft(''); return }
    onChange([...value, v])
    setDraft('')
  }

  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i))

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); add() } }}
          className="input-field"
          placeholder={placeholder}
          style={{ flex: 1 }}
        />
        <button
          type="button"
          onClick={add}
          className="btn-primary"
          style={{ flexShrink: 0, fontSize: '0.82rem', padding: '0.6rem 1rem' }}
        >
          <Plus size={15} /> Añadir
        </button>
      </div>

      {value.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.85rem' }}>
          {value.map((item, i) => (
            <span
              key={item + i}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                background: '#f0f9e0', border: '1px solid rgba(126,200,35,0.25)',
                borderRadius: '100px', padding: '0.35rem 0.4rem 0.35rem 0.85rem',
                fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700,
                fontSize: '0.82rem', color: 'var(--green-dark)',
              }}
            >
              {item}
              <button
                type="button"
                onClick={() => remove(i)}
                title="Quitar"
                style={{
                  width: '20px', height: '20px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                  background: 'rgba(6,59,5,0.1)', color: 'var(--green-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}

      <p style={{
        marginTop: '0.6rem', fontFamily: "'Lexend Deca', sans-serif",
        fontSize: '0.72rem', color: 'var(--gray-400)',
      }}>
        {value.length}/{max}
      </p>
    </div>
  )
}
