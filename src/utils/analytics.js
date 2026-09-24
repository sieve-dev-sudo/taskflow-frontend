import { CATEGORIES } from './categories'

/**
 * Counts active (non-deleted) tasks grouped by category.
 * @param {object[]} tasks
 * @returns {{name: string, value: number}[]}
 */
export function getTasksByCategory(tasks) {
  return CATEGORIES.map((category) => ({
    name: category,
    value: tasks.filter((task) => task.category === category).length,
  })).filter((entry) => entry.value > 0)
}

/**
 * Counts active (non-deleted) tasks grouped by priority.
 * @param {object[]} tasks
 * @returns {{name: string, count: number}[]}
 */
export function getTasksByPriority(tasks) {
  const levels = ['low', 'medium', 'high']
  return levels.map((level) => ({
    name: level.charAt(0).toUpperCase() + level.slice(1),
    count: tasks.filter((task) => task.priority === level).length,
  }))
}

/**
 * Builds a 7-day completion trend ending today.
 * @param {object[]} tasks
 * @returns {{day: string, completed: number}[]}
 */
export function getCompletionTrend(tasks) {
  const days = []
  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    date.setHours(0, 0, 0, 0)
    days.push(date)
  }

  return days.map((day) => {
    const nextDay = new Date(day)
    nextDay.setDate(nextDay.getDate() + 1)

    const completed = tasks.filter((task) => {
      if (!task.completed) return false
      const created = new Date(task.createdAt)
      return created >= day && created < nextDay
    }).length

    return {
      day: day.toLocaleDateString('en-US', { weekday: 'short' }),
      completed,
    }
  })
}
