import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { siteConfig } from '~/config/site'
import { ThemeToggle } from './ThemeToggle'

function hashOf(href: string) {
  return href.replace('/#', '')
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent the page scrolling behind the open mobile panel.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-md' : ''
      }`}
    >
      <div className="shell">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="font-mono text-sm font-medium tracking-[0.18em] text-ink"
          >
            {siteConfig.initials}
            <span className="text-accent">.</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to="/"
                    hash={hashOf(item.href)}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                download
                className="btn btn-outline hidden sm:inline-flex !py-2 !px-3.5 text-[0.8125rem]"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" aria-hidden />
                Résumé
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="btn-icon md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? (
                <X className="w-4 h-4" aria-hidden />
              ) : (
                <Menu className="w-4 h-4" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="md:hidden bg-canvas border-b border-rule"
      >
        <div className="shell py-6">
          <ul className="flex flex-col">
            {siteConfig.nav.map((item, i) => (
              <li key={item.href} className="rule-bottom last:border-b-0">
                <Link
                  to="/"
                  hash={hashOf(item.href)}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-ink"
                >
                  <span className="label nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              download
              className="btn btn-solid w-full mt-6"
            >
              <ArrowDownToLine className="w-4 h-4" aria-hidden />
              Download résumé
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
