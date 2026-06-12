'use client'

import { useState } from 'react'
import { FAQ } from '@/types'

interface FAQAccordionProps {
  items: FAQ[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col divide-y divide-vinho/10" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index} role="listitem">
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-sans text-base font-medium text-vinho group-hover:text-gold transition-colors">
                {item.pergunta}
              </span>
              <span
                className={`shrink-0 w-6 h-6 rounded-full border border-vinho/20 flex items-center justify-center transition-all duration-200 ${
                  isOpen ? 'bg-vinho rotate-45' : 'bg-transparent'
                }`}
                aria-hidden="true"
              >
                <svg
                  className={`w-3 h-3 transition-colors ${isOpen ? 'text-nude' : 'text-vinho/60'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="pb-5 pr-10">
                <p className="font-sans text-sm text-vinho/65 leading-relaxed">
                  {item.resposta}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
