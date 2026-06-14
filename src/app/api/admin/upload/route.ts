import { NextRequest } from 'next/server'
import { put } from '@vercel/blob'
import { getAdminSession } from '@/lib/auth'

const MAX_BYTES = 8 * 1024 * 1024 // 8 MB
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif']

export async function POST(req: NextRequest) {
  const session = await getAdminSession()
  if (!session) return Response.json({ error: 'No autorizado' }, { status: 401 })

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      { error: 'Almacenamiento no configurado. Crea un Blob Store en Vercel para habilitar la subida de imágenes.' },
      { status: 503 },
    )
  }

  try {
    const form = await req.formData()
    const file = form.get('file')

    if (!(file instanceof File)) {
      return Response.json({ error: 'No se recibió ningún archivo' }, { status: 400 })
    }
    if (!ALLOWED.includes(file.type)) {
      return Response.json({ error: 'Formato no permitido. Usa JPG, PNG, WEBP o AVIF.' }, { status: 400 })
    }
    if (file.size > MAX_BYTES) {
      return Response.json({ error: 'La imagen supera el límite de 8 MB.' }, { status: 400 })
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const blob = await put(`zoovegetal/${Date.now()}.${ext}`, file, {
      access: 'public',
      addRandomSuffix: true,
    })

    return Response.json({ url: blob.url })
  } catch (err) {
    console.error('Error al subir imagen:', err)
    return Response.json({ error: 'Error al subir la imagen' }, { status: 500 })
  }
}
