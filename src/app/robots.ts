import type { MetadataRoute } from 'next'
import { clinica } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${clinica.siteUrl}/sitemap.xml`,
  }
}
