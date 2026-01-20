import { createServerFn } from '@tanstack/react-start'
import { skillCategories } from '~/data/skills'

export const getSkills = createServerFn({ method: 'GET' }).handler(async () => {
  return skillCategories
})
