import 'server-only'
import { cookies } from 'next/headers'
import { translate, DEFAULT_LOCALE, type Locale } from './dictionary'

export async function getLocale(): Promise<Locale> {
  const store = await cookies()
  const v = store.get('locale')?.value
  return v === 'en' ? 'en' : DEFAULT_LOCALE
}

/** Traductor para Server Components: const t = await getT() */
export async function getT() {
  const locale = await getLocale()
  return (s: string) => translate(locale, s)
}
