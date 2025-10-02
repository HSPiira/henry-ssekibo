'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experiences = [
    {
      title: 'Digital Transformation Specialist',
      company: 'Minet Uganda',
      location: 'Kampala, Uganda',
      period: '2023 - Present',
      type: 'Full-time',
      achievements: [
        'Led digital transformation initiatives resulting in 25% increase in operational efficiency',
        'Implemented automated workflow systems that reduced manual processing time by 60%',
        'Developed data integration solutions connecting multiple business systems',
        'Mentored teams on digital adoption and change management processes'
      ],
      technologies: ['Power BI', 'Python', 'SQL Server', 'Azure', 'PowerShell', 'Data Integration']
    },
    {
      title: 'IT Support Assistant',
      company: 'Minet Uganda',
      location: 'Kampala, Uganda',
      period: '2021 - 2023',
      type: 'Full-time',
      achievements: [
        'Improved infrastructure reliability by 30% through proactive monitoring and maintenance',
        'Reduced system downtime by 45% by implementing automated backup solutions',
        'Provided technical support to 200+ users across multiple departments',
        'Conducted training sessions for 50+ employees on new systems and processes'
      ],
      technologies: ['Windows Server', 'Active Directory', 'Hyper-V', 'Veeam', 'PowerShell', 'SQL Server']
    },
    {
      title: 'Software Developer',
      company: 'Nmicros',
      location: 'Kampala, Uganda',
      period: '2020 - 2021',
      type: 'Full-time',
      achievements: [
        'Developed enterprise-grade applications using C# and .NET Framework',
        'Built automated workflow systems that reduced manual processing time by 60%',
        'Implemented database optimization strategies improving query performance by 40%',
        'Collaborated with cross-functional teams to deliver 5+ successful projects'
      ],
      technologies: ['C#', '.NET Framework', 'SQL Server', 'ASP.NET', 'JavaScript', 'HTML/CSS']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Information Systems',
      institution: 'Makerere University',
      location: 'Kampala, Uganda',
      period: '2016 - 2020',
      description: 'Focused on software development, database management, and information systems design'
    }
  ]

  const certifications = [
    {
      name: 'Huawei HCIA – Routing & Switching',
      issuer: 'Huawei Technologies',
      date: '2021',
      description: 'Certified in network routing and switching technologies'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2022',
      description: 'Cloud computing fundamentals and Azure services'
    },
    {
      name: 'CompTIA A+',
      issuer: 'CompTIA',
      date: '2020',
      description: 'IT support and hardware troubleshooting'
    },
    {
      name: 'Google IT Support Certificate',
      issuer: 'Google',
      date: '2021',
      description: 'IT support fundamentals and customer service'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 dark:text-white mb-6 tracking-tight">
              Professional Experience
            </h2>
            <div className="w-20 h-1 rounded mb-4" style={{ backgroundColor: '#0057FF' }}></div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              A journey of growth and impact in IT support, software development, and digital transformation
            </p>
          </div>

          {/* Experience Accordion */}
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-4"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full text-left hover:opacity-80 transition-opacity duration-200 group"
                >
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className={`text-lg sm:text-xl font-light transition-colors duration-200 flex items-center ${
                        expandedIndex === index 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}>
                        <span className="text-gray-500 dark:text-gray-400">{experience.period}</span>
                        <span className="ml-2">{experience.title}</span>
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pt-3">
                    {/* Hidden details for smaller screens */}
                    <div className="block sm:hidden mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-medium">{experience.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                        <MapPin size={14} className="mr-2" />
                        <span>{experience.location}</span>
                        <span className="mx-2">•</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div 
                          key={achievementIndex} 
                          className="flex items-center group/achievement"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: expandedIndex === index ? 1 : 0,
                            x: expandedIndex === index ? 0 : -20
                          }}
                          transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0">—</span>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover/achievement:text-gray-800 dark:group-hover/achievement:text-gray-100 transition-colors duration-200">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* HR Separator */}
                {index < experiences.length - 1 && (
                  <hr className="mt-4" style={{ borderColor: '#0057FF' }} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Education & Certifications
              </h3>
              <div className="w-16 h-1 rounded mb-6" style={{ backgroundColor: '#0057FF' }}></div>
            </div>
            
            <div className="space-y-6">
              {/* Education - Simple List */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h4>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 rounded-full" style={{ backgroundColor: '#0057FF' }}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="text-gray-500 dark:text-gray-400">{edu.period}</span> {edu.degree} - {edu.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications - Simple List */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 rounded-full" style={{ backgroundColor: '#0057FF' }}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="text-gray-500 dark:text-gray-400">{cert.date}</span> {cert.name} - {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

