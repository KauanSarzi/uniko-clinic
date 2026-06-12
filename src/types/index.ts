export interface FAQ {
  pergunta: string
  resposta: string
}

export interface Tratamento {
  slug: string
  nome: string
  categoria: 'rosto' | 'corpo' | 'pele'
  categoriaLabel: string
  descricao: string
  descricaoLonga: string
  imagem: string
  indicacao: string[]
  beneficios: string[]
  comoFunciona: string
  duracaoECuidados: string
  quandoFazSentido?: string[]
  oQueNaoFaz?: string[]
  faq: FAQ[]
  destaque: boolean
}

export interface Depoimento {
  id: string
  nome: string
  foto?: string
  procedimento: string
  texto: string
}

export interface Diferencial {
  id: string
  titulo: string
  descricao: string
  icone: string
}
