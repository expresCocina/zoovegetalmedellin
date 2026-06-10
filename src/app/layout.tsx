import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://zoovegetal.com'),
  title: {
    default: 'Zoovegetal — Maquila de Alimentos para Mascotas',
    template: '%s | Zoovegetal',
  },
  description:
    'Co-desarrollo y maquila exclusiva de alimentos y suplementos para mascotas bajo tu marca. Fórmulas 99% naturales, planta certificada BPM ICA, desde Medellín, Colombia.',
  keywords: [
    'maquila alimentos mascotas',
    'co-desarrollo alimentos animales',
    'fabricación bajo marca propia',
    'maquila pet food Colombia',
    'alimentos naturales mascotas',
    'suplementos animales maquila',
    'Medellín Colombia',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://zoovegetal.com',
    siteName: 'Zoovegetal',
    title: 'Zoovegetal — Maquila de Alimentos para Mascotas',
    description: 'Co-desarrollo y maquila exclusiva bajo tu marca. Fórmulas 99% naturales, planta BPM ICA, Medellín, Colombia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoovegetal — Maquila de Alimentos para Mascotas',
    description: 'Co-desarrollo y maquila exclusiva de alimentos para mascotas bajo tu marca.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased" style={{ overflowX: 'hidden' }}>{children}</body>
    </html>
  )
}
