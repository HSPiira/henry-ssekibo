'use client'

import { Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Henry Ssekibo CV.pdf'
    link.download = 'Henry Ssekibo CV.pdf'
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white dark:bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-30"
        style={{ 
          backgroundImage: 'url(/henry-ssekibo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl md:text-6xl font-thin text-gray-900 dark:text-white mb-8 tracking-tight leading-none">
            Henry Ssekibo
          </h1>
          
          <p className="text-lg md:text-xl proza-libre-medium text-gray-600 dark:text-gray-300 mb-8 tracking-wide">
            IT Support & Digital Transformation Specialist
          </p>
          
          <p className="text-sm proza-libre-regular text-gray-500 dark:text-gray-400 mb-12 max-w-3xl leading-relaxed">
            Experienced IT professional with 5+ years in IT support and digital transformation. 
            Specializing in business process automation, data integration, and empowering 
            organizations through scalable technology solutions across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownloadCV}
              className="btn-primary flex items-center justify-center gap-2 proza-libre-medium"
            >
              <Download size={20} />
              Download CV
            </button>
            
            <a
              href="#projects"
              className="btn-secondary flex items-center justify-center gap-2 proza-libre-medium"
            >
              <Eye size={20} />
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group cursor-pointer transition-all duration-300 hover:scale-110"
            aria-label="Scroll to next section"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center items-start pt-2 group-hover:border-gray-600 dark:group-hover:border-gray-300 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full group-hover:bg-gray-600 dark:group-hover:bg-gray-300 transition-colors duration-300 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

