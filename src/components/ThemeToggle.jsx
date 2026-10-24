import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      aria-label={theme === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')}
      className="inline-flex min-w-[5.5rem] items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus-visible:ring-indigo-500/20"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-4 w-4" />
          {t('theme.dark')}
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          {t('theme.light')}
        </>
      )}
    </motion.button>
  )
}

export default ThemeToggle
