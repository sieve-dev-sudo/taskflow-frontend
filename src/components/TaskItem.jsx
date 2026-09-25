import { useState } from 'react'
import { Pencil, Trash2, AlertTriangle, StickyNote } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import PriorityBadge from './PriorityBadge'
import CategoryBadge from './CategoryBadge'
import TaskDetailModal from './TaskDetailModal'
import { formatDate, isOverdue } from '../utils/date'

function TaskItem({ task, isSelected = false, onToggleSelect }) {
  const { toggleTask, deleteTask, editTask, restoreTask } = useTasks()
  const { showToast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)
  const [showDetail, setShowDetail] = useState(false)

  const handleSave = () => {
    if (editValue.trim() && editValue.trim() !== task.title) {
      editTask(task.id, editValue.trim())
      showToast('Task updated', 'edit')
    }
    setIsEditing(false)
  }

  const handleDelete = () => {
    deleteTask(task.id)
    showToast('Task moved to trash', 'delete', {
      duration: 5000,
      action: {
        label: 'Undo',
        onClick: () => restoreTask(task.id),
      },
    })
  }

  const overdue = !task.completed && isOverdue(task.dueDate)
  const hasNotes = Boolean(task.notes && task.notes.trim())

  return (
    <>
      <div
        className={`flex items-start sm:items-center gap-3 p-3 border rounded-lg transition-colors ${
          isSelected
            ? 'border-indigo-300 dark:border-indigo-700 bg-indigo-50/50 dark:bg-indigo-950/30'
            : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
        }`}
        role="listitem"
      >
        {onToggleSelect && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggleSelect(task.id)}
            aria-label={`Select task: ${task.title}`}
            className="w-4 h-4 mt-1 sm:mt-0 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          />
        )}

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
          className="w-4 h-4 mt-1 sm:mt-0 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        />

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
              aria-label="Edit task title"
              className="w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded"
            />
          ) : (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <button
                onClick={() => setShowDetail(true)}
                onDoubleClick={(e) => {
                  e.stopPropagation()
                  setIsEditing(true)
                }}
                className={`text-left focus:outline-none focus-visible:underline ${
                  task.completed
                    ? 'line-through text-slate-400'
                    : 'text-slate-900 dark:text-slate-100'
                }`}
              >
                {task.title}
              </button>
              {hasNotes && (
                <StickyNote className="w-3.5 h-3.5 text-slate-400" aria-label="Has notes" />
              )}
              {task.dueDate && (
                <span
                  className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                    overdue
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 font-semibold'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {overdue && <AlertTriangle className="w-3 h-3" />}
                  {overdue ? 'Overdue: ' : 'Due: '}
                  {formatDate(task.dueDate)}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <CategoryBadge category={task.category} />
          <PriorityBadge priority={task.priority} />
          <button
            onClick={() => setIsEditing(true)}
            aria-label={`Edit task: ${task.title}`}
            className="text-indigo-600 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded p-1"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={handleDelete}
            aria-label={`Delete task: ${task.title}`}
            className="text-red-600 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded p-1"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showDetail && (
        <TaskDetailModal task={task} onClose={() => setShowDetail(false)} />
      )}
    </>
  )
}

export default TaskItem
