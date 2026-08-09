import { Link } from '@tanstack/react-router'
import { siteConfig, currentYear } from '~/config/site'

export function Footer() {
  return (
    <footer className="rule-top bg-canvas">
      <div className="shell py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-sm tracking-[0.18em] text-ink mb-3">
              {siteConfig.initials}
              <span className="text-accent">.</span>
            </p>
            <p className="prose-body text-sm max-w-xs">
              {siteConfig.role}, {siteConfig.secondaryRole}. Based in{' '}
              {siteConfig.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="label mb-4">Sections</p>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to="/"
                    hash={item.href.replace('/#', '')}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {social.label}
                    <span className="text-faint"> / {social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-top mt-12 pt-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="label">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="label">Built in {siteConfig.location}</p>
        </div>
      </div>
    </footer>
  )
}
