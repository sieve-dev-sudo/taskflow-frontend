import { createContext, useContext, useState, useEffect } from 'react'
import { loadTasks, saveTasks } from '../utils/localStorage'

const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTasks(loadTasks())
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      saveTasks(tasks)
    }
  }, [tasks, isLoading])

  const addTask = (title, priority = 'medium', dueDate = null, category = 'General') => {
    const newTask = {
      id: Date.now().toString(),
      title,
      notes: '',
      completed: false,
      priority,
      dueDate,
      category,
      deleted: false,
      deletedAt: null,
      createdAt: new Date().toISOString(),
    }
    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    )
  }

  const updateNotes = (id, notes) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, notes } : task))
    )
  }

  const softDeleteTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, deleted: true, deletedAt: new Date().toISOString() }
          : task
      )
    )
  }

  const restoreTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, deleted: false, deletedAt: null } : task
      )
    )
  }

  const permanentlyDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const emptyTrash = () => {
    setTasks((prev) => prev.filter((task) => !task.deleted))
  }

  /** Marks multiple tasks as completed at once. */
  const bulkComplete = (ids) => {
    setTasks((prev) =>
      prev.map((task) =>
        ids.includes(task.id) ? { ...task, completed: true } : task
      )
    )
  }

  /** Moves multiple tasks to the trash at once. */
  const bulkDelete = (ids) => {
    const now = new Date().toISOString()
    setTasks((prev) =>
      prev.map((task) =>
        ids.includes(task.id) ? { ...task, deleted: true, deletedAt: now } : task
      )
    )
  }

  /** Restores multiple tasks from the trash at once. */
  const bulkRestore = (ids) => {
    setTasks((prev) =>
      prev.map((task) =>
        ids.includes(task.id) ? { ...task, deleted: false, deletedAt: null } : task
      )
    )
  }

  const activeTasks = tasks.filter((task) => !task.deleted)
  const trashedTasks = tasks.filter((task) => task.deleted)

  const value = {
    tasks: activeTasks,
    trashedTasks,
    isLoading,
    addTask,
    toggleTask,
    editTask,
    updateNotes,
    deleteTask: softDeleteTask,
    restoreTask,
    permanentlyDeleteTask,
    emptyTrash,
    bulkComplete,
    bulkDelete,
    bulkRestore,
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
