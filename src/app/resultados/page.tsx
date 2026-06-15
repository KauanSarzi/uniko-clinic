import type { Metadata } from 'next'
import CTABanner from '@/components/sections/CTABanner'
import SectionTitle from '@/components/ui/SectionTitle'
import TestimonialCard from '@/components/cards/TestimonialCard'
import { depoimentos } from '@/data/depoimentos'

export const metadata: Metadata = {
  title: 'Resultados',
  description:
    'Galeria de resultados da Uniko Clinic. Veja fotos de antes e depois dos tratamentos realizados pela biomédica Andréia Sarzi.',
  alternates: { canonical: '/resultados' },
  openGraph: {
    title: 'Resultados | Uniko Clinic',
    description:
      'Galeria de resultados da Uniko Clinic. Tratamentos realizados pela biomédica Andréia Sarzi em São Paulo, com foco em naturalidade e segurança.',
    url: '/resultados',
  },
  twitter: {
    title: 'Resultados | Uniko Clinic',
    description:
      'Galeria de resultados da Uniko Clinic. Tratamentos realizados pela biomédica Andréia Sarzi em São Paulo, com foco em naturalidade e segurança.',
  },
}

export default function ResultadosPage() {
  const depoimentosAutorizados = depoimentos.filter(d => d.autorizado)

  return (
    <>
      {/* Hero */}
      <div className="bg-vinho py-20 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-4">
          <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
          <h1 className="font-display text-nude text-display-lg md:text-display-xl leading-[1.1]">
            Resultados
          </h1>
          <p className="font-sans text-nude/70 text-lg">
            Transformações reais, naturais e únicas.
          </p>
        </div>
      </div>

      {/* Aviso legal — obrigatório */}
      <div className="bg-nude-dark border-b border-vinho/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs text-vinho/50 text-center leading-relaxed">
            <strong className="text-vinho/70">Aviso legal:</strong> As imagens exibidas são de pacientes que autorizaram a divulgação. Resultados são individuais e podem variar de acordo com cada paciente. A indicação de qualquer procedimento depende de avaliação profissional. Material informativo — não substitui consulta médica.
          </p>
        </div>
      </div>

      {/* Galeria em breve */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
          <SectionTitle
            title="Antes & Depois"
            subtitle="Resultados naturais e harmoniosos — porque cada beleza é única."
          />
          <div className="w-full rounded-card border border-vinho/10 bg-nude-dark p-10 flex flex-col items-center gap-4">
            <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
            <p className="font-sans text-vinho/70 text-base leading-relaxed">
              Os resultados autorizados serão publicados em breve.<br />
              Cada imagem é divulgada somente com consentimento expresso da paciente.
            </p>
            <p className="font-sans text-vinho/50 text-sm">
              Acompanhe os resultados no Instagram:{' '}
              <a
                href="https://www.instagram.com/unikoclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:text-gold-dark transition-colors"
              >
                @unikoclinic
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos — exibidos apenas quando houver depoimentos autorizados */}
      {depoimentosAutorizados.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-nude-dark">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <SectionTitle
              title="O que dizem nossas pacientes"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {depoimentosAutorizados.map(d => (
                <TestimonialCard key={d.id} depoimento={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Quer entender o que a estética avançada pode fazer por você?"
        subtitle="Agende sua avaliação gratuita e descubra o que faz sentido para o seu caso."
        ctaLabel="Agendar Avaliação Gratuita"
      />
    </>
  )
}
