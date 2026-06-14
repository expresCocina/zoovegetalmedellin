import { NextRequest } from 'next/server'
import { getAdminSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getAdminSession()
  if (!session) return Response.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const rows = await prisma.siteSettings.findMany()
    return Response.json(Object.fromEntries(rows.map((r) => [r.key, r.value])))
  } catch {
    return Response.json({}, { status: 200 })
  }
}

export async function PUT(req: NextRequest) {
  const session = await getAdminSession()
  if (!session) return Response.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const body = (await req.json()) as Record<string, string>
    const entries = Object.entries(body)

    await Promise.all(
      entries.map(([key, value]) =>
        prisma.siteSettings.upsert({
          where: { key },
          create: { key, value: value ?? '' },
          update: { value: value ?? '' },
        }),
      ),
    )

    return Response.json({ success: true })
  } catch (err) {
    console.error('Error al guardar configuración:', err)
    return Response.json({ error: 'Error al guardar' }, { status: 500 })
  }
}
