'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent dark:from-gray-900/20 dark:to-transparent"></div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-black dark:text-white" />
              <span className="text-sm font-light text-gray-600 dark:text-gray-300">Digital Transformation Expert</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-thin text-gray-900 dark:text-white mb-6 tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-1 rounded mb-6" style={{ backgroundColor: '#0057FF' }}></div>
            <p className="text-lg font-light text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
              Transforming businesses through technology, one solution at a time
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-lg font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a passionate <span className="text-black dark:text-white font-medium">IT Support Specialist</span> and 
                  <span className="text-black dark:text-white font-medium"> Digital Transformation Expert</span> with over 
                  <span className="text-black dark:text-white font-medium"> 5 years</span> of experience at Minet Uganda, 
                  where I&apos;ve led digital transformation initiatives and improved operational efficiency by 25%.
                </p>
                
                <p className="text-base font-light text-gray-500 dark:text-gray-400 leading-relaxed">
                  My expertise spans business process automation, full-stack development with .NET and Next.js, 
                  database management, and cloud solutions. I&apos;ve successfully implemented automated workflow systems 
                  that reduced manual processing time by 60% and improved infrastructure reliability by 30%.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <span className="text-sm font-light text-gray-600 dark:text-gray-300">
                    Led digital transformation initiatives resulting in 25% efficiency increase
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <span className="text-sm font-light text-gray-600 dark:text-gray-300">
                    Reduced manual processing time by 60% through automation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <span className="text-sm font-light text-gray-600 dark:text-gray-300">
                    Improved infrastructure reliability by 30% through proactive monitoring
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Profile Image & Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-md mx-auto"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src="/henry-ssekibo.jpg"
                      alt="Henry Ssekibo - IT Support & Digital Transformation Specialist"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <span className="text-white dark:text-black text-2xl font-bold">5+</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl font-thin text-black dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Years Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl font-thin text-black dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Projects Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl font-thin text-black dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Technologies Mastered</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl font-thin text-black dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="#contact"
              className="group inline-flex items-center text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#0057FF' }}
            >
              <span className="group-hover:mr-3 transition-all duration-300">Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

