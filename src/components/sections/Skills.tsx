import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { getSkills } from '~/server/skills'

export function Skills() {
  const { data: skillCategories, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getSkills()
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="sheet-alt section-padding"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label">What I work with</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <p className="text-body max-w-md">
            A blend of backend development, infrastructure management, and modern frontend tools.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories?.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
            >
              {/* Category header */}
              <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-medium text-zinc-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                      viewport={{ once: true }}
                      className="px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-zinc-500">
            Always learning, always growing. Currently exploring AI/ML integrations and cloud-native architectures.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
