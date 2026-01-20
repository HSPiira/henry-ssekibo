import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="snap-section relative flex items-center bg-zinc-100 dark:bg-zinc-900">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="badge">
              <span className="badge-status">
                <span className="badge-status-dot" />
                <span className="badge-status-core" />
              </span>
              <span>Available for new opportunities</span>
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-zinc-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              Henry
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-emerald-400/30 dark:bg-emerald-500/30 -z-10"
              />
            </span>
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">
              I build systems that last.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-body-lg max-w-2xl mb-10"
          >
            Senior Software Engineer | Digital Transformation Specialist based in Kampala.<br></br>
            I help organizations streamline operations, automate workflows, and embrace
            technology that actually makes a difference.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#about" className="btn-ghost">
              Learn more about me
            </a>
          </motion.div>

          {/* Quick stats - subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800"
          >
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {[
                { value: '5+', label: 'years experience' },
                { value: '25+', label: 'projects delivered' },
                { value: '200+', label: 'users supported' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm text-zinc-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating accent element - positioned to not overlap content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden xl:flex absolute right-12 bottom-20 pointer-events-none"
        >
          <div className="relative opacity-60">
            <div className="w-56 h-56 border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-medium text-zinc-500">Currently</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Driving digital transformation at Minet Uganda.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Power BI', 'Python', 'Azure'].map(tech => (
                  <span key={tech} className="tag-sm">{tech}</span>
                ))}
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-emerald-500/20 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
