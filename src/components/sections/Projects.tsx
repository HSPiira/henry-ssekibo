import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ArrowUpRight, X, ExternalLink, Github, CheckCircle, Clock, Lightbulb, Loader2 } from 'lucide-react'
import { getProjects } from '~/server/projects'
import type { Project } from '~/data/projects'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects()
  })

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { icon: CheckCircle, label: 'Completed', color: 'text-emerald-500' }
      case 'development':
        return { icon: Clock, label: 'In Progress', color: 'text-amber-500' }
      case 'concept':
        return { icon: Lightbulb, label: 'Concept', color: 'text-zinc-400' }
      default:
        return { icon: CheckCircle, label: status, color: 'text-zinc-400' }
    }
  }

  if (isLoading) {
    return (
      <section className="sheet section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 spinner" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="sheet section-padding">
        <div className="container-custom">
          <div className="text-center py-20">
            <p className="text-red-500">Failed to load projects</p>
          </div>
        </div>
      </section>
    )
  }

  const selectedProjectData = projects?.find((p) => p.id === selectedProject)

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="sheet section-padding"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">Projects I'm proud of</h2>
          <p className="section-description">
            From enterprise automation to custom dashboards—here's what I've been building.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects?.map((project, index) => {
            const statusConfig = getStatusConfig(project.status)
            const StatusIcon = statusConfig.icon

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project.id)}
                className="project-card cursor-pointer group"
              >
                {/* Content */}
                <div className="p-6">
                  {/* Number and status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                      {String(project.id).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <StatusIcon className={`w-3.5 h-3.5 ${statusConfig.color}`} />
                      <span className="text-xs text-zinc-500">{statusConfig.label}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-body text-sm mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag-sm">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-sm text-zinc-500">View details</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {(() => {
                      const config = getStatusConfig(selectedProjectData.status)
                      const Icon = config.icon
                      return (
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-4 h-4 ${config.color}`} />
                          <span className="text-sm text-zinc-500">{config.label}</span>
                        </div>
                      )
                    })()}
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {selectedProjectData.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-icon"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <p className="text-body leading-relaxed">
                  {selectedProjectData.fullDescription}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                    Key features
                  </h4>
                  <div className="space-y-2">
                    {selectedProjectData.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium text-xs mt-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                    Built with
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex gap-3">
                  <a
                    href={selectedProjectData.github}
                    className="btn-secondary btn-sm flex-1 justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={selectedProjectData.demo}
                    className="btn-primary btn-sm flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
