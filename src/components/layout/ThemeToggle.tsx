import { Moon, Sun } from 'lucide-react'
import { useTheme } from '~/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle, mounted } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      className="btn-icon"
      aria-label={
        mounted
          ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
          : 'Switch theme'
      }
    >
      {/* Both icons render; CSS picks one, so there is no hydration mismatch. */}
      <Sun className="w-4 h-4 hidden dark:block" aria-hidden />
      <Moon className="w-4 h-4 block dark:hidden" aria-hidden />
    </button>
  )
}
