import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { sendContactEmail, type ContactFormData } from '~/server/contact'
import { siteConfig } from '~/config/site'
import { Section, SectionHeader } from '~/components/ui/Section'
import { Reveal } from '~/components/ui/Reveal'

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM)

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => sendContactEmail({ data }),
    onSuccess: () => setForm(EMPTY_FORM),
  })

  const update =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(form)
  }

  return (
    <Section id="contact" tone="surface">
      <SectionHeader
        index="05"
        label="Contact"
        title="Open to interesting problems."
        description="Backend and systems work, digital transformation, or anything where a manual process needs to become an automated one. Email is fastest, and the form below reaches the same inbox."
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <dl className="flex flex-col">
            <div className="rule-bottom py-4 first:pt-0">
              <dt className="label mb-1.5">Email</dt>
              <dd>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1 text-[0.9375rem] hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                </a>
              </dd>
            </div>

            <div className="rule-bottom py-4">
              <dt className="label mb-1.5">Phone</dt>
              <dd>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-[0.9375rem] nums hover:text-accent transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>

            <div className="rule-bottom py-4">
              <dt className="label mb-1.5">Location</dt>
              <dd className="text-[0.9375rem]">{siteConfig.location}</dd>
            </div>

            {siteConfig.socials.map((social) => (
              <div key={social.href} className="rule-bottom last:border-b-0 py-4">
                <dt className="label mb-1.5">{social.label}</dt>
                <dd>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[0.9375rem] hover:text-accent transition-colors"
                  >
                    {social.handle}
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80} className="md:col-span-7 md:col-start-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label block mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={update('name')}
                  className="field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="label block mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="field"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="label block mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                minLength={3}
                value={form.subject}
                onChange={update('subject')}
                className="field"
                placeholder="What this is about"
              />
            </div>

            <div>
              <label htmlFor="message" className="label block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                value={form.message}
                onChange={update('message')}
                className="field resize-none"
                placeholder="A few lines on what you have in mind"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="btn btn-solid disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mutation.isPending && (
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                )}
                {mutation.isPending ? 'Sending' : 'Send message'}
              </button>

              {/*
                Announced to assistive tech. The previous build showed these
                states visually only, so screen reader users never learned
                whether the submission had succeeded.
              */}
              <p role="status" aria-live="polite" className="text-sm">
                {mutation.isSuccess && (
                  <span className="text-accent">
                    Sent. I will get back to you.
                  </span>
                )}
                {mutation.isError && (
                  <span className="text-accent">
                    {mutation.error instanceof Error
                      ? mutation.error.message
                      : 'Something went wrong. Try email instead.'}
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
