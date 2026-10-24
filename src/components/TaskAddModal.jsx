import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import TaskForm from './TaskForm'

/**
 * Popup for creating a new task. It reuses TaskForm in its embedded layout.
 * @param {{ onClose: () => void }} props
 */
function TaskAddModal({ onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleBackdropMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={handleBackdropMouseDown}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-task-heading"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800"
      >
        <div className="mb-5 flex items-start justify-between">
          <h3
            id="add-task-heading"
            className="text-lg font-semibold text-slate-900 dark:text-slate-100"
          >
            {t('add.title')}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('detail.close')}
            className="rounded p-1 text-slate-400 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <TaskForm embedded autoFocus onSubmitted={onClose} onCancel={onClose} />
      </motion.div>
    </motion.div>,
    document.body
  )
}

export default TaskAddModal
