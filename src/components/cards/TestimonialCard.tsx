import { Depoimento } from '@/types'

interface TestimonialCardProps {
  depoimento: Depoimento
}

export default function TestimonialCard({ depoimento }: TestimonialCardProps) {
  const initials = depoimento.nome
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')

  return (
    <article className="flex flex-col gap-5 p-6 rounded-card bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300">
      {/* Estrelas */}
      <div className="flex gap-1" aria-label="Avaliação 5 estrelas">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Texto */}
      <blockquote className="font-sans text-sm text-vinho/70 leading-relaxed flex-1 italic">
        &ldquo;{depoimento.texto}&rdquo;
      </blockquote>

      {/* Autora */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0" aria-hidden="true">
          <span className="font-sans text-xs font-semibold text-vinho">{initials}</span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-vinho">{depoimento.nome}</p>
          <p className="font-sans text-xs text-gold">{depoimento.procedimento}</p>
        </div>
      </div>
    </article>
  )
}
