import { siteConfig } from '~/config/site'

interface SeoInput {
  title: string
  description?: string
  keywords?: string
  /** Absolute or root-relative path. Resolved against siteConfig.url. */
  image?: string
}

const DEFAULT_IMAGE = '/og.png'

function absolute(path: string) {
  if (path.startsWith('http')) return path
  return `${siteConfig.url.replace(/\/$/, '')}${path}`
}

export const seo = ({ title, description, keywords, image }: SeoInput) => {
  const url = absolute(image ?? DEFAULT_IMAGE)

  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: siteConfig.name },

    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: siteConfig.name },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: url },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: url },
  ].filter((tag) => 'title' in tag || tag.content)
}
