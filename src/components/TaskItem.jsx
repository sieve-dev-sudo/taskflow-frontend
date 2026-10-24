import { useState } from 'react'
import { Pencil, Trash2, AlertTriangle, StickyNote, Calendar, Check } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../context/LanguageContext'
import PriorityBadge from './PriorityBadge'
import CategoryBadge from './CategoryBadge'
import TaskDetailModal from './TaskDetailModal'
import TaskEditModal from './TaskEditModal'
import { formatDate, isOverdue } from '../utils/date'

const ACCENT = {
  low: 'bg-emerald-400',
  medium: 'bg-amber-400',
  high: 'bg-rose-500',
}

function CheckControl({ checked, onChange, label, square = false }) {
  return (
    <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
        className={`peer h-5 w-5 cursor-pointer appearance-none border-2 border-slate-300 bg-white transition-colors hover:border-indigo-400 checked:border-indigo-600 checked:bg-indigo-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:focus-visible:ring-indigo-500/30 ${
          square ? 'rounded-md' : 'rounded-full'
        }`}
      />
      <Check
        strokeWidth={3}
        className="pointer-events-none absolute inset-0 m-auto h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
      />
    </span>
  )
}

function TaskItem({ task, selectionMode = false, isSelected = false, onToggleSelect }) {
  const { toggleTask, deleteTask, editTask, restoreTask } = useTasks()
  const { showToast } = useToast()
  const { t, locale } = useLanguage()
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)
  const [showDetail, setShowDetail] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const handleSave = () => {
    if (editValue.trim() && editValue.trim() !== task.title) {
      editTask(task.id, editValue.trim())
      showToast(t('toast.taskUpdated'), 'edit')
    }
    setIsEditing(false)
  }

  const handleDelete = () => {
    deleteTask(task.id)
    showToast(t('toast.movedToTrash'), 'delete', {
      duration: 5000,
      action: {
        label: t('toast.undo'),
        onClick: () => restoreTask(task.id),
      },
    })
  }

  const overdue = !task.completed && isOverdue(task.dueDate)
  const hasNotes = Boolean(task.notes && task.notes.trim())
  const accent = task.completed
    ? 'bg-slate-300 dark:bg-slate-600'
    : ACCENT[task.priority] || ACCENT.medium

  return (
    <>
      <div
        role="listitem"
        className={`group relative flex items-start gap-3 overflow-hidden rounded-2xl border p-4 pl-5 shadow-sm transition-all ${
          isSelected
            ? 'border-indigo-300 bg-indigo-50/60 dark:border-indigo-700 dark:bg-indigo-950/30'
            : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600'
        }`}
      >
        <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1 ${accent}`} />

        {selectionMode ? (
          <CheckControl
            square
            checked={isSelected}
            onChange={() => onToggleSelect(task.id)}
            label={t('task.select', { title: task.title })}
          />
        ) : (
          <CheckControl
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            label={
              task.completed
                ? t('task.markIncomplete', { title: task.title })
                : t('task.markComplete', { title: task.title })
            }
          />
        )}

        <div className="min-w-0 flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
              aria-label={t('task.editInput')}
              className="field py-1.5"
            />
          ) : (
            <>
              <div className="flex items-start gap-2">
                <button
                  onClick={() =>
                    selectionMode ? onToggleSelect(task.id) : setShowDetail(true)
                  }
                  onDoubleClick={(e) => {
                    e.stopPropagation()
                    if (!selectionMode) setIsEditing(true)
                  }}
                  className={`break-words text-left text-base font-medium leading-snug focus:outline-none focus-visible:underline ${
                    task.completed
                      ? 'text-slate-400 line-through dark:text-slate-500'
                      : 'text-slate-900 dark:text-slate-100'
                  }`}
                >
                  {task.title}
                </button>
                {hasNotes && (
                  <StickyNote
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400"
                    aria-label={t('task.hasNotes')}
                  />
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <CategoryBadge category={task.category} />
                <PriorityBadge priority={task.priority} />
                {task.dueDate && (
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ${
                      overdue
                        ? 'bg-red-100 font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300'
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                    }`}
                  >
                    {overdue ? (
                      <AlertTriangle className="h-3 w-3" />
                    ) : (
                      <Calendar className="h-3 w-3" />
                    )}
                    {overdue ? t('task.overdue') : t('task.due')}
                    {formatDate(task.dueDate, locale)}
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {!selectionMode && (
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={() => setShowEdit(true)}
              aria-label={t('task.editLabel', { title: task.title })}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-300 dark:focus-visible:ring-indigo-500/30"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={handleDelete}
              aria-label={t('task.deleteLabel', { title: task.title })}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200 dark:hover:bg-rose-500/15 dark:hover:text-rose-300 dark:focus-visible:ring-rose-500/30"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {showDetail && (
        <TaskDetailModal task={task} onClose={() => setShowDetail(false)} />
      )}

      {showEdit && (
        <TaskEditModal task={task} onClose={() => setShowEdit(false)} />
      )}
    </>
  )
}

export default TaskItem
