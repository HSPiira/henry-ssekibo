'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()

  const navItems = useMemo(() => [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Wall of Fame', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ], [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const handleScroll = () => {
      // Clear existing timeout
      clearTimeout(timeoutId)
      
      // Add small delay to prevent rapid switching
      timeoutId = setTimeout(() => {
        const sections = navItems.map(item => item.href.substring(1))
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }, 50) // 50ms delay for smoother transitions
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [navItems])

  return (
    <nav className="fixed top-0 w-full bg-white/20 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/20 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Henry Ssekibo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-500 ease-in-out ${
                    isActive 
                      ? 'font-bold underline underline-offset-4' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  style={{
                    color: isActive ? '#0057FF' : undefined
                  }}
                >
                  {item.name}
                </Link>
              )
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg transition-all duration-500 ease-in-out ${
                      isActive 
                        ? 'font-bold underline underline-offset-4 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    style={{
                      color: isActive ? '#0057FF' : undefined
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

