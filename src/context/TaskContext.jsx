import { createContext, useContext, useState, useEffect } from 'react'
import { loadTasks, saveTasks } from '../utils/localStorage'

const TaskContext = createContext(null)

/**
 * Provides task state and CRUD operations to all child components.
 * Automatically persists tasks to localStorage on every change.
 *
 * @param {{ children: React.ReactNode }} props
 */
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => loadTasks())

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  /**
   * Adds a new task to the list.
   * @param {string} title - The task title.
   * @param {'low'|'medium'|'high'} [priority='medium'] - Priority level.
   * @param {string|null} [dueDate=null] - ISO date string or null.
   * @param {string} [category='General'] - Task category.
   */
  const addTask = (title, priority = 'medium', dueDate = null, category = 'General') => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority,
      dueDate,
      category,
      createdAt: new Date().toISOString(),
    }
    setTasks((prev) => [...prev, newTask])
  }

  /**
   * Toggles a task's completed state.
   * @param {string} id - The task ID.
   */
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  /**
   * Removes a task from the list.
   * @param {string} id - The task ID.
   */
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  /**
   * Updates a task's title.
   * @param {string} id - The task ID.
   * @param {string} newTitle - The new title.
   */
  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    )
  }

  const value = {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

/**
 * Hook to access task state and operations from TaskContext.
 * Must be used within a TaskProvider.
 * @returns {{tasks: object[], addTask: Function, toggleTask: Function, deleteTask: Function, editTask: Function}}
 */
export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider')
  }
  return context
}
