'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Skills() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const competencies = [
    {
      title: 'Digital Transformation',
      description: 'Leading organizational change through technology adoption and process optimization. Successfully implemented automated workflow systems that reduced manual processing time by 60% and improved operational efficiency by 25%.',
      expertise: ['Business Process Automation', 'Change Management', 'Workflow Design', 'ROI Optimization', 'PowerShell Scripting']
    },
    {
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern technologies and best practices. Experienced in developing enterprise-grade applications using .NET, Next.js, and database integration solutions.',
      expertise: ['C# & .NET', 'Next.js & React', 'TypeScript', 'API Development', 'Prisma ORM']
    },
    {
      title: 'IT Infrastructure & Support',
      description: 'Designing, implementing, and maintaining robust enterprise systems. Improved infrastructure reliability by 30% through proactive monitoring and reduced system downtime by 45%.',
      expertise: ['Windows Server', 'Hyper-V', 'Active Directory', 'Veeam Backup', 'SQL Server']
    },
    {
      title: 'Data Integration & Analytics',
      description: 'Transforming data into actionable insights for business decision-making. Developed data integration solutions connecting multiple business systems and created Power BI dashboards for executive reporting.',
      expertise: ['Power BI', 'SQL Server', 'Data Integration', 'Business Intelligence', 'Azure Services']
    }
  ]


  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-thin text-gray-900 dark:text-white mb-6 tracking-tight">
              Expertise
            </h2>
            <div className="w-20 h-1 rounded mb-4" style={{ backgroundColor: '#0057FF' }}></div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              Specialized knowledge in digital transformation, full-stack development, and IT infrastructure
            </p>
          </div>

          {/* Professional Accordion */}
          <div className="space-y-4 mb-16">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left hover:text-black dark:hover:text-white transition-colors duration-300 focus:outline-none"
                >
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    <span className="text-black dark:text-white mr-3">{String(index + 1).padStart(2, '0')}.</span>
                    {competency.title}
                  </h3>
                </button>

                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-2"
                    >
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {competency.description}
                        </p>
                        
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {competency.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {index < competencies.length - 1 && (
                  <hr className="mt-4" style={{ borderColor: '#0057FF' }} />
                )}
              </motion.div>
            ))}
          </div>


          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
              Ready to leverage this expertise for your project?
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="group-hover:mr-3 transition-all duration-300">Let&apos;s Collaborate</span>
              <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

