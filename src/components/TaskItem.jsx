import { useState } from 'react'
import { useTasks } from '../context/TaskContext'
import PriorityBadge from './PriorityBadge'
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
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-4 h-4 shrink-0"
        />

        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            autoFocus
            className="flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded"
          />
        ) : (
          <div className="flex-1">
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
                className={`ml-2 text-xs ${
                  overdue ? 'text-red-600 font-semibold' : 'text-slate-400'
                }`}
              >
                {overdue ? '⚠ Overdue: ' : 'Due: '}
                {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 ml-7 sm:ml-0">
        <PriorityBadge priority={task.priority} />
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm text-indigo-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
