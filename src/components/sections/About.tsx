import { certifications, education } from '~/data/experience'
import { Section, SectionHeader } from '~/components/ui/Section'
import { Reveal } from '~/components/ui/Reveal'

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        index="04"
        label="About"
        title="I build the boring systems that carry real weight."
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 flex flex-col gap-5">
          <p className="lede text-ink max-w-[48ch]">
            Most of what I build is invisible. A worker service that runs at
            04:00, a screening job that flags a sanctioned counterparty, a
            submission that reaches the regulator before the deadline closes.
          </p>

          <p className="prose-body max-w-[56ch]">
            I work at Minet Uganda, an insurance brokerage, where the software
            has to be right rather than clever. A missed renewal is a client
            without cover. A late regulatory filing is a financial penalty. That
            constraint shapes how I build: explicit domain models, audit trails
            that hold up under scrutiny, and processes that keep working when
            nobody is watching them.
          </p>

          <p className="prose-body max-w-[56ch]">
            I came to this through operations rather than around it. Two years
            keeping servers, backups and 40+ staff running taught me what
            actually breaks in production, which is rarely the thing the design
            document worried about.
          </p>

          <p className="prose-body max-w-[56ch]">
            Right now I am leading the organisation&rsquo;s AI adoption
            programme. That started as a proposal to EXCO, became an audit of
            our manuals and policies to find the processes where AI actually
            earns its place, and is currently user training. I am taking a
            Master&rsquo;s in Data Science alongside it, mostly because the
            questions the business asks have started to outgrow the tools I had.
          </p>

          <p className="prose-body max-w-[56ch]">
            Based in Kampala. Comfortable owning a system end to end, from the
            domain model through to the server it runs on.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8 flex flex-col gap-10">
          <Reveal>
            <h3 className="label mb-5">Education</h3>
            <ul className="flex flex-col">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="rule-bottom last:border-b-0 py-4 first:pt-0"
                >
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <p className="font-medium text-[0.9375rem]">
                      {item.degree}
                    </p>
                    <span className="label nums shrink-0">{item.period}</span>
                  </div>
                  {item.institution && (
                    <p className="text-sm text-muted">{item.institution}</p>
                  )}
                  {item.description && (
                    <p className="text-sm text-faint mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="label mb-5">Certifications</h3>
            <ul className="flex flex-col">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="rule-bottom last:border-b-0 py-4 first:pt-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium text-[0.9375rem]">{cert.name}</p>
                    {cert.date && (
                      <span
                        className={`label nums shrink-0 ${
                          cert.status === 'in-progress' ? '!text-accent' : ''
                        }`}
                      >
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted mt-0.5">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
