'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import Link from 'next/link'
import { tratamentos } from '@/data/tratamentos'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContatoForm() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    tratamento: '',
    turno: '',
    mensagem: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        setStatus('error')
        return
      }

      trackEvent('form_submit', {
        tratamento: form.tratamento || 'sem-tratamento',
        turno: form.turno || 'sem-preferencia',
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full font-sans text-sm text-vinho bg-white border border-vinho/15 rounded-card px-4 py-3 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-vinho/30 transition-colors disabled:opacity-50'
  const labelClass = 'font-sans text-xs font-medium text-vinho/60 uppercase tracking-wider mb-1.5 block'
  const isSending = status === 'sending'

  if (status === 'success') {
    return (
      <div className="rounded-card border border-gold/30 bg-gold/5 p-8 flex flex-col items-center gap-3 text-center">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display text-vinho text-xl">Solicitação enviada!</p>
        <p className="font-sans text-sm text-vinho/65 leading-relaxed">
          Nossa equipe entrará em contato pelo telefone informado.
        </p>
      </div>
    )
  }

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
            disabled={isSending}
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
            disabled={isSending}
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
            disabled={isSending}
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
            disabled={isSending}
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
          disabled={isSending}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Erro */}
      {status === 'error' && (
        <p className="font-sans text-sm text-red-700 bg-red-50 border border-red-200 rounded-card px-4 py-3 leading-relaxed">
          Não foi possível enviar sua solicitação agora. Tente novamente ou{' '}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-red-900 transition-colors"
          >
            fale conosco pelo WhatsApp
          </a>.
        </p>
      )}

      {/* LGPD */}
      <p className="font-sans text-xs text-vinho/40 leading-relaxed">
        Ao enviar, você concorda que a Uniko Clinic entre em contato pelos dados informados, conforme nossa{' '}
        <Link href="/politica-de-privacidade" className="underline hover:text-gold transition-colors">
          Política de Privacidade
        </Link>.
      </p>

      <button
        type="submit"
        disabled={isSending}
        className="w-full sm:w-auto sm:self-start flex items-center justify-center gap-2 px-8 py-4 rounded-pill bg-vinho text-nude font-sans text-sm font-semibold hover:bg-vinho-light transition-colors shadow-card disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSending ? 'Enviando...' : 'Enviar solicitação'}
      </button>
    </form>
  )
}
