/**
 * Khmer names for weekdays and months, written by hand because the browser's
 * Intl API often falls back to English for Khmer.
 */

export const KHMER_MONTHS = [
  'មករា',
  'កុម្ភៈ',
  'មីនា',
  'មេសា',
  'ឧសភា',
  'មិថុនា',
  'កក្កដា',
  'សីហា',
  'កញ្ញា',
  'តុលា',
  'វិច្ឆិកា',
  'ធ្នូ',
]

export const KHMER_WEEKDAYS = [
  'អាទិត្យ',
  'ច័ន្ទ',
  'អង្គារ',
  'ពុធ',
  'ព្រហស្បតិ៍',
  'សុក្រ',
  'សៅរ៍',
]

export const KHMER_WEEKDAYS_SHORT = ['អា', 'ច', 'អ', 'ពុ', 'ព្រ', 'សុ', 'ស']

/** Set to true to show Khmer numerals (២៤) in dates instead of Latin digits (24). */
export const USE_KHMER_DIGITS = false

const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']

/**
 * @param {string} locale - for example "km-KH" or "en-US".
 * @returns {boolean} True when the locale is Khmer.
 */
export function isKhmerLocale(locale) {
  return typeof locale === 'string' && locale.toLowerCase().startsWith('km')
}

function digits(value) {
  const text = String(value)
  return USE_KHMER_DIGITS
    ? text.replace(/\d/g, (digit) => KHMER_DIGITS[Number(digit)])
    : text
}

/**
 * Long date with weekday, for example "ថ្ងៃសៅរ៍ ទី 24 ខែតុលា".
 * @param {Date} date
 * @returns {string}
 */
export function formatKhmerLongDate(date) {
  const weekday = KHMER_WEEKDAYS[date.getDay()]
  const month = KHMER_MONTHS[date.getMonth()]
  return `ថ្ងៃ${weekday} ទី ${digits(date.getDate())} ខែ${month}`
}

/**
 * Short date, for example "30 កញ្ញា 2026".
 * @param {Date} date
 * @returns {string}
 */
export function formatKhmerShortDate(date) {
  const month = KHMER_MONTHS[date.getMonth()]
  return `${digits(date.getDate())} ${month} ${digits(date.getFullYear())}`
}

/**
 * Full weekday name, for example "សៅរ៍" for Saturday.
 * @param {Date} date
 * @returns {string}
 */
export function getKhmerWeekday(date) {
  return KHMER_WEEKDAYS[date.getDay()]
}

/**
 * Short weekday label, for example "ស" for Saturday.
 * @param {Date} date
 * @returns {string}
 */
export function getKhmerWeekdayShort(date) {
  return KHMER_WEEKDAYS_SHORT[date.getDay()]
}
