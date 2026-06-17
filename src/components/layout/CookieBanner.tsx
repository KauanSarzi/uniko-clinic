'use client'
import Link from 'next/link'
import { useCookieConsent } from '@/hooks/useCookieConsent'

export default function CookieBanner() {
  const { consent, resolved, accept, reject } = useCookieConsent()

  // Não renderiza nada no SSR nem depois que o usuário já fez uma escolha
  if (!resolved || consent !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed bottom-0 left-0 right-0 z-40 bg-vinho border-t border-nude/10 shadow-card-hover pb-[env(safe-area-inset-bottom)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 font-sans text-sm text-nude/80 leading-relaxed pr-20 sm:pr-0">
          Utilizamos cookies para melhorar sua experiência no site e, quando autorizado, entender como nossas páginas são utilizadas. Você pode aceitar ou recusar cookies não essenciais.
        </p>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="px-5 py-3 rounded-pill bg-gold text-vinho font-sans text-sm font-medium hover:bg-gold-light transition-colors"
          >
            Aceitar
          </button>
          <button
            onClick={reject}
            className="px-5 py-3 rounded-pill border border-nude/30 text-nude font-sans text-sm hover:border-nude/60 transition-colors"
          >
            Recusar
          </button>
          <Link
            href="/politica-de-privacidade"
            className="font-sans text-xs text-nude/50 hover:text-gold underline transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </div>
  )
}
