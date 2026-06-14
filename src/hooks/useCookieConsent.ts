'use client'
import { useState, useEffect } from 'react'
import { getConsent, setConsent as persistConsent, type ConsentValue } from '@/lib/cookieConsent'

export function useCookieConsent() {
  const [consent, setConsentState] = useState<ConsentValue | null>(null)
  const [resolved, setResolved] = useState(false)

  useEffect(() => {
    setConsentState(getConsent())
    setResolved(true)

    const handleChange = () => setConsentState(getConsent())
    window.addEventListener('uniko-consent-change', handleChange)
    return () => window.removeEventListener('uniko-consent-change', handleChange)
  }, [])

  function accept() {
    persistConsent('accepted')
    setConsentState('accepted')
  }

  function reject() {
    persistConsent('rejected')
    setConsentState('rejected')
  }

  return { consent, resolved, accept, reject }
}
