interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionTitle({ title, subtitle, align = 'center', light = false }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {/* Linha decorativa dourada */}
      <div
        className={`h-px w-12 bg-gold-gradient ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      <h2
        className={`font-display text-display-md md:text-display-lg leading-[1.15] ${
          light ? 'text-nude' : 'text-vinho'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-base md:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-nude/75' : 'text-vinho/65'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
