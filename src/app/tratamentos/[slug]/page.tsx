import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTABanner from '@/components/sections/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SectionTitle from '@/components/ui/SectionTitle'
import TratamentoViewTracker from '@/components/analytics/TratamentoViewTracker'
import { getTratamentoBySlug, tratamentos } from '@/data/tratamentos'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { clinica } from '@/lib/config'

interface PageProps {
  params: Promise<{ slug: string }>
}

const metaDescriptions: Record<string, string> = {
  'harmonizacao-facial':
    'Planejamento facial personalizado para equilibrar proporções, suavizar sinais do tempo e preservar sua identidade. Avaliação gratuita em São Paulo.',
  'toxina-botulinica':
    'Toxina botulínica para suavizar linhas da testa, glabela e pés de galinha com naturalidade. Avaliação gratuita na Uniko Clinic.',
  'preenchimento-facial-labial':
    'Preenchimento facial e labial para proporção, contorno e reposição de volume com naturalidade. Avaliação gratuita em São Paulo.',
  'bioestimuladores-colageno':
    'Bioestimuladores de colágeno para flacidez, firmeza e qualidade da pele com resultado progressivo. Avaliação gratuita em São Paulo.',
  'laser-e-tecnologias':
    'Lasers e tecnologias para manchas, textura, poros e qualidade da pele, com avaliação individual do fototipo. Uniko Clinic em São Paulo.',
  'depilacao-a-laser':
    'Depilação a laser para redução progressiva dos pelos, foliculite e praticidade na rotina. Avaliação gratuita na Uniko Clinic.',
  'tratamentos-corporais':
    'Tratamentos corporais para flacidez, gordura localizada e contorno, com protocolo individualizado. Avaliação gratuita em São Paulo.',
  'tratamentos-para-pele':
    'Tratamentos para pele com foco em acne, manchas, textura, poros e hidratação, conforme avaliação individual. Uniko Clinic em São Paulo.',
}

export async function generateStaticParams() {
  return tratamentos.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const tratamento = getTratamentoBySlug(slug)
  if (!tratamento) return {}
  const description =
    metaDescriptions[slug] ??
    `${tratamento.descricao.slice(0, 110)}. Uniko Clinic, São Paulo. Avaliação gratuita.`
  return {
    title: tratamento.nome,
    description,
    alternates: {
      canonical: `/tratamentos/${slug}`,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Uniko Clinic',
      title: `${tratamento.nome} | Uniko Clinic`,
      description,
      url: `/tratamentos/${slug}`,
    },
    twitter: {
      title: `${tratamento.nome} | Uniko Clinic`,
      description,
    },
  }
}

