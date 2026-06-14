import type { Metadata } from 'next'
import SectionTitle from '@/components/ui/SectionTitle'
import MapEmbed from '@/components/sections/MapEmbed'
import ContatoForm from '@/components/ui/ContatoForm'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { faqAgendamento } from '@/data/faq'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { clinica } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Agendamento',
  description:
    'Agende sua avaliação na Uniko Clinic. Atendimento em São Paulo. Entre em contato pelo WhatsApp ou formulário.',
  alternates: { canonical: '/agendamento' },
}

export default function AgendamentoPage() {
  const whatsAppUrl = buildWhatsAppUrl()

  return (
    <>
      {/* Hero */}
      <div className="bg-vinho py-20 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-4">
          <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
          <h1 className="font-display text-nude text-display-lg md:text-display-xl leading-[1.1]">
            Agende sua avaliação
          </h1>
          <p className="font-sans text-nude/70 text-lg">
            O primeiro passo para a sua melhor versão começa aqui.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* CTA WhatsApp (destaque principal) */}
          <div className="flex flex-col gap-10">
            {/* WhatsApp */}
            <div className="flex flex-col gap-5 p-6 sm:p-8 rounded-card bg-vinho">
              <div className="h-px w-12 bg-gold-gradient opacity-60" aria-hidden="true" />
              <h2 className="font-display text-nude text-display-md leading-[1.15]">
                Fale pelo WhatsApp
              </h2>
              <p className="font-sans text-nude/70 text-sm leading-relaxed">
                A forma mais rápida de agendar. Clique e envie uma mensagem — respondemos em breve.
              </p>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-pill bg-[#25D366] text-white font-sans font-semibold hover:shadow-glow hover:scale-105 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Iniciar conversa no WhatsApp
              </a>
              <p className="font-sans text-sm text-nude/55 text-center">
                WhatsApp: <span className="text-nude/80">(11) 97800-8688</span>
              </p>
            </div>

            {/* Horários */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-vinho text-xl">Horários de atendimento</h3>
              <div className="flex flex-col gap-2">
                {clinica.horarios.map(item => (
                  <div key={item.dia} className="flex justify-between items-center py-2 border-b border-vinho/10">
                    <span className="font-sans text-sm text-vinho/60">{item.dia}</span>
                    <span className="font-sans text-sm font-medium text-vinho">{item.horario}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-vinho text-xl">Como chegar</h3>
              <MapEmbed
                embedUrl={clinica.googleMapsEmbedUrl || undefined}
                address={clinica.endereco}
              />
            </div>
          </div>

          {/* Formulário */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
              <h2 className="font-display text-vinho text-display-md leading-[1.15]">
                Formulário de contato
              </h2>
              <p className="font-sans text-vinho/60 text-sm leading-relaxed">
                Prefere preencher um formulário? Deixe seus dados e entraremos em contato.
              </p>
            </div>
            <ContatoForm />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 flex flex-col gap-8">
          <SectionTitle
            title="Dúvidas frequentes sobre agendamento"
            align="left"
          />
          <div className="max-w-3xl">
            <FAQAccordion items={faqAgendamento} />
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqAgendamento.map(item => ({
              '@type': 'Question',
              name: item.pergunta,
              acceptedAnswer: { '@type': 'Answer', text: item.resposta },
            })),
          }),
        }}
      />
    </>
  )
}
