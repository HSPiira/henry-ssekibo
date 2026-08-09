import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

/**
 * Reads and writes the document theme.
 *
 * The initial class is applied by the inline script in the document head so
 * there is no flash of the wrong theme. This hook only syncs React state to
 * what is already on the element, and owns subsequent changes.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setThemeState(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    )
    setMounted(true)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable in private modes. The theme still applies
      // for this page view; only persistence is lost.
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggle, mounted }
}

/**
 * Runs before first paint. Kept as a string so it can be inlined into <head>
 * ahead of the stylesheet, which is what prevents the theme flash.
 */
export const themeInitScript = `
(function(){
  try {
    document.documentElement.classList.add('js');
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`.trim()
