import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://ai-advisor.th/sitemap.xml',
    host: 'https://ai-advisor.th',
  }
}
