import { CheckSquare, Trash2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function BulkActionBar({ selectedCount, onComplete, onDelete, onClear }) {
  const { t } = useLanguage()

  return (
    <AnimatePresence>
      {selectedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="flex items-center justify-between gap-3 p-3 mb-3 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-900"
        >
          <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
            {selectedCount === 1
              ? t('bulk.selectedOne')
              : t('bulk.selectedMany', { count: selectedCount })}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onComplete}
              aria-label={t('bulk.completeLabel')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-green-700 dark:text-green-400 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-900 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            >
              <CheckSquare className="w-4 h-4" />
              {t('bulk.complete')}
            </button>
            <button
              onClick={onDelete}
              aria-label={t('bulk.deleteLabel')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-600 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <Trash2 className="w-4 h-4" />
              {t('bulk.delete')}
            </button>
            <button
              onClick={onClear}
              aria-label={t('bulk.clearLabel')}
              className="p-1.5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BulkActionBar
