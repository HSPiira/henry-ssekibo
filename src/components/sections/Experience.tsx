import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GraduationCap, Award, Loader2, ArrowRight, Briefcase } from 'lucide-react'
import { getExperience } from '~/server/experience'

export function Experience() {
  const [activeRole, setActiveRole] = useState(0)
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience')

  const { data, isLoading } = useQuery({
    queryKey: ['experience'],
    queryFn: () => getExperience()
  })

  if (isLoading) {
    return (
      <section className="sheet-alt section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 spinner" />
          </div>
        </div>
      </section>
    )
  }

  const { experiences, education, certifications } = data || { experiences: [], education: [], certifications: [] }
  const currentExperience = experiences[activeRole]

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="sheet-alt section-padding"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <span className="section-label">My journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 w-fit mb-10">
          {[
            { key: 'experience', label: 'Experience', icon: Briefcase },
            { key: 'education', label: 'Education', icon: GraduationCap },
            { key: 'certifications', label: 'Certifications', icon: Award }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all ${
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

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
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
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRole}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-full"
                    >
                      {/* Header */}
                      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                            {currentExperience?.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                          {currentExperience?.title}
                        </h3>
                        <p className="text-zinc-500 mt-1">
                          {currentExperience?.company} · {currentExperience?.location}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-4">
                          Key achievements
                        </h4>
                        <ul className="space-y-3">
                          {currentExperience?.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm shrink-0">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                          <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                            Technologies used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentExperience?.technologies.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                className="tag"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-2xl">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
