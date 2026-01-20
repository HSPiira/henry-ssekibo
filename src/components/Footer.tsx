import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { icon: Github, name: 'GitHub', url: 'https://github.com/henry-ssekibo' },
  { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/henry-ssekibo' },
  { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/henry_ssekibo' },
  { icon: Mail, name: 'Email', url: 'mailto:sekiboh@gmail.com' }
]

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#" className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              HS<span className="text-zinc-400">.</span>
            </a>
            <p className="mt-4 text-body max-w-sm">
              IT Support & Digital Transformation Specialist. Building scalable systems and enabling digital transformation in Africa.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:sekiboh@gmail.com"
                className="block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                sekiboh@gmail.com
              </a>
              <a
                href="tel:+256703442862"
                className="block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                +256 703 442 862
              </a>
              <p className="text-sm text-zinc-500">
                Kampala, Uganda
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {currentYear} Henry Ssekibo. All rights reserved.
            </p>
            <p className="text-sm text-zinc-500">
              Built with TanStack Start
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
