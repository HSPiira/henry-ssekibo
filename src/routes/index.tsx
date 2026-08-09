import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/sections/Hero'
import { Work } from '~/components/sections/Work'
import { ExperienceSection } from '~/components/sections/Experience'
import { Capabilities } from '~/components/sections/Capabilities'
import { About } from '~/components/sections/About'
import { Contact } from '~/components/sections/Contact'
import { siteConfig } from '~/config/site'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: `${siteConfig.name} | ${siteConfig.role}`,
      description: siteConfig.description,
      keywords:
        'software engineer, .NET, C#, Azure, digital transformation, insurance technology, Kampala, Uganda',
    }),
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <ExperienceSection />
      <Capabilities />
      <About />
      <Contact />
    </>
  )
}
