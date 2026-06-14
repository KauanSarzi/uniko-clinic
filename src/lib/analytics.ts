import { hasConsented } from './cookieConsent'

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return
  if (!hasConsented()) return

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }

  // Google Tag Manager — dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params })
  }

  // Meta Pixel — evento customizado
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params)
  }
}
