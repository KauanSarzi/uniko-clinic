export const CONSENT_KEY = 'uniko_cookie_consent'
export type ConsentValue = 'accepted' | 'rejected'

export function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  return (localStorage.getItem(CONSENT_KEY) as ConsentValue) ?? null
}

export function setConsent(value: ConsentValue): void {
  localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new Event('uniko-consent-change'))
}

export function hasConsented(): boolean {
  return getConsent() === 'accepted'
}
