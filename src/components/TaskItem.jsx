import { useState } from 'react'
import { Pencil, Trash2, AlertTriangle } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import PriorityBadge from './PriorityBadge'
import CategoryBadge from './CategoryBadge'
import { formatDate, isOverdue } from '../utils/date'

function TaskItem({ task }) {
  const { toggleTask, deleteTask, editTask } = useTasks()
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)

  const handleSave = () => {
    if (editValue.trim()) {
      editTask(task.id, editValue.trim())
    }
    setIsEditing(false)
  }

  const overdue = !task.completed && isOverdue(task.dueDate)

  return (
    <div
      className="flex items-start sm:items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
      role="listitem"
    >
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
            <span
              onDoubleClick={() => setIsEditing(true)}
              className={`${
                task.completed
                  ? 'line-through text-slate-400'
                  : 'text-slate-900 dark:text-slate-100'
              }`}
            >
              {task.title}
            </span>
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
          onClick={() => deleteTask(task.id)}
          aria-label={`Delete task: ${task.title}`}
          className="text-red-600 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded p-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default TaskItem
