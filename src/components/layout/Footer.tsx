import Link from 'next/link'
import { clinica } from '@/lib/config'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/tratamentos', label: 'Tratamentos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/resultados', label: 'Resultados' },
  { href: '/agendamento', label: 'Agendamento' },
]

export default function Footer() {
  return (
    <footer className="bg-vinho text-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Coluna 1 — Logo e tagline */}
          <div className="flex flex-col gap-4">
            <div className="leading-none">
              <div className="font-display text-gold text-xl tracking-[0.2em] uppercase">UNIKO</div>
              <div className="font-script text-gold text-xl -mt-1">Clinic</div>
              <div className="font-sans text-nude/50 text-[9px] tracking-widest uppercase mt-0.5">by Andréia Sarzi</div>
            </div>
            <p className="font-sans text-sm text-nude/70 leading-relaxed max-w-xs">
              Estética que começa por dentro.<br />
              Protocolos exclusivos para a sua beleza única.
            </p>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/unikoclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-nude/70 hover:text-gold transition-colors w-fit"
              aria-label="Instagram da Uniko Clinic"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @unikoclinic
            </a>
            {/* Identificação profissional */}
            <p className="font-sans text-nude/40 text-[10px] leading-relaxed">
              Responsável técnica: Andréia Sarzi<br />
              Biomédica Esteta
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-4">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-nude/70 hover:text-gold transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/politica-de-privacidade"
                className="font-sans text-sm text-nude/70 hover:text-gold transition-colors w-fit"
              >
                Política de Privacidade
              </Link>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-4">
              Contato
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm text-nude/70">
              <p>
                <span className="block text-nude/40 text-xs uppercase tracking-wider mb-0.5">Endereço</span>
                {clinica.endereco}
              </p>
              <p>
                <span className="block text-nude/40 text-xs uppercase tracking-wider mb-0.5">Horários</span>
                {clinica.horarios.map(h => (
                  <span key={h.dia} className="block">{h.dia}: {h.horario}</span>
                ))}
              </p>
              <p>
                <span className="block text-nude/40 text-xs uppercase tracking-wider mb-0.5">WhatsApp</span>
                <a
                  href="tel:+5511978008688"
                  className="hover:text-gold transition-colors"
                >
                  (11) 97800-8688
                </a>
              </p>
              <a
                href="/agendamento"
                className="mt-2 inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
              >
                Agendar Avaliação →
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-10 pt-6 border-t border-nude/10 flex flex-col sm:flex-row items-center justify-between gap-2 font-sans text-xs text-nude/40">
          <span>© {new Date().getFullYear()} Uniko Clinic by Andréia Sarzi. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade" className="hover:text-gold transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
