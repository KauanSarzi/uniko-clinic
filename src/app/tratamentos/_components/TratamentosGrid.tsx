'use client'

import { useState } from 'react'
import { tratamentos } from '@/data/tratamentos'
import TratamentoCard from '@/components/cards/TratamentoCard'

const categorias = [
  { valor: 'todos', label: 'Todos' },
  { valor: 'rosto', label: 'Rosto' },
  { valor: 'pele', label: 'Pele' },
  { valor: 'corpo', label: 'Corpo' },
]

export default function TratamentosGrid() {
  const [categoria, setCategoria] = useState('todos')

  const filtrados =
    categoria === 'todos' ? tratamentos : tratamentos.filter(t => t.categoria === categoria)

  return (
    <div className="flex flex-col gap-10">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {categorias.map(cat => (
          <button
            key={cat.valor}
            onClick={() => setCategoria(cat.valor)}
            className={`px-5 py-2 rounded-pill font-sans text-sm font-medium transition-colors ${
              categoria === cat.valor
                ? 'bg-vinho text-nude shadow-card'
                : 'bg-nude-dark text-vinho hover:bg-vinho/10'
            }`}
            aria-pressed={categoria === cat.valor}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtrados.map(t => (
          <TratamentoCard key={t.slug} tratamento={t} />
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className="font-sans text-center text-vinho/40 py-16">
          Nenhum tratamento encontrado para esta categoria.
        </p>
      )}
    </div>
  )
}
