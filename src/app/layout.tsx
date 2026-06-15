import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieBanner from '@/components/layout/CookieBanner'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import GoogleTagManager from '@/components/analytics/GoogleTagManager'
import MetaPixel from '@/components/analytics/MetaPixel'
import { clinica } from '@/lib/config'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(clinica.siteUrl),
  title: {
    default: 'Uniko Clinic | Estética avançada em São Paulo',
    template: '%s | Uniko Clinic',
  },
  description:
    'Clínica de estética avançada em São Paulo, com avaliação gratuita, planejamento individual, tecnologias estéticas e foco em naturalidade e segurança.',
  keywords: [
    'clínica de estética São Paulo',
    'harmonização facial',
    'toxina botulínica',
    'preenchimento labial',
    'bioestimuladores de colágeno',
    'depilação a laser',
    'Andréia Sarzi',
    'Uniko Clinic',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Uniko Clinic',
    url: clinica.siteUrl,
    title: 'Uniko Clinic | Estética avançada em São Paulo',
    description:
      'Clínica de estética avançada em São Paulo, com avaliação gratuita, planejamento individual, tecnologias estéticas e foco em naturalidade e segurança.',
    // TODO: adicionar imagem OG real quando disponível
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Uniko Clinic' }],
  },
  twitter: {
    card: 'summary',
    title: 'Uniko Clinic | Estética avançada em São Paulo',
    description:
      'Clínica de estética avançada em São Paulo, com avaliação gratuita, planejamento individual, tecnologias estéticas e foco em naturalidade e segurança.',
    // TODO: adicionar imagem Twitter card quando disponível
    // images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HealthAndBeautyBusiness', 'Organization'],
      '@id': `${clinica.siteUrl}/#organization`,
      name: clinica.nomeCompleto,
      url: clinica.siteUrl,
      telephone: `+${clinica.whatsapp}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Boa Esperança, 229',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:00',
        },
      ],
      sameAs: [clinica.instagram],
    },
    {
      '@type': 'Person',
      name: 'Andréia Sarzi',
      jobTitle: 'Biomédica Esteta',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'CRBM',
        value: '40185',
      },
      worksFor: { '@id': `${clinica.siteUrl}/#organization` },
      sameAs: [clinica.instagram],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="bg-nude text-vinho min-h-full flex flex-col font-sans antialiased">
        <GoogleTagManager />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  )
}
