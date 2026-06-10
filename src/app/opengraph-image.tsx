import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zoovegetal — Co-desarrollo y maquila de alimentos para mascotas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #021f01 0%, #063b05 55%, #0d5c0b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '70px 80px',
          position: 'relative',
        }}
      >
        {/* Círculos decorativos */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(140,208,43,0.07)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'rgba(140,208,43,0.05)',
        }} />

        {/* Monograma ZV */}
        <div style={{
          width: '88px', height: '88px',
          borderRadius: '22px',
          background: 'rgba(140,208,43,0.18)',
          border: '2px solid rgba(140,208,43,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '28px',
          fontSize: '38px',
          fontWeight: 900,
          color: '#8cd02b',
          letterSpacing: '-2px',
        }}>
          ZV
        </div>

        {/* Nombre */}
        <div style={{
          fontSize: 78,
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '-3px',
          lineHeight: 1,
          marginBottom: '16px',
        }}>
          Zoovegetal
        </div>

        {/* Línea */}
        <div style={{
          width: '64px', height: '4px',
          background: '#8cd02b',
          borderRadius: '2px',
          marginBottom: '22px',
        }} />

        {/* Tagline */}
        <div style={{
          fontSize: 27,
          color: 'rgba(255,255,255,0.72)',
          textAlign: 'center',
          maxWidth: '680px',
          lineHeight: 1.45,
          marginBottom: '36px',
        }}>
          Co-desarrollo y maquila exclusiva de alimentos para mascotas bajo tu marca
        </div>

        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(140,208,43,0.12)',
          border: '1.5px solid rgba(140,208,43,0.28)',
          borderRadius: '100px',
          padding: '10px 26px',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#8cd02b',
          }} />
          <div style={{ color: '#9fd63a', fontSize: 17, fontWeight: 700, letterSpacing: '0.04em' }}>
            Certificado BPM ICA · Medellín, Colombia · Desde 2015
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
