import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight, Lock } from 'lucide-react'
import { getProjectBySlug, projects } from '~/data/projects'
import { NotFound } from '~/components/NotFound'
import { Metric } from '~/components/ui/Metric'
import { NumberedList } from '~/components/ui/NumberedList'
import { TagList } from '~/components/ui/TagList'
import { Reveal } from '~/components/ui/Reveal'
import { siteConfig } from '~/config/site'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: seo({
            title: `${loaderData.title} | ${siteConfig.name}`,
            description: loaderData.summary,
            image: loaderData.image,
          }),
        }
      : {},
  notFoundComponent: () => <NotFound />,
  component: CaseStudy,
})

function CaseStudy() {
  const project = Route.useLoaderData()

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="pt-28 md:pt-36">
      <header className="shell">
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 label hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden />
          All work
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
          <span className="label">{project.context}</span>
          {project.year && (
            <>
              <span aria-hidden className="w-8 border-t border-rule-strong" />
              <span className="label nums">{project.year}</span>
            </>
          )}
          {project.access === 'private' && (
            <>
              <span aria-hidden className="w-8 border-t border-rule-strong" />
              <span className="label inline-flex items-center gap-1">
                <Lock className="w-3 h-3" aria-hidden />
                Private system
              </span>
            </>
          )}
        </div>

        <h1 className="display max-w-[14ch] mb-8">{project.title}</h1>

        <div className="grid gap-8 md:grid-cols-12 md:gap-10 pb-12 md:pb-16">
          <p className="md:col-span-5 lede text-ink">{project.tagline}</p>

          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            <div>
              <p className="label mb-2">Role</p>
              <p className="text-[0.9375rem] text-muted">{project.role}</p>
            </div>

            <div>
              <p className="label mb-2">{project.stackLabel ?? 'Stack'}</p>
              <TagList items={project.stack} />
            </div>

            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4" aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {project.image && (
        <div className="shell">
          <div className="aspect-[16/9] overflow-hidden border border-rule bg-sunken">
            <img
              src={project.image}
              alt={`${project.title} interface`}
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <section className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <Reveal className="mb-14">
              <h2 className="label mb-5">The problem</h2>
              <p className="lede text-ink max-w-[54ch]">{project.problem}</p>
            </Reveal>

            <Reveal className="mb-14">
              <h2 className="label mb-5">Approach</h2>
              <NumberedList items={project.approach} />
            </Reveal>

            {project.notes && (
              <Reveal>
                <div className="border-l-2 border-accent pl-5 py-1">
                  <p className="prose-body text-[0.9375rem] max-w-[54ch]">
                    {project.notes}
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={80} className="md:col-span-3 md:col-start-10">
            <h2 className="label mb-6">Outcome</h2>
            <div className="flex flex-col gap-8">
              {project.outcomes.map((outcome) => (
                <Metric
                  key={outcome.label}
                  value={outcome.value}
                  label={outcome.label}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {next && next.slug !== project.slug && (
        <nav aria-label="Next project" className="rule-top">
          <div className="shell py-12">
            <Link to="/work/$slug" params={{ slug: next.slug }} className="group block">
              <p className="label mb-3">Next</p>
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="heading group-hover:text-accent transition-colors">
                  {next.title}
                </h2>
                <ArrowUpRight
                  className="w-6 h-6 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  aria-hidden
                />
              </div>
              <p className="prose-body text-[0.9375rem] mt-2 max-w-[54ch]">
                {next.tagline}
              </p>
            </Link>
          </div>
        </nav>
      )}
    </article>
  )
}
