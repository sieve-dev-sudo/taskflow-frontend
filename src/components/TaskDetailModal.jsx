import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import PriorityBadge from './PriorityBadge'
import CategoryBadge from './CategoryBadge'
import { formatDate } from '../utils/date'

function TaskDetailModal({ task, onClose }) {
  const { updateNotes } = useTasks()
  const { showToast } = useToast()
  const [notes, setNotes] = useState(task.notes || '')

  useEffect(() => {
    setNotes(task.notes || '')
  }, [task])

  const handleSave = () => {
    if (notes !== task.notes) {
      updateNotes(task.id, notes)
      showToast('Notes saved', 'edit')
    }
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleSave()
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Task details"
    >
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pr-4">
            {task.title}
          </h3>
          <button
            onClick={handleSave}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <CategoryBadge category={task.category} />
          <PriorityBadge priority={task.priority} />
          {task.dueDate && (
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Due: {formatDate(task.dueDate)}
            </span>
          )}
        </div>

        <label htmlFor="task-notes" className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">
          Notes
        </label>
        <textarea
          id="task-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add details, links, or context for this task..."
          rows={5}
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        />

        <button
          onClick={handleSave}
          className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default TaskDetailModal
