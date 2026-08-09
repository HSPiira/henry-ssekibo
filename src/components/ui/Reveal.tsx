import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger in milliseconds. */
  delay?: number
  as?: ElementType
}

/**
 * Reveals its children once, when they first scroll into view.
 *
 * Visibility is React state rather than an imperative `classList.add`. Mixing
 * the two loses the class on the next render, because React owns `className`
 * and rewrites it from props.
 *
 * The hidden state itself lives in CSS behind an `html.js` guard, so
 * server-rendered markup is visible by default: if JavaScript fails or the
 * observer never fires, nothing can be stranded at opacity 0.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return

    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${className} ${visible ? 'is-visible' : ''}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
