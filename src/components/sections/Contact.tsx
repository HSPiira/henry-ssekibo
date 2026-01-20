import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react'
import { sendContactEmail, type ContactFormData } from '~/server/contact'

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => sendContactEmail({ data }),
    onSuccess: () => {
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sekiboh@gmail.com',
      link: 'mailto:sekiboh@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+256 703 442 862',
      link: 'tel:+256703442862'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kampala, Uganda',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/henry-ssekibo' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/henry-ssekibo' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/henry_ssekibo' }
  ]

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: '-100px' }}
      className="sheet-alt section-padding flex flex-col justify-center"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-description">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <h3 className="font-medium text-zinc-900 dark:text-white mb-3">
                Let's connect
              </h3>
              <p className="text-body text-sm">
                I'm always interested in new opportunities. Whether you're looking for
                software development, or digital transformation consulting, I'm here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                >
                  <info.icon className="w-4 h-4 text-zinc-400" />
                  <span className="font-medium text-sm text-zinc-900 dark:text-white truncate">{info.value}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
              <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-4">
                Find me online
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-full flex flex-col">
              {/* Form Header */}
              <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="font-medium text-zinc-900 dark:text-white">
                  Send a message
                </h3>
              </div>

              {/* Form Body */}
              <div className="p-5 space-y-4 flex-1">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Form Footer */}
              <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {mutation.isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mt-4 p-3 border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-sm text-emerald-700 dark:text-emerald-300">
                      Message sent! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {mutation.isError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mt-4 p-3 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                    <span className="text-sm text-red-700 dark:text-red-300">
                      {mutation.error?.message || 'Failed to send. Please try again.'}
                    </span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              Built with care in Kampala, Uganda
            </p>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Henry Ssekibo. All rights reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}