export default async function TratamentoPage({ params }: PageProps) {
  const { slug } = await params
  const tratamento = getTratamentoBySlug(slug)
  if (!tratamento) notFound()

  const whatsAppUrl = buildWhatsAppUrl(tratamento.nome)

  return (
    <>
      <TratamentoViewTracker nome={tratamento.nome} slug={slug} />
      {/* Hero mini */}
      <div className="bg-vinho py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="font-sans text-xs text-gold/70 tracking-widest uppercase">
            {tratamento.categoriaLabel}
          </span>
          <h1 className="font-display text-nude text-display-lg md:text-display-xl leading-[1.1]">
            {tratamento.nome}
          </h1>
          <p className="font-sans text-nude/75 text-lg max-w-xl">{tratamento.descricao}</p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-pill bg-gold-gradient font-sans text-vinho font-semibold hover:shadow-glow hover:scale-105 transition-all duration-200"
          >
            Agendar avaliação gratuita pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col gap-16">

        {/* O que é */}
        <section aria-labelledby="oque-e">
          <h2 id="oque-e" className="font-display text-vinho text-display-md mb-4">
            O que é {tratamento.nome}?
          </h2>
          <p className="font-sans text-vinho/65 leading-relaxed">{tratamento.descricaoLonga}</p>
        </section>

        {/* Quando esse tratamento faz sentido */}
        {tratamento.quandoFazSentido && tratamento.quandoFazSentido.length > 0 && (
          <section aria-labelledby="quando-faz-sentido">
            <h2 id="quando-faz-sentido" className="font-display text-vinho text-display-md mb-6">
              Quando esse tratamento faz sentido?
            </h2>
            <ul className="flex flex-col gap-3">
              {tratamento.quandoFazSentido.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="font-display text-gold text-lg leading-none shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span className="font-sans text-sm text-vinho/65">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Para quem é indicado */}
        <section aria-labelledby="indicacao">
          <h2 id="indicacao" className="font-display text-vinho text-display-md mb-6">
            Para quem é indicado
          </h2>
          <ul className="flex flex-col gap-3">
            {tratamento.indicacao.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <svg className="w-2.5 h-2.5 text-vinho" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="font-sans text-sm text-vinho/65">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Como funciona */}
        <section aria-labelledby="como-funciona">
          <h2 id="como-funciona" className="font-display text-vinho text-display-md mb-4">
            Como funciona
          </h2>
          <p className="font-sans text-vinho/65 leading-relaxed">{tratamento.comoFunciona}</p>
        </section>

        {/* O que esse tratamento não faz */}
        {tratamento.oQueNaoFaz && tratamento.oQueNaoFaz.length > 0 && (
          <section aria-labelledby="o-que-nao-faz">
            <h2 id="o-que-nao-faz" className="font-display text-vinho text-display-md mb-6">
              O que esse tratamento não faz
            </h2>
            <div className="rounded-card bg-vinho/5 border border-vinho/10 p-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-3">
                {tratamento.oQueNaoFaz.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="font-sans text-vinho/30 text-base leading-none shrink-0 mt-0.5 select-none"
                      aria-hidden="true"
                    >
                      ○
                    </span>
                    <span className="font-sans text-sm text-vinho/65">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-xs text-vinho/45 italic border-t border-vinho/10 pt-4">
                A combinação de técnicas dentro de um planejamento individual pode ampliar os resultados. Na avaliação gratuita, identificamos o protocolo mais adequado para o seu caso.
              </p>
            </div>
          </section>
        )}

        {/* Benefícios */}
        <section aria-labelledby="beneficios">
          <h2 id="beneficios" className="font-display text-vinho text-display-md mb-6">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tratamento.beneficios.map((beneficio, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-card bg-nude-dark">
                <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-vinho" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <span className="font-sans text-sm text-vinho/70">{beneficio}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Duração, cuidados e expectativa */}
        <section aria-labelledby="duracao">
          <h2 id="duracao" className="font-display text-vinho text-display-md mb-4">
            Duração, cuidados e expectativa
          </h2>
          <p className="font-sans text-vinho/65 leading-relaxed">{tratamento.duracaoECuidados}</p>
        </section>

        {/* FAQ */}
        {tratamento.faq.length > 0 && (
          <section aria-labelledby="faq">
            <h2 id="faq" className="font-display text-vinho text-display-md mb-6">
              Perguntas frequentes
            </h2>
            <FAQAccordion items={tratamento.faq} />
          </section>
        )}
      </div>

      <CTABanner
        title="Quer entender se esse tratamento é indicado para você?"
        subtitle="Agende uma avaliação gratuita e receba uma orientação individual para o seu caso."
        ctaLabel="Agendar avaliação gratuita pelo WhatsApp"
        tratamento={tratamento.nome}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              ...(tratamento.faq.length > 0 ? [{
                '@type': 'FAQPage',
                mainEntity: tratamento.faq.map(item => ({
                  '@type': 'Question',
                  name: item.pergunta,
                  acceptedAnswer: { '@type': 'Answer', text: item.resposta },
                })),
              }] : []),
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Início', item: clinica.siteUrl },
                  { '@type': 'ListItem', position: 2, name: 'Tratamentos', item: `${clinica.siteUrl}/tratamentos` },
                  { '@type': 'ListItem', position: 3, name: tratamento.nome, item: `${clinica.siteUrl}/tratamentos/${slug}` },
                ],
              },
              {
                '@type': 'Service',
                name: tratamento.nome,
                description: tratamento.descricao,
                provider: {
                  '@type': 'HealthAndBeautyBusiness',
                  name: clinica.nomeCompleto,
                },
                areaServed: { '@type': 'City', name: 'São Paulo' },
                serviceType: 'Estética avançada',
              },
            ],
          }),
        }}
      />
    </>
  )
}
