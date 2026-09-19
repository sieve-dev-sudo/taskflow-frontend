import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import { CATEGORIES } from '../utils/categories'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('General')
  const { addTask } = useTasks()
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask(title.trim(), priority, dueDate || null, category)
    showToast('Task added!', 'success')
    setTitle('')
    setPriority('medium')
    setDueDate('')
    setCategory('General')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-4" aria-label="Add new task form">
      <div>
        <label htmlFor="task-title" className="sr-only">Task title</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          aria-required="true"
          className="w-full px-4 py-3 text-base border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="task-category" className="sr-only">Category</label>
        <select
          id="task-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label htmlFor="task-priority" className="sr-only">Priority level</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label htmlFor="task-due-date" className="sr-only">Due date</label>
        <input
          id="task-due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        />

        <button
          type="submit"
          aria-label="Add task"
          className="flex items-center justify-center gap-1.5 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:w-auto w-full"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>
    </form>
  )
}

export default TaskForm
