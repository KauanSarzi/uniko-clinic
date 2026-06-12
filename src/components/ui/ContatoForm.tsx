'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import { tratamentos } from '@/data/tratamentos'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { trackEvent } from '@/lib/analytics'

export default function ContatoForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    tratamento: '',
    turno: '',
    mensagem: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    trackEvent('form_submit', {
      tratamento: form.tratamento || 'sem-tratamento',
      turno: form.turno || 'sem-preferencia',
    })
    const mensagem =
      `Olá, meu nome é ${form.nome}.` +
      (form.tratamento ? ` Tenho interesse em ${form.tratamento}.` : '') +
      (form.turno ? ` Prefiro atendimento no período ${form.turno}.` : '') +
      (form.mensagem ? ` ${form.mensagem}` : '') +
      ` Telefone: ${form.telefone}.`

    const url = buildWhatsAppUrl(form.tratamento || undefined)
    const customUrl = url.replace(
      encodeURIComponent(
        form.tratamento
          ? `Olá, vim pelo site da Uniko Clinic e gostaria de saber mais sobre ${form.tratamento}.`
          : 'Olá, vim pelo site da Uniko Clinic e gostaria de agendar uma avaliação.'
      ),
      encodeURIComponent(mensagem)
    )
    window.open(customUrl, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full font-sans text-sm text-vinho bg-white border border-vinho/15 rounded-card px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-vinho/30 transition-colors'
  const labelClass = 'font-sans text-xs font-medium text-vinho/60 uppercase tracking-wider mb-1.5 block'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className={labelClass}>Nome completo *</label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className={labelClass}>WhatsApp / Telefone *</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            placeholder="(11) 9 0000-0000"
            value={form.telefone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Tratamento */}
        <div>
          <label htmlFor="tratamento" className={labelClass}>Tratamento de interesse</label>
          <select
            id="tratamento"
            name="tratamento"
            value={form.tratamento}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Selecione um tratamento</option>
            {tratamentos.map(t => (
              <option key={t.slug} value={t.nome}>{t.nome}</option>
            ))}
            <option value="Não sei ainda">Não sei ainda — quero uma avaliação</option>
          </select>
        </div>
        {/* Turno */}
        <div>
          <label htmlFor="turno" className={labelClass}>Turno preferido</label>
          <select
            id="turno"
            name="turno"
            value={form.turno}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Sem preferência</option>
            <option value="manhã">Manhã</option>
            <option value="tarde">Tarde</option>
          </select>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className={labelClass}>Mensagem (opcional)</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte um pouco mais sobre o que você busca..."
          value={form.mensagem}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto sm:self-start flex items-center justify-center gap-2 px-8 py-4 rounded-pill bg-vinho text-nude font-sans text-sm font-semibold hover:bg-vinho-light transition-colors shadow-card"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enviar pelo WhatsApp
      </button>

      <p className="font-sans text-xs text-vinho/40">
        Ao enviar, você será redirecionada para o WhatsApp para finalizar o agendamento.
      </p>
    </form>
  )
}
