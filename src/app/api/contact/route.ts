import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, subject, message, species, format, volume } = body

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    const contact = await prisma.contactMessage.create({
      data: { name, email, phone: phone || null, company: company || null, subject, message },
    })

    // Enviar notificación por correo (no bloquea la respuesta si falla)
    sendContactNotification({ name, email, phone, company, subject, message, species, format, volume })
      .catch((err) => console.error('Error enviando correo:', err))

    return Response.json({ success: true, id: contact.id })
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
