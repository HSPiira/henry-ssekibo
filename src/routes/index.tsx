import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/sections/Hero'
import { About } from '~/components/sections/About'
import { Journey } from '~/components/sections/Journey'
import { Contact } from '~/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Contact />
    </>
  )
}
