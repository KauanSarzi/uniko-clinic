import type { Metadata } from 'next'
import CTABanner from '@/components/sections/CTABanner'
import SectionTitle from '@/components/ui/SectionTitle'
import DiferencialCard from '@/components/cards/DiferencialCard'
import { diferenciais } from '@/data/diferenciais'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Uniko Clinic by Andréia Sarzi, biomédica especializada em estética avançada em São Paulo. Nossa filosofia: estética que começa por dentro.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a Uniko Clinic | Andréia Sarzi',
    description:
      'Conheça a Uniko Clinic by Andréia Sarzi, biomédica especializada em estética avançada em São Paulo. Nossa filosofia: estética que começa por dentro.',
    url: '/sobre',
  },
  twitter: {
    title: 'Sobre a Uniko Clinic | Andréia Sarzi',
    description:
      'Conheça a Uniko Clinic by Andréia Sarzi, biomédica especializada em estética avançada em São Paulo. Nossa filosofia: estética que começa por dentro.',
  },
}

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-vinho py-20 md:py-28 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-4">
          <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
          <h1 className="font-display text-nude text-display-lg md:text-display-xl leading-[1.1]">
            Sobre a Uniko Clinic
          </h1>
          <p className="font-script text-gold text-2xl">estética que começa por dentro</p>
        </div>
      </div>

      {/* História + Andréia */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Foto — placeholder */}
          <div className="relative aspect-[4/5] rounded-card bg-vinho/10 overflow-hidden lg:sticky lg:top-24 self-start">
            <div className="absolute inset-0 bg-gradient-to-br from-vinho/15 to-vinho/5 flex items-center justify-center">
              <span className="font-script text-vinho/20 text-4xl">Andréia Sarzi</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-vinho/80 backdrop-blur-sm p-5">
              <p className="font-sans text-nude/90 text-sm font-semibold">Andréia Sarzi</p>
              <p className="font-sans text-gold text-xs">Biomédica Esteta</p>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
              <h2 className="font-display text-vinho text-display-md leading-[1.15]">
                Nossa história
              </h2>
              <p className="font-sans text-vinho/65 text-base leading-relaxed">
                A Uniko Clinic nasceu do sonho da biomédica Andréia Sarzi de criar um espaço onde cada paciente se sentisse verdadeiramente ouvida e cuidada. Em São Paulo, a clínica se tornou referência em estética personalizada, com protocolos desenvolvidos exclusivamente para cada pessoa.
              </p>
              <p className="font-sans text-vinho/65 text-base leading-relaxed">
                A filosofia da Uniko vai além da estética superficial: acreditamos que cuidar de si mesma é um ato de amor-próprio que transforma não só a aparência, mas também a autoestima e o bem-estar emocional.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-display text-vinho text-display-md leading-[1.15]">
                Andréia Sarzi, biomédica
              </h2>
              <p className="font-sans text-vinho/65 text-base leading-relaxed">
                Andréia Sarzi é biomédica esteta, com atuação em estética avançada. Une conhecimento técnico-científico com um olhar apurado para a beleza natural. Cada procedimento é realizado com precisão e sensibilidade, sempre respeitando as características únicas de cada paciente.
              </p>
              <p className="font-sans text-vinho/65 text-base leading-relaxed">
                Sua abordagem humanizada transforma cada consulta em uma experiência acolhedora, onde o objetivo é sempre realçar a sua beleza natural — nunca modificar quem você é.
              </p>
            </div>

            <blockquote className="border-l-2 border-gold pl-5">
              <p className="font-script text-vinho text-2xl leading-snug">
                &ldquo;Meu propósito é fazer você se sentir mais você mesma.&rdquo;
              </p>
              <footer className="font-sans text-xs text-vinho/50 mt-2">— Andréia Sarzi</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-vinho">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="h-px w-12 bg-gold-gradient opacity-60" aria-hidden="true" />
          <h2 className="font-display text-nude text-display-md md:text-display-lg leading-[1.15]">
            Nossa filosofia
          </h2>
          <p className="font-script text-gold text-2xl sm:text-3xl">
            estética que começa por dentro
          </p>
          <p className="font-sans text-nude/70 text-base leading-relaxed">
            Acreditamos que a beleza autêntica é aquela que nasce da relação saudável que você tem consigo mesma. Por isso, cada protocolo da Uniko Clinic é desenvolvido para potencializar o que é único em você, com naturalidade, segurança e cuidado.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionTitle title="Nossos diferenciais" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map(d => (
              <DiferencialCard key={d.id} diferencial={d} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Venha nos conhecer"
        subtitle="Agende sua avaliação e sinta a diferença do cuidado personalizado."
        ctaLabel="Agendar Avaliação"
      />
    </>
  )
}
