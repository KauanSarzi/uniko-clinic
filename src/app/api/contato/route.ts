import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, telefone, tratamento, turno, mensagem } = body

    if (!nome?.trim() || !telefone?.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Nome e telefone são obrigatórios.' },
        { status: 400 }
      )
    }

    // TODO: integrar com provedor de e-mail para receber os leads.
    //   Opções recomendadas:
    //   - Resend (resend.com) — simples, SDK TypeScript nativo
    //   - SendGrid — robusto, plano gratuito disponível
    //   - Nodemailer + SMTP (Gmail, Titan, etc.)
    //   Instalar o SDK escolhido e substituir o console.log abaixo pela chamada de envio.
    //
    // TODO: integrar com CRM ou planilha para centralizar os leads.
    //   Opções:
    //   - Google Sheets via API (googleapis)
    //   - HubSpot Free CRM (API REST)
    //   - Notion Database (API REST)
    //
    // Por enquanto, o lead é registrado apenas no log do servidor (visível no Amplify → Logs).
    console.log('[Uniko Clinic] Novo contato recebido:', {
      nome: nome.trim(),
      telefone: telefone.trim(),
      tratamento: tratamento || '—',
      turno: turno || '—',
      mensagem: mensagem?.trim() || '—',
      recebidoEm: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
