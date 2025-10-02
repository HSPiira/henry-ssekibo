'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Code } from 'lucide-react'

export function Achievements() {
  const achievements = [
    {
      icon: TrendingUp,
      value: "30%",
      label: "Infrastructure Reliability Improvement",
      description: "Through proactive monitoring and maintenance"
    },
    {
      icon: Code,
      value: "45%",
      label: "System Downtime Reduction",
      description: "By implementing automated backup solutions"
    },
    {
      icon: Users,
      value: "50+",
      label: "Employees Trained",
      description: "In digital transformation and IT best practices"
    },
    {
      icon: Award,
      value: "15+",
      label: "Projects Delivered",
      description: "Custom software solutions for businesses"
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-black">
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
              Impact & Results
            </h2>
            <div className="w-20 h-1 rounded mb-4" style={{ backgroundColor: '#0057FF' }}></div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              Measurable outcomes from digital transformation initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
              >
                <achievement.icon className="w-10 h-10 text-black dark:text-white mx-auto mb-3" />
                <div className="text-3xl font-thin text-gray-900 dark:text-white mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-base proza-libre-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.label}
                </h3>
                <p className="text-xs proza-libre-regular text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
