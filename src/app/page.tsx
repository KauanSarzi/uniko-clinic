import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import SectionTitle from '@/components/ui/SectionTitle'
import CTABanner from '@/components/sections/CTABanner'
import MapEmbed from '@/components/sections/MapEmbed'
import TratamentoCard from '@/components/cards/TratamentoCard'
import TestimonialCard from '@/components/cards/TestimonialCard'
import DiferencialCard from '@/components/cards/DiferencialCard'
import { getTratamentosDestaque } from '@/data/tratamentos'
import { depoimentos } from '@/data/depoimentos'
import { diferenciais } from '@/data/diferenciais'
import { clinica } from '@/lib/config'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Uniko Clinic | Rejuvenescimento natural em São Paulo',
  description:
    'Clínica de estética avançada em São Paulo. Avaliação gratuita com a biomédica Andréia Sarzi. Harmonização facial, bioestimuladores, laser e muito mais.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Uniko Clinic | Rejuvenescimento natural em São Paulo',
    description:
      'Clínica de estética avançada em São Paulo. Avaliação gratuita com a biomédica Andréia Sarzi. Harmonização facial, bioestimuladores, laser e muito mais.',
    url: '/',
  },
  twitter: {
    title: 'Uniko Clinic | Rejuvenescimento natural em São Paulo',
    description:
      'Clínica de estética avançada em São Paulo. Avaliação gratuita com a biomédica Andréia Sarzi. Harmonização facial, bioestimuladores, laser e muito mais.',
  },
}

const passosDaAvaliacao = [
  {
    numero: '01',
    titulo: 'Escuta e análise individual',
    texto:
      'Na avaliação gratuita, Andréia Sarzi ouve seus objetivos e analisa sua pele e anatomia. Cada detalhe importa para um planejamento que respeite a sua singularidade.',
  },
  {
    numero: '02',
    titulo: 'Planejamento estético',
    texto:
      'Com base na avaliação, desenvolvemos um protocolo personalizado. Você entende cada etapa, tira todas as dúvidas e decide com calma — sem pressão.',
  },
  {
    numero: '03',
    titulo: 'Indicação com segurança',
    texto:
      'Só indicamos o que é realmente adequado para o seu caso. Resultado natural e segurança são critérios inegociáveis na Uniko Clinic.',
  },
]

const objetivosTratamentos = [
  'Suavizar linhas de expressão',
  'Reposição de volume',
  'Definição de contornos',
  'Qualidade e textura da pele',
  'Tratamentos corporais',
  'Depilação a laser',
]

