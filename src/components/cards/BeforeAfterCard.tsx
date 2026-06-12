interface BeforeAfterCardProps {
  tratamento: string
  imagemAntes: string
  imagemDepois: string
  altAntes?: string
  altDepois?: string
}

export default function BeforeAfterCard({
  tratamento,
  imagemAntes,
  imagemDepois,
  altAntes,
  altDepois,
}: BeforeAfterCardProps) {
  return (
    <article className="flex flex-col rounded-card overflow-hidden shadow-card bg-white">
      {/* Imagens */}
      <div className="grid grid-cols-2 gap-0.5 bg-nude-dark">
        {/* Antes */}
        <div className="relative aspect-[3/4] bg-vinho/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-vinho/60 to-transparent" aria-hidden="true" />
          <span className="absolute top-3 left-3 font-sans text-xs font-semibold text-white tracking-widest uppercase bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
            Antes
          </span>
          {/* Substituir por Image component quando houver fotos */}
          <div className="absolute inset-0 bg-vinho/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-vinho/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        </div>

        {/* Depois */}
        <div className="relative aspect-[3/4] bg-vinho/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/30 to-transparent" aria-hidden="true" />
          <span className="absolute top-3 left-3 font-sans text-xs font-semibold text-vinho tracking-widest uppercase bg-gold/80 px-2 py-0.5 rounded-full">
            Depois
          </span>
          <div className="absolute inset-0 bg-gold/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-gold/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="p-4 flex flex-col gap-1">
        <p className="font-sans text-sm font-medium text-vinho">{tratamento}</p>
        <p className="font-sans text-xs text-vinho/40 leading-relaxed">
          Resultados individuais e podem variar. Imagem com autorização de divulgação. Procedimento realizado por biomédica habilitada.
        </p>
      </div>
    </article>
  )
}
