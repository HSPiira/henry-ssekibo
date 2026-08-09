import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Lock } from 'lucide-react'
import { projects, type Project } from '~/data/projects'
import { Section, SectionHeader } from '~/components/ui/Section'
import { Reveal } from '~/components/ui/Reveal'
import { TagList } from '~/components/ui/TagList'

const statusLabel: Record<Project['status'], string> = {
  shipped: 'Shipped',
  'in-progress': 'In progress',
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="rule-top py-10 md:py-14 first:border-t-0 first:pt-0 last:pb-0"
    >
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group grid gap-6 md:grid-cols-12 md:gap-10 items-start"
      >
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="label nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="label">{statusLabel[project.status]}</span>
            {project.access === 'private' && (
              <span className="label inline-flex items-center gap-1">
                <Lock className="w-3 h-3" aria-hidden />
                Private
              </span>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-[0.9375rem] text-ink/90 mb-4">{project.tagline}</p>

          <p className="prose-body text-[0.9375rem] max-w-[52ch] mb-6">
            {project.summary}
          </p>

          <TagList items={project.stack} className="mb-6" />

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink border-b border-rule-strong group-hover:border-accent group-hover:text-accent transition-colors pb-0.5">
            Read the case study
            <ArrowUpRight
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>

        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-sunken border border-rule">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} interface`}
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="h-full w-full grid place-items-center">
                <span className="label">{project.title}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 mt-3">
            <span className="label">{project.context}</span>
            {project.year && <span className="label nums">{project.year}</span>}
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export function Work() {
  return (
    <Section id="work" tone="surface">
      <SectionHeader
        index="01"
        label="Selected work"
        title="What I've built, and what I'm building."
        description="Three of these are internal to Minet Uganda and cannot be linked, so each has a written case study instead: the problem, the decisions taken, and what changed as a result."
      />

      <div>
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
