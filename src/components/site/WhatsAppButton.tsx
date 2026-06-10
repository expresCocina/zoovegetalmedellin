'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @keyframes wa-enter {
          from { transform: scale(0) rotate(-20deg); opacity: 0; }
          to   { transform: scale(1) rotate(0deg);  opacity: 1; }
        }
        @keyframes wa-pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
        @keyframes wa-ring {
          0%   { transform: scale(1);    opacity: 0.6; }
          100% { transform: scale(2.2);  opacity: 0; }
        }
        @keyframes wa-bubble {
          from { opacity: 0; transform: translateX(12px) scale(0.92); }
          to   { opacity: 1; transform: translateX(0)    scale(1); }
        }
        .wa-btn {
          animation: wa-enter 0.5s cubic-bezier(0.34,1.56,0.64,1) both,
                     wa-pulse 2.8s ease-in-out 1.5s infinite;
        }
        .wa-btn:hover {
          animation: none;
          transform: scale(1.12) !important;
        }
        .wa-ring {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-ring 2s ease-out 2s infinite;
        }
        .wa-ring-2 {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-ring 2s ease-out 2.7s infinite;
        }
        .wa-bubble {
          animation: wa-bubble 0.25s cubic-bezier(0.34,1.56,0.64,1) both;
        }
      `}</style>

      {visible && (
        <a
          href="https://wa.me/573206755306?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20maquila%20de%20Zoovegetal."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatear por WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '24px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          {/* Burbuja de texto */}
          {hovered && (
            <div className="wa-bubble" style={{
              background: '#ffffff',
              borderRadius: '14px',
              padding: '10px 16px',
              boxShadow: '0 8px 28px rgba(0,0,0,0.14)',
              border: '1px solid rgba(0,0,0,0.06)',
              whiteSpace: 'nowrap',
            }}>
              <p style={{
                margin: 0,
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 700,
                fontSize: '13px',
                color: '#1a1a1a',
                lineHeight: 1.3,
              }}>
                ¡Hola! ¿Tienes un proyecto?
              </p>
              <p style={{
                margin: '2px 0 0',
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: '11px',
                color: '#6b7280',
              }}>
                Respuesta en minutos 🚀
              </p>
              {/* Flecha */}
              <div style={{
                position: 'absolute',
                right: '-7px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0, height: 0,
                borderTop: '7px solid transparent',
                borderBottom: '7px solid transparent',
                borderLeft: '7px solid #ffffff',
                filter: 'drop-shadow(1px 0 1px rgba(0,0,0,0.06))',
              }} />
            </div>
          )}

          {/* Botón principal */}
          <div style={{ position: 'relative', width: '60px', height: '60px' }}>
            {/* Anillos de pulso */}
            <div className="wa-ring" />
            <div className="wa-ring-2" />

            {/* Círculo verde */}
            <div
              className="wa-btn"
              style={{
                position: 'relative',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366 0%, #1aad52 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ width: '28px', height: '28px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </div>
        </a>
      )}
    </>
  )
}
