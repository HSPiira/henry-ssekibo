import { motion } from 'framer-motion'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GraduationCap, Award, Loader2, ArrowRight, Briefcase, FolderOpen, ExternalLink, Github, CheckCircle, Clock, Lightbulb, ImageIcon } from 'lucide-react'
import { getExperience } from '~/server/experience'
import { getProjects } from '~/server/projects'

type TabKey = 'projects' | 'experience' | 'education' | 'certifications'

export function Journey() {
  const [activeRole, setActiveRole] = useState(0)
  const [activeProject, setActiveProject] = useState(0)
  const [activeTab, setActiveTab] = useState<TabKey>('projects')

  const { data: experienceData, isLoading: expLoading } = useQuery({
    queryKey: ['experience'],
    queryFn: () => getExperience()
  })

  const { data: projects, isLoading: projLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects()
  })

  const isLoading = expLoading || projLoading

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
      <section className="sheet-alt section-padding flex items-center justify-center">
        <Loader2 className="w-6 h-6 spinner" />
      </section>
    )
  }

  const { experiences, education, certifications } = experienceData || { experiences: [], education: [], certifications: [] }
  const currentExperience = experiences[activeRole]
  const currentProject = projects?.[activeProject]

  const tabs = [
    { key: 'projects' as TabKey, label: 'Projects', icon: FolderOpen },
    { key: 'experience' as TabKey, label: 'Experience', icon: Briefcase },
    { key: 'education' as TabKey, label: 'Education', icon: GraduationCap },
    { key: 'certifications' as TabKey, label: 'Certifications', icon: Award }
  ]

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="sheet-alt section-padding"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-6">
          <span className="section-label">My journey</span>
          <h2 className="section-title">Work & Experience</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 w-fit mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key)
                if (tab.key === 'experience') setActiveRole(0)
                if (tab.key === 'projects') setActiveProject(0)
              }}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content - Fixed height container to prevent layout shift */}
        <div className="min-h-125">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Project List */}
              <div className="lg:col-span-4">
                <div className="space-y-1">
                  {projects?.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`w-full text-left py-2 px-3 transition-all flex items-center gap-3 ${
                        activeProject === index
                          ? 'text-zinc-900 dark:text-white'
                          : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                      }`}
                    >
                      <span className={`font-medium text-sm ${activeProject === index ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium">
                        {project.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-8">
                {currentProject && (
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                  >
                    {/* Image placeholder */}
                    <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                      {currentProject?.image ? (
                        <img
                          src={currentProject.image}
                          alt={currentProject.title ?? "Project image"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-zinc-300 dark:text-zinc-600" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4 flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                          {currentProject.title}
                        </h3>
                        {(() => {
                          const config = getStatusConfig(currentProject.status)
                          const Icon = config.icon
                          return (
                            <div className="flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${config.color}`} />
                              <span className="text-sm text-zinc-500">{config.label}</span>
                            </div>
                          )
                        })()}
                      </div>

                      {/* Description */}
                      <p className="text-body text-sm leading-relaxed mb-6">
                        {currentProject.fullDescription}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                          Key features
                        </h4>
                        <div className="space-y-2">
                          {currentProject.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium text-xs mt-0.5">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex flex-wrap gap-2">
                          {currentProject.technologies.map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary btn-sm flex-1 justify-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View code
                        </a>
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary btn-sm flex-1 justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Role Selector */}
              <div className="lg:col-span-4">
                <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveRole(index)}
                      className={`w-full text-left p-5 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 transition-all ${
                        activeRole === index
                          ? 'bg-zinc-50 dark:bg-zinc-800 border-l-2 border-l-emerald-500'
                          : 'hover:bg-zinc-50 dark:hover:bg-zinc-800 border-l-2 border-l-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-zinc-500 mb-1">{exp.period}</p>
                          <h4 className={`font-medium text-sm ${activeRole === index ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-zinc-300'}`}>
                            {exp.title}
                          </h4>
                          <p className="text-sm text-zinc-500 mt-0.5">{exp.company}</p>
                        </div>
                        <ArrowRight className={`w-4 h-4 transition-all ${activeRole === index ? 'text-emerald-500 translate-x-1' : 'text-zinc-300 dark:text-zinc-700'}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Role Details */}
              <div className="lg:col-span-8">
                {currentExperience && (
                  <motion.div
                    key={activeRole}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                  >
                    <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {currentExperience.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                        {currentExperience.title}
                      </h3>
                      <p className="text-zinc-500 mt-1">
                        {currentExperience.company} · {currentExperience.location}
                      </p>
                    </div>

                    <div className="p-6">
                      <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-4">
                        Key achievements
                      </h4>
                      <ul className="space-y-3">
                        {currentExperience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm shrink-0">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                          Technologies used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentExperience.technologies.map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="max-w-2xl">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0">
                        <GraduationCap className="w-6 h-6 text-zinc-500" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 mb-1">{edu.period}</p>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                          {edu.institution} · {edu.location}
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0">
                      <Award className="w-5 h-5 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">{cert.issuer} · {cert.date}</p>
                      <h4 className="font-medium text-zinc-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-zinc-500">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
