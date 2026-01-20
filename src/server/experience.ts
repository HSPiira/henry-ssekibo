import { createServerFn } from '@tanstack/react-start'
import { experiences, education, certifications } from '~/data/experience'

export const getExperience = createServerFn({ method: 'GET' }).handler(async () => {
  return {
    experiences,
    education,
    certifications
  }
})
