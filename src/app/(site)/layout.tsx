import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import WhatsAppButton from '@/components/site/WhatsAppButton'
import SocialProofPopup from '@/components/site/SocialProofPopup'
import { getSetting } from '@/lib/settings'

function parseList(raw: string | null): string[] {
  if (!raw) return []
  try {
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string' && x.trim()).map((x) => x.trim()) : []
  } catch {
    return []
  }
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const messages = parseList(await getSetting('social_messages'))
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <SocialProofPopup messages={messages} />
    </>
  )
}
