import { experiences } from '~/data/experience'
import { Section, SectionHeader } from '~/components/ui/Section'
import { Reveal } from '~/components/ui/Reveal'
import { NumberedList } from '~/components/ui/NumberedList'
import { TagList } from '~/components/ui/TagList'

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        index="02"
        label="Experience"
        title="Six years across insurance, healthcare and infrastructure."
        description="Software development, then infrastructure, then both at once. The pattern throughout is the same: find the process being done by hand, and replace it with something that runs on its own."
      />

      <div>
        {experiences.map((role, index) => (
          <Reveal
            as="article"
            key={`${role.company}-${role.title}`}
            delay={index * 60}
            className="rule-top py-10 md:py-12 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="grid gap-6 md:grid-cols-12 md:gap-10">
              <header className="md:col-span-4">
                <p className="label nums mb-3">
                  {role.end ? `${role.start} — ${role.end}` : role.start}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] mb-1.5">
                  {role.title}
                </h3>
                <p className="text-[0.9375rem] text-muted">
                  {role.company}
                  <span className="text-faint"> / {role.location}</span>
                </p>
              </header>

              <div className="md:col-span-7 md:col-start-6">
                <NumberedList items={role.achievements} />
                <TagList items={role.technologies} className="mt-6" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
