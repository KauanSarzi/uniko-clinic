'use client'

import { trackEvent } from '@/lib/analytics'

interface MapEmbedProps {
  embedUrl?: string
  address?: string
}

export default function MapEmbed({
  embedUrl,
  address = '',
}: MapEmbedProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Mapa */}
      {embedUrl ? (
        <div className="relative w-full aspect-video lg:aspect-auto lg:h-96 rounded-card overflow-hidden shadow-card">
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Uniko Clinic no Google Maps"
          />
        </div>
      ) : (
        /* Placeholder enquanto a URL do mapa não é configurada */
        <div className="w-full aspect-video lg:aspect-auto lg:h-96 rounded-card bg-vinho/10 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-10 h-10 text-vinho/30 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="font-sans text-sm text-vinho/40">Mapa em breve</p>
          </div>
        </div>
      )}

      {/* Endereço */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="font-sans text-sm text-vinho/70">{address}</span>
        </div>
        {address && (
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('como_chegar_click', { address })}
            className="font-sans text-sm text-gold hover:text-gold-dark transition-colors font-medium whitespace-nowrap"
          >
            Como chegar →
          </a>
        )}
      </div>
    </div>
  )
}
