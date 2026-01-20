import { createServerFn } from '@tanstack/react-start'
import { projects } from '~/data/projects'

export const getProjects = createServerFn({ method: 'GET' }).handler(async () => {
  // In a real app, this could fetch from a database
  return projects
})

export const getProjectById = createServerFn({ method: 'GET' })
  .inputValidator((id: number) => id)
  .handler(async ({ data: id }) => {
    const project = projects.find((p) => p.id === id)
    if (!project) {
      throw new Error('Project not found')
    }
    return project
  })
