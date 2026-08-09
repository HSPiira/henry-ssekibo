import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  children: ReactNode
  /** Tints the section background to separate it from its neighbours. */
  tone?: 'canvas' | 'surface'
  className?: string
}

export function Section({
  id,
  children,
  tone = 'canvas',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`rule-top py-20 md:py-28 ${
        tone === 'surface' ? 'bg-surface' : 'bg-canvas'
      } ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  /** Mono index, e.g. "02". */
  index: string
  label: string
  title: string
  description?: string
  action?: ReactNode
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="label-caps nums">{index}</span>
        <span className="label-caps">{label}</span>
        <span aria-hidden className="flex-1 border-t border-rule" />
      </div>

      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <h2 className="heading md:col-span-5">{title}</h2>
        {(description || action) && (
          <div className="md:col-span-6 md:col-start-7 flex flex-col items-start gap-6">
            {description && (
              <p className="prose-body text-[1.0625rem] max-w-prose">
                {description}
              </p>
            )}
            {action}
          </div>
        )}
      </div>
    </Reveal>
  )
}
