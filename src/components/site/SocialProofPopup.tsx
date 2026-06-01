'use client'

import { useEffect, useState } from 'react'

const notifications = [
  { name: 'Laura M.', city: 'Medellín', product: 'Galletas Naturales para Perros', emoji: '🐾', time: 'hace 2 min' },
  { name: 'Carlos R.', city: 'Bogotá', product: 'Snacks de Pollo Deshidratado', emoji: '🐶', time: 'hace 5 min' },
  { name: 'Sofía V.', city: 'Cali', product: 'Concentrado Premium Canino', emoji: '🐕', time: 'hace 8 min' },
  { name: 'Andrés P.', city: 'Barranquilla', product: 'Snacks Naturales para Gatos', emoji: '🐱', time: 'hace 3 min' },
  { name: 'Valentina G.', city: 'Pereira', product: 'Concentrado Premium Felino', emoji: '🐈', time: 'hace 6 min' },
  { name: 'Jorge H.', city: 'Bucaramanga', product: 'Snacks de Avena y Miel para Caballos', emoji: '🐴', time: 'hace 4 min' },
  { name: 'Natalia C.', city: 'Manizales', product: 'Suplemento Articular Canino', emoji: '💊', time: 'hace 7 min' },
  { name: 'Felipe O.', city: 'Santa Marta', product: 'Concentrado Equino Premium', emoji: '🌾', time: 'hace 9 min' },
  { name: 'Daniela T.', city: 'Cartagena', product: 'Comida Cocida Congelada Canina', emoji: '🥩', time: 'hace 1 min' },
  { name: 'Sebastián L.', city: 'Ibagué', product: 'Multivitamínico en Polvo Canino', emoji: '✨', time: 'hace 11 min' },
]

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const shuffledIndexes = notifications
      .map((_, i) => i)
      .sort(() => Math.random() - 0.5)
    let pos = 0
    let interval: ReturnType<typeof setInterval>

    const show = () => {
      setCurrentIndex(shuffledIndexes[pos % shuffledIndexes.length])
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
  }, [])

  const notif = notifications[currentIndex]

  if (!visible) return null

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
          maxWidth: '300px',
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
          {notif.emoji}
        </div>

        {/* Texto */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              color: '#6b7280',
              fontFamily: "'Lexend Deca', sans-serif",
              lineHeight: 1.3,
            }}
          >
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>{notif.name}</strong>
            {' de '}
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>{notif.city}</strong>
            {' adquirió'}
          </p>
          <p
            style={{
              margin: '2px 0 0',
              fontSize: '13px',
              fontWeight: 700,
              color: '#2d6a00',
              fontFamily: "'Lexend Deca', sans-serif",
              lineHeight: 1.3,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {notif.product}
          </p>
          <p
            style={{
              margin: '3px 0 0',
              fontSize: '11px',
              color: '#9ca3af',
              fontFamily: "'Lexend Deca', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 }} />
            {notif.time} · Verificado
          </p>
        </div>
      </div>
    </div>
  )
}
