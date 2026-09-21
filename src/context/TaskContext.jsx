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

  /** Moves a task to the trash instead of removing it right away. */
  const softDeleteTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, deleted: true, deletedAt: new Date().toISOString() }
          : task
      )
    )
  }

  /** Brings a trashed task back to the active task list. */
  const restoreTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, deleted: false, deletedAt: null } : task
      )
    )
  }

  /** Removes a task from storage permanently. */
  const permanentlyDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  /** Permanently removes every task currently in the trash. */
  const emptyTrash = () => {
    setTasks((prev) => prev.filter((task) => !task.deleted))
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
    deleteTask: softDeleteTask,
    restoreTask,
    permanentlyDeleteTask,
    emptyTrash,
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
