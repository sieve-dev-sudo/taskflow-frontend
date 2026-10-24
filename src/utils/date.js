import {
  isKhmerLocale,
  formatKhmerShortDate,
  formatKhmerLongDate,
  getKhmerWeekdayShort,
} from './khmerDate'

/**
 * Formats an ISO date string into a readable format (e.g. "Jan 15, 2026").
 * Khmer uses hand written month names because Intl often lacks Khmer data.
 * @param {string|null} dateString - ISO date string or null.
 * @param {string} [locale='en-US'] - BCP 47 locale such as "en-US" or "km-KH".
 * @returns {string} Formatted date, or empty string if input is falsy or invalid.
 */
export function formatDate(dateString, locale = 'en-US') {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return ''

  if (isKhmerLocale(locale)) return formatKhmerShortDate(date)

  return date.toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Formats a Date as a long label with the weekday (e.g. "Saturday, October 24").
 * @param {Date} date
 * @param {string} [locale='en-US']
 * @returns {string}
 */
export function formatLongDate(date, locale = 'en-US') {
  if (isKhmerLocale(locale)) return formatKhmerLongDate(date)

  return date.toLocaleDateString(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Formats a Date as a short weekday label (e.g. "Sat").
 * @param {Date} date
 * @param {string} [locale='en-US']
 * @returns {string}
 */
export function formatShortWeekday(date, locale = 'en-US') {
  if (isKhmerLocale(locale)) return getKhmerWeekdayShort(date)

  return date.toLocaleDateString(locale, { weekday: 'short' })
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
