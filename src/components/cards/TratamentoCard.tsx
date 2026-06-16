import Link from 'next/link'
import { Tratamento } from '@/types'

interface TratamentoCardProps {
  tratamento: Tratamento
}

export default function TratamentoCard({ tratamento }: TratamentoCardProps) {
  return (
    <Link
      href={`/tratamentos/${tratamento.slug}`}
      className="group flex flex-col rounded-card overflow-hidden bg-nude shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      aria-label={`Ver tratamento: ${tratamento.nome}`}
    >
      {/* Imagem */}
      <div className="relative aspect-[4/3] bg-vinho/5 overflow-hidden">
        {/* Placeholder visual — substituir por Image quando houver fotos reais */}
        <div className="absolute inset-0 bg-gradient-to-br from-vinho/80 to-vinho-dark flex items-center justify-center">
          <span className="font-script text-gold text-2xl opacity-40">
            {tratamento.nome.split(' ')[0]}
          </span>
        </div>
        {/* Badge categoria */}
        <div className="absolute top-3 left-3">
          <span
            className={`font-sans text-xs font-medium px-2.5 py-1 rounded-pill backdrop-blur-sm bg-nude/90 text-vinho`}
          >
            {tratamento.categoriaLabel}
          </span>
        </div>
        {/* Seta hover */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <svg className="w-4 h-4 text-vinho" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-vinho text-xl leading-snug group-hover:text-gold-dark transition-colors">
          {tratamento.nome}
        </h3>
        <p className="font-sans text-sm text-vinho/60 leading-relaxed line-clamp-2 flex-1">
          {tratamento.descricao}
        </p>
        <span className="font-sans text-sm text-gold font-medium mt-2 flex items-center gap-1 min-w-0">
          <span className="truncate">Saiba mais sobre {tratamento.nome}</span>
          <svg className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
