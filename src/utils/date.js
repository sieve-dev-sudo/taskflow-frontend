/**
 * Formats an ISO date string into a readable format (e.g. "Jan 15, 2026").
 * @param {string|null} dateString - ISO date string or null.
 * @returns {string} Formatted date, or empty string if input is falsy.
 */
export function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Checks whether a given date string is before today (i.e. overdue).
 * @param {string|null} dateString - ISO date string or null.
 * @returns {boolean} True if the date is in the past.
 */
export function isOverdue(dateString) {
  if (!dateString) return false
  const dueDate = new Date(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return dueDate < today
}
