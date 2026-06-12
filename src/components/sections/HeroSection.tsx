'use client'

import Link from 'next/link'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { trackEvent } from '@/lib/analytics'

interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  ctaWhatsApp?: boolean
  tratamento?: string
  size?: 'full' | 'medium' | 'small'
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaLabel = 'Agendar Avaliação',
  ctaHref,
  ctaWhatsApp = false,
  tratamento,
  size = 'full',
  backgroundImage,
}: HeroSectionProps) {
  const heightClass = {
    full: 'min-h-[100dvh]',
    medium: 'min-h-[60vh]',
    small: 'min-h-[40vh] md:min-h-[50vh]',
  }[size]

  const ctaUrl = ctaWhatsApp ? buildWhatsAppUrl(tratamento) : (ctaHref ?? '/agendamento')
  const isExternal = ctaWhatsApp

  function handleCtaClick() {
    if (isExternal) {
      trackEvent('whatsapp_cta_click', { source: 'hero', label: ctaLabel })
    }
    trackEvent('agendamento_click', { source: 'hero', label: ctaLabel })
  }

  return (
    <section
      className={`relative flex items-center justify-center ${heightClass} overflow-hidden`}
      aria-label="Hero"
    >
      {/* Fundo */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 bg-vinho" aria-hidden="true" />
      )}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ornamento */}
        <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
          <div className="h-px w-12 sm:w-20 bg-gold-gradient-h opacity-70" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-70" />
          <div className="h-px w-12 sm:w-20 bg-gold-gradient-h opacity-70" />
        </div>

        <h1 className="font-display text-nude text-display-lg md:text-display-xl leading-[1.1] mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sans text-nude/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}

        {ctaLabel && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {isExternal ? (
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-pill bg-gold-gradient font-sans text-vinho font-semibold text-base hover:shadow-glow hover:scale-105 transition-all duration-200"
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaUrl}
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-pill bg-gold-gradient font-sans text-vinho font-semibold text-base hover:shadow-glow hover:scale-105 transition-all duration-200"
              >
                {ctaLabel}
              </Link>
            )}
            <Link
              href="/tratamentos"
              className="font-sans text-nude/80 text-sm underline underline-offset-4 hover:text-nude transition-colors"
            >
              Conhecer tratamentos
            </Link>
          </div>
        )}
      </div>

      {/* Scroll indicator — apenas no hero full */}
      {size === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-nude/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      )}
    </section>
  )
}
