import Link from 'next/link'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center flex flex-col items-center gap-6 max-w-md">
        <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
        <h1 className="font-display text-vinho text-display-lg leading-[1.1]">404</h1>
        <p className="font-script text-gold text-2xl">página não encontrada</p>
        <p className="font-sans text-vinho/60 text-sm leading-relaxed">
          A página que você buscou não existe ou foi movida. Que tal voltar para o início?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-pill bg-vinho text-nude font-sans text-sm font-medium hover:bg-vinho-light transition-colors"
          >
            Voltar ao início
          </Link>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-pill border border-vinho/20 text-vinho font-sans text-sm font-medium hover:bg-vinho/5 transition-colors"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
