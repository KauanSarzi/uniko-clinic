import type { MetadataRoute } from 'next'
import { tratamentos } from '@/data/tratamentos'
import { clinica } from '@/lib/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = clinica.siteUrl

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/tratamentos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/resultados`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/agendamento`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const treatmentRoutes: MetadataRoute.Sitemap = tratamentos.map((t) => ({
    url: `${base}/tratamentos/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...staticRoutes, ...treatmentRoutes]
}
