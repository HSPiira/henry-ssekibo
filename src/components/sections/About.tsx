import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="sheet section-padding flex flex-col justify-center"
    >
      <div className="container-custom">
        {/* Section intro */}
        <div className="max-w-3xl mb-16">
          <span className="section-label">About me</span>
          <h2 className="section-title">
            I turn complex problems into simple, elegant solutions
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-body-lg">
                With over <span className="text-emerald-600 dark:text-emerald-400 font-medium">5 years</span> in IT,
                I've learned that the best technology is the kind you don't notice—it just works.
                That's what I strive to create.
              </p>

              <p className="text-body">
                My journey started with a simple curiosity: how can technology make work easier?
                That question has guided me from fixing network issues to leading digital transformation initiatives.
              </p>

              <p className="text-body">
                At Minet Uganda, I've had the privilege of implementing systems that serve over
                <span className="text-emerald-600 dark:text-emerald-400 font-medium"> 200 users</span> across
                multiple departments. From automating repetitive workflows to building custom reporting dashboards,
                I focus on solutions that genuinely improve people's day-to-day work.
              </p>

              <p className="text-body">
                When I'm not optimizing systems, you'll find me exploring new technologies,
                mentoring aspiring IT professionals, or thinking about the next big challenge to tackle.
              </p>

              {/* Highlight */}
              <div className="mt-8 p-5 border-l-2 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                  <p className="text-zinc-600 dark:text-zinc-400">
                    <span className="font-medium text-zinc-900 dark:text-white">What drives me:</span> Seeing
                    the "aha" moment when a complex process becomes effortless.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact numbers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="font-medium text-zinc-900 dark:text-white">
                  Impact by the numbers
                </h3>
              </div>
              <div className="grid grid-cols-2">
                {[
                  { value: '25%', label: 'efficiency increase' },
                  { value: '60%', label: 'less manual work' },
                  { value: '30%', label: 'better reliability' },
                  { value: '45%', label: 'reduced downtime' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className={`p-6 ${i < 2 ? 'border-b' : ''} ${i % 2 === 0 ? 'border-r' : ''} border-zinc-200 dark:border-zinc-800`}
                  >
                    <div className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-500 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What I value */}
            <div className="mt-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-medium text-zinc-900 dark:text-white mb-4">
                What I value
              </h3>
              <ul className="space-y-3">
                {[
                  'Building solutions that save time and reduce friction',
                  'Technology that empowers people, not complicates their lives',
                  'Every project should move the needle on real outcomes'
                ].map((value, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
