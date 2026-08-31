const STORAGE_KEY = 'taskflow-tasks'

export function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) {
      console.warn('Stored tasks data is not an array, resetting.')
      return []
    }
    return parsed
  } catch (error) {
    console.error('Failed to load tasks from localStorage:', error)
    return []
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error)
  }
}
