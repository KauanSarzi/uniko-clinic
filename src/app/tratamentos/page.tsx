import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import TratamentosGrid from './_components/TratamentosGrid'

export const metadata: Metadata = {
  title: 'Tratamentos',
  description:
    'Harmonização facial, toxina botulínica, preenchimento e bioestimuladores em São Paulo. Protocolos exclusivos da Uniko Clinic. Avaliação gratuita.',
  alternates: { canonical: '/tratamentos' },
}

export default function TratamentosPage() {
  return (
    <>
      <HeroSection
        title="Tratamentos"
        subtitle="Protocolos exclusivos para rosto, pele e corpo. Cada procedimento é pensado para a sua beleza única."
        size="small"
        ctaLabel=""
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TratamentosGrid />
        </div>
      </section>

      <CTABanner
        title="Não sabe por onde começar?"
        subtitle="Agende uma avaliação. Andréia Sarzi indicará o protocolo mais adequado para o seu caso."
        ctaLabel="Falar pelo WhatsApp"
      />
    </>
  )
}
