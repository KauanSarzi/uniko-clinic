import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, telefone, email, tratamento, turno, mensagem } = body

    if (!nome?.trim() || !telefone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Nome, telefone e e-mail são obrigatórios.' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: 'Formato de e-mail inválido.' },
        { status: 400 }
      )
    }

    const leadData = {
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
      tratamento: tratamento || '—',
      turno: turno || '—',
      mensagem: mensagem?.trim() || '—',
      recebidoEm: new Date().toISOString(),
    }

    console.log('[Uniko Clinic] Novo contato recebido:', leadData)

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.LEADS_TO_EMAIL
    const fromEmail = process.env.LEADS_FROM_EMAIL

    if (!apiKey || !toEmail || !fromEmail) {
      console.error(
        '[Uniko Clinic] Variáveis de ambiente não configuradas: RESEND_API_KEY, LEADS_TO_EMAIL, LEADS_FROM_EMAIL'
      )
      return NextResponse.json(
        { ok: false, error: 'Serviço de envio não configurado. Tente pelo WhatsApp.' },
        { status: 500 }
      )
    }

    const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:600px;margin:0 auto;padding:24px;">
  <h2 style="color:#44020D;font-family:Georgia,serif;margin:0 0 20px;">Novo lead pelo site — Uniko Clinic</h2>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;width:150px;border-bottom:1px solid #e8ddd5;">Nome</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${escapeHtml(leadData.nome)}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;border-bottom:1px solid #e8ddd5;">Telefone</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${escapeHtml(leadData.telefone)}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;border-bottom:1px solid #e8ddd5;">E-mail</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${escapeHtml(leadData.email)}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;border-bottom:1px solid #e8ddd5;">Tratamento</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${escapeHtml(leadData.tratamento)}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;border-bottom:1px solid #e8ddd5;">Turno</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${escapeHtml(leadData.turno)}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;border-bottom:1px solid #e8ddd5;">Mensagem</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${escapeHtml(leadData.mensagem)}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;border-bottom:1px solid #e8ddd5;">Data/hora</td>
      <td style="padding:10px 14px;border-bottom:1px solid #e8ddd5;">${now} (Brasília)</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;background:#f5f0ec;font-weight:bold;">Origem</td>
      <td style="padding:10px 14px;">Site Uniko Clinic</td>
    </tr>
  </table>
</body>
</html>
`

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'Novo lead pelo site — Uniko Clinic',
      html,
    })

    if (error) {
      console.error('[Uniko Clinic] Erro ao enviar e-mail via Resend:', error)
      return NextResponse.json(
        { ok: false, error: 'Não foi possível enviar. Tente pelo WhatsApp.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
