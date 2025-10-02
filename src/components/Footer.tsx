import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Henry Ssekibo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              IT Support & Digital Transformation Specialist
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Wall of Fame
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="mailto:henry.ssekibo@example.com"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/henry-ssekibo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://github.com/henry-ssekibo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Henry Ssekibo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

