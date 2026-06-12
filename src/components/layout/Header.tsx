'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/tratamentos', label: 'Tratamentos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/resultados', label: 'Resultados' },
  { href: '/agendamento', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-nude/95 backdrop-blur-sm border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — substituir por <Image src="/logo/logo-light.svg" ... /> quando disponível */}
          <Link href="/" className="flex flex-col items-start leading-none" aria-label="Uniko Clinic — página inicial">
            <span className="font-display text-vinho text-lg sm:text-xl tracking-[0.2em] uppercase">
              UNIKO
            </span>
            <span className="font-script text-gold text-base sm:text-lg -mt-1">
              Clinic
            </span>
            <span className="font-sans text-vinho/60 text-[9px] tracking-widest uppercase -mt-0.5">
              by Andréia Sarzi
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-gold font-medium'
                    : 'text-vinho hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop + hamburger mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/agendamento"
              onClick={() => trackEvent('agendamento_click', { source: 'header', label: 'Agendar Avaliação' })}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-pill bg-vinho text-nude font-sans text-sm font-medium hover:bg-vinho-light transition-colors shadow-card"
            >
              Agendar Avaliação
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-vinho rounded-lg hover:bg-vinho/5 transition-colors"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-gold/20 py-4">
            <nav className="flex flex-col" aria-label="Navegação mobile">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 font-sans rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'text-gold bg-vinho/5 font-medium'
                      : 'text-vinho hover:bg-vinho/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/agendamento"
                onClick={() => {
                  setMenuOpen(false)
                  trackEvent('agendamento_click', { source: 'header', label: 'Agendar Avaliação' })
                }}
                className="mt-3 mx-4 flex items-center justify-center py-3 rounded-pill bg-vinho text-nude font-sans text-sm font-medium"
              >
                Agendar Avaliação
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
