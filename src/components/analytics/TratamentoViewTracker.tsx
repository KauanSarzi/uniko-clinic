'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

interface Props {
  nome: string
  slug: string
}

export default function TratamentoViewTracker({ nome, slug }: Props) {
  useEffect(() => {
    trackEvent('tratamento_view', { nome, slug })
  }, [nome, slug])

  return null
}
