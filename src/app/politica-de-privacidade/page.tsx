import type { Metadata } from 'next'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da Uniko Clinic — como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
}

export default function PoliticaDePrivacidadePage() {
  const whatsAppUrl = buildWhatsAppUrl()
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col gap-3 mb-12">
        <div className="h-px w-12 bg-gold-gradient" aria-hidden="true" />
        <h1 className="font-display text-vinho text-display-md md:text-display-lg leading-[1.15]">
          Política de Privacidade
        </h1>
        <p className="font-sans text-sm text-vinho/50">
          Última atualização: junho de 2025
        </p>
      </div>

      <div className="max-w-none font-sans text-vinho/70 leading-relaxed space-y-8">

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">1. Quem somos</h2>
          <p>
            A <strong className="text-vinho">Uniko Clinic by Andréia Sarzi</strong> é uma clínica de estética localizada em São Paulo — SP. Somos responsáveis pelo tratamento dos dados pessoais coletados por meio deste site e dos nossos canais de atendimento.
          </p>
          <p className="mt-2">
            Para dúvidas sobre esta política ou sobre o tratamento dos seus dados,{' '}
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-vinho font-medium underline hover:text-gold transition-colors">
              entre em contato pelo WhatsApp oficial da Uniko Clinic
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">2. Dados coletados</h2>
          <p>Coletamos os seguintes dados pessoais:</p>
          <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
            <li>Dados fornecidos voluntariamente: nome, telefone/WhatsApp e mensagem preenchidos no formulário de contato.</li>
            <li>Dados de navegação: endereço IP, páginas visitadas, duração da visita, por meio de cookies analíticos (Google Analytics e Google Tag Manager).</li>
            <li>Dados de comportamento: interações com anúncios, via Meta Pixel (Facebook/Instagram).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">3. Finalidade do tratamento</h2>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Responder a solicitações de agendamento e dúvidas enviadas pelo formulário ou WhatsApp.</li>
            <li>Mensurar e melhorar a experiência de navegação no site (analytics).</li>
            <li>Veicular publicidade direcionada nas plataformas Meta (Facebook e Instagram).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">4. Base legal</h2>
          <p>O tratamento dos seus dados é baseado nas seguintes hipóteses legais previstas pela LGPD (Lei 13.709/2018):</p>
          <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
            <li><strong className="text-vinho">Consentimento</strong> — para cookies analíticos e de marketing.</li>
            <li><strong className="text-vinho">Legítimo interesse</strong> — para responder a contatos e solicitações de agendamento.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">5. Compartilhamento com terceiros</h2>
          <p>Seus dados podem ser compartilhados com:</p>
          <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
            <li><strong className="text-vinho">Google LLC</strong> (Google Analytics, Google Tag Manager) — para análise de tráfego.</li>
            <li><strong className="text-vinho">Meta Platforms, Inc.</strong> (Meta Pixel) — para mensuração de campanhas publicitárias.</li>
          </ul>
          <p className="mt-2">
            Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais além dos descritos acima.
          </p>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">6. Direitos do titular</h2>
          <p>Conforme a LGPD, você tem direito a:</p>
          <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar seus dados pessoais que armazenamos.</li>
            <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Revogar o consentimento a qualquer momento.</li>
            <li>Solicitar a portabilidade dos dados.</li>
          </ul>
          <p className="mt-2">
            Para exercer seus direitos,{' '}
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-vinho font-medium underline hover:text-gold transition-colors">
              entre em contato pelo WhatsApp oficial da Uniko Clinic
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">7. Cookies e rastreamento</h2>
          <p className="mb-3">
            Utilizamos dois tipos de cookies:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1 mb-3">
            <li>
              <strong className="text-vinho">Cookies essenciais:</strong> necessários para o funcionamento básico do site (navegação, segurança). Não requerem consentimento e não coletam dados pessoais identificáveis.
            </li>
            <li>
              <strong className="text-vinho">Cookies não essenciais:</strong> ferramentas de análise de tráfego e publicidade digital. Só são ativados com sua autorização explícita.
            </li>
          </ul>
          <p className="mb-3">
            Podemos utilizar ferramentas de análise e publicidade digital, quando configuradas e autorizadas, para compreender o uso do site e melhorar nossa comunicação. Essas ferramentas podem incluir Google Analytics, Google Tag Manager e Meta Pixel (Facebook/Instagram).
          </p>
          <p className="mb-3">
            <strong className="text-vinho">Como gerenciar sua escolha:</strong> ao acessar o site pela primeira vez, você verá um aviso de cookies no rodapé da página. Você pode clicar em <em>Aceitar</em> para permitir cookies não essenciais, ou <em>Recusar</em> para bloqueá-los. Sua preferência é salva localmente no seu navegador (localStorage) com a chave <code className="text-xs bg-vinho/5 px-1 rounded">uniko_cookie_consent</code> e não replicamos essa informação para nossos servidores.
          </p>
          <p>
            Você também pode gerenciar ou limpar cookies a qualquer momento nas configurações do seu navegador. Ao limpar os dados do navegador, o aviso de cookies será exibido novamente na próxima visita.
          </p>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">8. Retenção e exclusão de dados</h2>
          <p>
            Os dados de contato são mantidos pelo tempo necessário para o atendimento da solicitação. Os dados analíticos são retidos conforme as políticas dos respectivos prestadores de serviço (Google, Meta). Você pode solicitar a exclusão a qualquer momento.
          </p>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">9. Contato — Encarregado de Dados (DPO)</h2>
          <p>
            Para questões relacionadas a esta Política de Privacidade ou aos seus dados pessoais,{' '}
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-vinho font-medium underline hover:text-gold transition-colors">
              entre em contato pelo WhatsApp oficial da Uniko Clinic
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-vinho text-xl mb-3">10. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos revisitá-la regularmente. A data da última atualização está indicada no início deste documento.
          </p>
        </section>
      </div>
    </div>
  )
}
