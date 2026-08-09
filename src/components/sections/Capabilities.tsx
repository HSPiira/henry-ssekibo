import { skillGroups } from '~/data/skills'
import { Section, SectionHeader } from '~/components/ui/Section'
import { Reveal } from '~/components/ui/Reveal'

export function Capabilities() {
  return (
    <Section id="capabilities" tone="surface">
      <SectionHeader
        index="03"
        label="Capabilities"
        title="What I work with."
        description="Grouped by the kind of problem each one solves rather than by vendor. The last column is the part most engineers do not have, and the reason the systems above fit the business they were built for."
      />

      <div className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3 border border-rule">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 50}
            className="bg-surface p-6 md:p-8"
          >
            <p className="label nums mb-4">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] mb-1.5">
              {group.title}
            </h3>
            <p className="text-sm text-faint mb-5">{group.note}</p>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[0.9375rem] text-muted flex items-baseline gap-2.5"
                >
                  <span
                    aria-hidden
                    className="inline-block w-1.5 h-1.5 shrink-0 bg-accent translate-y-[-1px]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
