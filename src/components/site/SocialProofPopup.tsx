'use client'

import { useEffect, useState } from 'react'

// Mensajes por defecto (si el admin no configura ninguno).
// Reafirman la alimentación y suplementación natural de alta palatabilidad.
const DEFAULT_MESSAGES = [
  'Alimentación natural de alta palatabilidad',
  'Suplementación natural para tu mascota',
  'Proteína animal real · sin harinas de sangre',
  'Fórmulas 99% naturales, grado humano',
  'Desarrollos con garantía de palatabilidad',
]

export default function SocialProofPopup({ messages }: { messages: string[] }) {
  const list = messages.length > 0 ? messages : DEFAULT_MESSAGES
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (list.length === 0) return
    const order = list.map((_, i) => i).sort(() => Math.random() - 0.5)
    let pos = 0
    let interval: ReturnType<typeof setInterval>

    const show = () => {
      setCurrentIndex(order[pos % order.length])
      setExiting(false)
      setVisible(true)
      setTimeout(() => {
        setExiting(true)
        setTimeout(() => {
          setVisible(false)
          pos++
        }, 400)
      }, 4500)
    }

    const initialDelay = setTimeout(() => {
      show()
      interval = setInterval(show, 12000)
    }, 3000)

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  if (list.length === 0 || !visible) return null

  const message = list[currentIndex]

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '90px',
        left: '20px',
        zIndex: 9998,
        animation: exiting ? 'slideOutLeft 0.4s ease forwards' : 'slideInLeft 0.4s ease forwards',
      }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-110%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-110%); opacity: 0; }
        }
      `}</style>
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '320px',
          border: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        {/* Icono */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #e8f5d0, #c8e86a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            flexShrink: 0,
          }}
        >
          🌿
        </div>

        {/* Texto */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              fontWeight: 700,
              color: '#1a1a1a',
              fontFamily: "'Red Hat Display', sans-serif",
              lineHeight: 1.35,
            }}
          >
            {message}
          </p>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: '11px',
              color: '#2d6a00',
              fontFamily: "'Lexend Deca', sans-serif",
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 }} />
            Zoovegetal · Nutrición Animal
          </p>
        </div>
      </div>
    </div>
  )
}
