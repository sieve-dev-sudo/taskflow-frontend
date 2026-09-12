/**
 * Available task categories.
 * @type {string[]}
 */
export const CATEGORIES = ['General', 'Work', 'Personal', 'Shopping', 'Health']

/**
 * Tailwind class mappings for each category's badge color.
 * @type {Object.<string, string>}
 */
export const CATEGORY_STYLES = {
  General: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  Work: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  Personal: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  Shopping: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  Health: 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300',
}