export default function HomePage() {
  const tratamentosDestaque = getTratamentosDestaque()
  const whatsAppUrl = buildWhatsAppUrl()

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Rejuvenescimento natural com tecnologia e planejamento individual"
        subtitle="Na Uniko Clinic, cada tratamento é planejado de forma individual para valorizar sua beleza com equilíbrio, segurança e naturalidade."
        ctaLabel="Agendar avaliação gratuita pelo WhatsApp"
        ctaWhatsApp
        size="full"
      />

      {/* Posicionamento */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-vinho/10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
          <p className="font-display text-vinho text-xl md:text-2xl leading-relaxed italic">
            A Uniko Clinic não trabalha com procedimentos isolados. Cada indicação considera
            sua anatomia, sua pele, sua rotina — e o resultado que faz sentido para você.
          </p>
          <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
        </div>
      </section>

      {/* Como funciona sua avaliação */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-vinho">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionTitle
            title="Como funciona sua avaliação"
            subtitle="A avaliação gratuita é o ponto de partida para um planejamento que faz sentido para você — sem pressão e sem compromisso."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {passosDaAvaliacao.map((passo) => (
              <div
                key={passo.numero}
                className="flex flex-col gap-4 p-6 rounded-card bg-nude/5 border border-nude/10"
              >
                <span
                  className="font-display text-gold/60 text-4xl leading-none"
                  aria-hidden="true"
                >
                  {passo.numero}
                </span>
                <h3 className="font-display text-nude text-xl leading-snug">
                  {passo.titulo}
                </h3>
                <p className="font-sans text-nude/65 text-sm leading-relaxed">
                  {passo.texto}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-pill bg-[#25D366] text-white font-sans font-medium hover:shadow-glow hover:scale-105 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar minha avaliação gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Tratamentos em destaque */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-nude-dark">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionTitle
            title="Tratamentos pensados para cada objetivo"
            subtitle="Um protocolo individualizado, desenvolvido para o que você quer alcançar — sem indicações genéricas e sem promessas fora da realidade."
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {objetivosTratamentos.map((obj) => (
              <span
                key={obj}
                className="px-3 py-1.5 rounded-pill bg-white border border-vinho/15 font-sans text-xs text-vinho/60"
              >
                {obj}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tratamentosDestaque.map((t) => (
              <TratamentoCard key={t.slug} tratamento={t} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/tratamentos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border border-vinho/20 font-sans text-sm text-vinho hover:bg-vinho hover:text-nude transition-colors"
            >
              Ver todos os tratamentos
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionTitle
            title="Por que a Uniko Clinic?"
            subtitle="A sua beleza merece cuidado exclusivo e personalizado."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d) => (
              <DiferencialCard key={d.id} diferencial={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Apresentação Andréia Sarzi */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto — placeholder até ter imagem real */}
          <div className="relative aspect-[4/5] rounded-card bg-vinho/10 overflow-hidden order-last lg:order-first">
            <div className="absolute inset-0 bg-gradient-to-br from-vinho/20 to-vinho/5 flex items-center justify-center">
              <span className="font-script text-vinho/20 text-5xl">Andréia Sarzi</span>
            </div>
            <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full border border-gold/30" aria-hidden="true" />
            <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-gold/20" aria-hidden="true" />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
            <h2 className="font-display text-vinho text-display-md md:text-display-lg leading-[1.15]">
              Uma abordagem que<br />começa pela escuta
            </h2>
            <p className="font-sans text-vinho/65 text-base leading-relaxed">
              Andréia Sarzi é biomédica esteta, com atuação em estética avançada. Sua abordagem parte de um princípio simples: cada rosto é único, e cada tratamento precisa respeitar isso.
            </p>
            <p className="font-sans text-vinho/65 text-base leading-relaxed">
              Na Uniko Clinic, você não recebe um protocolo padrão. Recebe uma avaliação individual, uma escuta atenta e uma indicação fundamentada — pensada para o seu rosto, sua pele e o resultado que você quer alcançar com segurança.
            </p>
            <p className="font-sans text-vinho/65 text-base leading-relaxed">
              Para Andréia, cuidar da aparência é também cuidar da autoestima. Por isso, cada atendimento combina técnica, tecnologia e um olhar humanizado que vai além do procedimento.
            </p>
            <Link
              href="/sobre"
              className="font-sans text-sm text-gold font-medium hover:text-gold-dark transition-colors flex items-center gap-2 w-fit"
            >
              Conheça a história da Uniko Clinic
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos — exibidos apenas quando houver depoimentos autorizados */}
      {(() => {
        const autorizados = depoimentos.filter(d => d.autorizado)
        if (autorizados.length === 0) return null
        return (
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-nude-dark">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
              <SectionTitle title="O que dizem nossas pacientes" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {autorizados.map((d) => (
                  <TestimonialCard key={d.id} depoimento={d} />
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* CTA */}
      <CTABanner
        title="Sua avaliação gratuita está a uma mensagem"
        subtitle="Fale com nossa equipe pelo WhatsApp e descubra qual tratamento faz sentido para o seu caso — sem compromisso."
        ctaLabel="Quero saber o que é indicado para mim"
      />

      {/* Localização */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionTitle
            title="Onde nos encontrar"
            subtitle="Estamos localizados em São Paulo, prontos para receber você."
          />
          <div className="max-w-3xl mx-auto w-full">
            <MapEmbed
              embedUrl={clinica.googleMapsEmbedUrl || undefined}
              address={clinica.endereco}
            />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Como funciona a avaliação gratuita na Uniko Clinic',
            description: 'Processo de avaliação personalizada para indicação de tratamentos estéticos em São Paulo.',
            step: passosDaAvaliacao.map((passo, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: passo.titulo,
              text: passo.texto,
            })),
          }),
        }}
      />
    </>
  )
}
