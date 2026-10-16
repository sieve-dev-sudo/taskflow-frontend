import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      aria-label={t('lang.switchLabel')}
      title={t('lang.switchLabel')}
      className="flex items-center justify-center gap-1.5 min-w-[5.5rem] px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <Languages className="w-4 h-4" />
      {language === 'km' ? 'ខ្មែរ' : 'EN'}
    </motion.button>
  )
}

export default LanguageToggle
