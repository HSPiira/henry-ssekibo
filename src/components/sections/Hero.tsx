import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { siteConfig } from '~/config/site'
import { headlineMetrics } from '~/data/metrics'
import { Metric } from '~/components/ui/Metric'

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-14 md:pb-16 overflow-hidden"
    >
      {/* Six-column hairline grid: the structure the layout sits on, shown. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="shell h-full">
          <div className="h-full hairline-grid" />
        </div>
      </div>

      <div className="shell relative">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 md:mb-12">
          <span className="label">{siteConfig.location}</span>
          <span aria-hidden className="w-8 border-t border-rule-strong" />
          <span className="label">{siteConfig.company}</span>
        </div>

        <h1 className="display max-w-[16ch]">
          {siteConfig.name}
          <span className="text-accent">.</span>
        </h1>

        <div className="grid gap-8 md:gap-10 md:grid-cols-12 mt-8 md:mt-12">
          <p className="md:col-span-5 text-[1.0625rem] leading-relaxed font-medium">
            {siteConfig.role},
            <br />
            {siteConfig.secondaryRole}.
          </p>

          <div className="md:col-span-6 md:col-start-7">
            <p className="lede max-w-[46ch]">
              I build the systems insurance operations run on. Deadline
              automation across 3,000+ active policies, regulatory reporting to
              the IRA, and the AI adoption programme now rolling out across the
              business.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/" hash="work" className="btn btn-solid">
                Selected work
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>

              {siteConfig.resumeUrl ? (
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="btn btn-outline"
                >
                  <ArrowDownToLine className="w-4 h-4" aria-hidden />
                  Download résumé
                </a>
              ) : (
                <Link to="/" hash="contact" className="btn btn-outline">
                  Get in touch
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="rule-top mt-14 md:mt-20 pt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {headlineMetrics.map((metric) => (
            <Metric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              source={metric.source}
              size="lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
