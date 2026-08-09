/**
 * Single source of truth for identity, contact and social links.
 *
 * Anything that appears in more than one place (nav, footer, contact section,
 * structured data, meta tags) reads from here so it can never drift.
 */

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  handle: string
}

export const siteConfig = {
  name: 'Henry Ssekibo',
  initials: 'HS',
  // Order follows the CV header.
  role: 'Digital Transformation Specialist',
  secondaryRole: 'Senior Software Engineer',
  company: 'Minet Uganda',
  location: 'Kampala, Uganda',

  /**
   * Canonical origin. Update once the site is deployed so canonical URLs and
   * og:image resolve to absolute paths.
   */
  url: 'https://henryssekibo.com',

  description:
    'Digital Transformation Specialist and Senior Software Engineer in Kampala, Uganda. 6+ years delivering production systems across insurance, healthcare and financial services: .NET backends, Azure infrastructure, and Power BI reporting that reaches the C-suite.',

  email: 'sekiboh@gmail.com',
  phone: '+256 703 442 862',

  /**
   * TODO: drop the PDF into `public/` and set this path, e.g. '/henry-ssekibo-cv.pdf'.
   * While it is null the résumé buttons are hidden rather than shipping a dead link.
   */
  resumeUrl: null as string | null,

  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/hspiira',
      handle: 'hspiira',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henry-ssekibo-17014490',
      handle: 'henry-ssekibo-17014490',
    },
  ] satisfies SocialLink[],

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ] satisfies NavItem[],
} as const

export const currentYear = new Date().getFullYear()
