import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.15 }}
          className="inline-block"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
