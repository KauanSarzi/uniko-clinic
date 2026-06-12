import { clinica } from './config'

export function buildWhatsAppUrl(tratamento?: string): string {
  const mensagem = tratamento
    ? `Olá, vim pelo site da Uniko Clinic e gostaria de saber mais sobre ${tratamento}.`
    : 'Olá, vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita.'
  return `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

const mensagensPorPagina: Record<string, string> = {
  '/': 'Olá, vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita.',
  '/tratamentos': 'Olá, vim pelo site da Uniko Clinic e gostaria de saber qual tratamento é indicado para mim.',
  '/sobre': 'Olá, vim pelo site da Uniko Clinic e gostaria de conhecer melhor os tratamentos e agendar uma avaliação gratuita.',
  '/resultados': 'Olá, vim pelo site da Uniko Clinic, vi os resultados e gostaria de entender qual tratamento faz sentido para mim.',
  '/agendamento': 'Olá, vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita.',
}

const mensagemPadrao = 'Olá, vim pelo site da Uniko Clinic e gostaria de agendar minha avaliação gratuita.'

export function buildWhatsAppUrlForPage(pathname: string, nomeTratamento?: string): string {
  let mensagem: string

  if (pathname.startsWith('/tratamentos/') && nomeTratamento) {
    mensagem = `Olá, vim pelo site da Uniko Clinic e gostaria de saber se o tratamento ${nomeTratamento} é indicado para o meu caso.`
  } else {
    mensagem = mensagensPorPagina[pathname] ?? mensagemPadrao
  }

  return `https://wa.me/${clinica.whatsapp}?text=${encodeURIComponent(mensagem)}`
}
