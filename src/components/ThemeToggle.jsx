import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </motion.button>
  )
}

export default ThemeToggle
