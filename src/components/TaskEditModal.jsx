import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../context/LanguageContext'
import { CATEGORIES } from '../utils/categories'

const fieldClass =
  'w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'

const labelClass = 'block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1'

function TaskEditModal({ task, onClose }) {
  const { updateTask } = useTasks()
  const { showToast } = useToast()
  const { t } = useLanguage()

  const [title, setTitle] = useState(task.title)
  const [category, setCategory] = useState(task.category || 'General')
  const [priority, setPriority] = useState(task.priority || 'medium')
  const [dueDate, setDueDate] = useState(task.dueDate || '')
  const [notes, setNotes] = useState(task.notes || '')
  const [error, setError] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedTitle = title.trim()

    if (!trimmedTitle) {
      setError(t('edit.titleRequired'))
      return
    }

    const hasChanges =
      trimmedTitle !== task.title ||
      category !== (task.category || 'General') ||
      priority !== (task.priority || 'medium') ||
      (dueDate || null) !== (task.dueDate || null) ||
      notes !== (task.notes || '')

    if (hasChanges) {
      updateTask(task.id, {
        title: trimmedTitle,
        category,
        priority,
        dueDate: dueDate || null,
        notes,
      })
      showToast(t('toast.taskUpdated'), 'edit')
    }

    onClose()
  }

  const handleBackdropMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onMouseDown={handleBackdropMouseDown}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-task-heading"
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6"
      >
        <div className="flex items-start justify-between mb-5">
          <h3
            id="edit-task-heading"
            className="text-lg font-semibold text-slate-900 dark:text-slate-100"
          >
            {t('edit.title')}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('detail.close')}
            className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="edit-task-title" className={labelClass}>
              {t('form.titleLabel')}
            </label>
            <input
              id="edit-task-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (error) setError('')
              }}
              autoFocus
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'edit-task-error' : undefined}
              className={fieldClass}
            />
            {error && (
              <p
                id="edit-task-error"
                role="alert"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
              >
                {error}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="edit-task-category" className={labelClass}>
                {t('form.categoryLabel')}
              </label>
              <select
                id="edit-task-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={fieldClass}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {t(`category.${cat}`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="edit-task-priority" className={labelClass}>
                {t('form.priorityLabel')}
              </label>
              <select
                id="edit-task-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className={fieldClass}
              >
                <option value="low">{t('priority.low')}</option>
                <option value="medium">{t('priority.medium')}</option>
                <option value="high">{t('priority.high')}</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="edit-task-due-date" className={labelClass}>
              {t('form.dueDateLabel')}
            </label>
            <input
              id="edit-task-due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="edit-task-notes" className={labelClass}>
              {t('detail.notes')}
            </label>
            <textarea
              id="edit-task-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('detail.notesPlaceholder')}
              rows={4}
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {t('edit.cancel')}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              {t('edit.save')}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>,
    document.body
  )
}

export default TaskEditModal
