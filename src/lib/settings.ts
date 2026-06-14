import { prisma } from '@/lib/prisma'

/**
 * Lee un valor de configuración del sitio (SiteSettings) por clave.
 * Devuelve null si no existe o si la base de datos no responde.
 */
export async function getSetting(key: string): Promise<string | null> {
  try {
    const row = await prisma.siteSettings.findUnique({ where: { key } })
    return row?.value ?? null
  } catch {
    return null
  }
}

/**
 * Lee varias claves a la vez. Devuelve un objeto { key: value }.
 */
export async function getSettings(keys: string[]): Promise<Record<string, string>> {
  try {
    const rows = await prisma.siteSettings.findMany({ where: { key: { in: keys } } })
    return Object.fromEntries(rows.map((r) => [r.key, r.value]))
  } catch {
    return {}
  }
}

/**
 * Crea o actualiza un valor de configuración.
 */
export async function setSetting(key: string, value: string): Promise<void> {
  await prisma.siteSettings.upsert({
    where: { key },
    create: { key, value },
    update: { value },
  })
}
