'use client'

import { motion } from 'framer-motion'
import { ArrowRight, X, ExternalLink, Github, CheckCircle, Clock, Lightbulb } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  features: string[]
  github: string
  demo: string
  status: string
  background: string
}

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
  isMobile?: boolean
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Employee Assistance Program',
      description: 'Enterprise-grade mental wellness portal with secure authentication and comprehensive reporting.',
      fullDescription: 'A comprehensive mental wellness portal built with Next.js, featuring secure user authentication, appointment scheduling, and a comprehensive reporting dashboard. The system enables organizations to provide mental health support to their employees through a modern, accessible platform.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Secure user authentication and role-based access',
        'Appointment scheduling and calendar integration',
        'Comprehensive reporting and analytics dashboard',
        'Mobile-responsive design with dark mode support'
      ],
      github: '#',
      demo: '#',
      status: 'completed',
      background: 'bg-white dark:bg-black'
    },
    {
      id: 2,
      title: 'TaskMaster',
      description: 'Automated insurance workflow alert system that monitors policy deadlines and sends notifications.',
      fullDescription: 'An automated insurance workflow alert system that monitors policy deadlines and sends notifications to relevant stakeholders. Built with C# and .NET Core, it improves operational efficiency by ensuring no critical deadlines are missed.',
      technologies: ['C#', '.NET Core', 'SQL Server', 'PowerShell', 'Windows Service'],
      features: [
        'Automated policy deadline monitoring',
        'Multi-channel notification system (Email, SMS)',
        'Configurable alert rules and escalation paths',
        'Comprehensive logging and audit trail'
      ],
      github: '#',
      demo: '#',
      status: 'completed',
      background: 'bg-gray-50 dark:bg-gray-950'
    },
    {
      id: 3,
      title: 'IT Asset Register',
      description: 'Comprehensive asset management system for tracking and maintaining IT infrastructure.',
      fullDescription: 'A comprehensive asset management system built with React and Next.js, enabling organizations to track, manage, and maintain their IT infrastructure. Features include asset lifecycle management, barcode scanning, and detailed reporting.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Prisma', 'SQLite'],
      features: [
        'Asset lifecycle management and tracking',
        'Barcode scanning and QR code generation',
        'Maintenance scheduling and alerts',
        'Detailed reporting and analytics'
      ],
      github: '#',
      demo: '#',
      status: 'development',
      background: 'bg-gray-100 dark:bg-gray-900'
    },
    {
      id: 4,
      title: 'VM Management Tool',
      description: 'PowerShell-based virtualization management tool for Hyper-V environments.',
      fullDescription: 'A PowerShell-based virtualization management tool for Hyper-V environments, automating VM provisioning, monitoring, and backup operations. Designed to streamline infrastructure management and improve operational efficiency.',
      technologies: ['PowerShell', 'Hyper-V', 'Windows Server', 'Veeam'],
      features: [
        'Automated VM provisioning and configuration',
        'Resource monitoring and alerting',
        'Automated backup scheduling',
        'Performance optimization recommendations'
      ],
      github: '#',
      demo: '#',
      status: 'completed',
      background: 'bg-white dark:bg-black'
    },
    {
      id: 5,
      title: 'Expense Tracker',
      description: 'Personal finance management application with expense categorization and budget tracking.',
      fullDescription: 'A personal finance management application with expense categorization, budget tracking, and financial insights dashboard. Built with Next.js and TypeScript, it helps users manage their finances effectively.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Chart.js'],
      features: [
        'Expense categorization and tagging',
        'Budget tracking and alerts',
        'Financial insights and trends',
        'Export capabilities for tax purposes'
      ],
      github: '#',
      demo: '#',
      status: 'completed',
      background: 'bg-gray-50 dark:bg-gray-950'
    },
    {
      id: 6,
      title: 'HMS Ultra',
      description: 'Comprehensive hospital management system concept with patient records and appointment scheduling.',
      fullDescription: 'A comprehensive hospital management system concept featuring patient records, appointment scheduling, billing, and inventory management. Designed to streamline healthcare operations and improve patient care delivery.',
      technologies: ['C#', '.NET Framework', 'SQL Server', 'Crystal Reports'],
      features: [
        'Patient registration and medical records',
        'Appointment scheduling system',
        'Billing and insurance management',
        'Inventory and pharmacy management'
      ],
      github: '#',
      demo: '#',
      status: 'concept',
      background: 'bg-gray-100 dark:bg-gray-900'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      case 'development':
        return <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
      case 'concept':
        return <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      default:
        return <CheckCircle className="w-4 h-4 text-gray-600 dark:text-gray-400" />
    }
  }

  function ProjectCard({ project, index, onClick, isMobile = false }: ProjectCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, [isMobile ? 'x' : 'y']: 30 }}
        whileInView={{ opacity: 1, [isMobile ? 'x' : 'y']: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group ${project.background} p-6 border ${
          isMobile 
            ? 'flex-shrink-0 w-80' 
            : 'border-r border-b hover:bg-gray-100 dark:hover:bg-gray-950'
        } transition-all duration-300 cursor-pointer aspect-square flex flex-col justify-between`}
        style={{ borderColor: '#0057FF' }}
        onClick={onClick}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="text-lg font-thin text-black dark:text-white">
            {String(project.id).padStart(2, '0')}
          </div>
          <div className="p-1">
            {getStatusIcon(project.status)}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-xs font-light text-gray-500 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          {isMobile && (
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Click for details
            </div>
          )}
          <div className={`p-2 rounded-full transition-all duration-300 group-hover:opacity-80 ${isMobile ? '' : 'ml-auto'}`} style={{ backgroundColor: '#0057FF' }}>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="section-padding bg-white dark:bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 dark:text-white mb-6 tracking-tight">
              Wall of Fame
            </h2>
            <div className="w-20 h-1 rounded mb-4" style={{ backgroundColor: '#0057FF' }}></div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              A showcase of my key projects spanning enterprise applications, automation tools, and digital solutions
            </p>
          </div>

          {/* Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-0 border overflow-hidden" style={{ borderColor: '#0057FF' }}>
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project.id)} 
              />
            ))}
          </div>

          {/* Mobile: Horizontal scroll layout */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto scrollbar-hide space-x-0 pb-4">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project} 
                  index={index} 
                  onClick={() => setSelectedProject(project.id)}
                  isMobile={true}
                />
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-none"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null
                  
                  return (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
                        >
                          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Description</h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-black dark:text-white mr-2 mt-1">•</span>
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 pt-4 border-t" style={{ borderColor: '#0057FF' }}>
                          <a
                            href={project.github}
                            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
