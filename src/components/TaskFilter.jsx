import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const FILTERS = ['All', 'Active', 'Completed']

function TaskFilter({ activeFilter, onFilterChange, counts = {} }) {
  const { t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t('filter.group')}
      className="inline-flex self-start rounded-xl bg-slate-100 p-1 dark:bg-slate-800"
    >
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter
        const count = counts[filter]

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            aria-pressed={isActive}
            className={`relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 dark:focus-visible:ring-indigo-500/30 ${
              isActive
                ? 'text-slate-900 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-slate-700"
                transition={{ type: 'spring', stiffness: 500, damping: 36 }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              {t(`filter.${filter}`)}
              {count !== undefined && (
                <span
                  className={`rounded-full px-1.5 py-0.5 text-xs tabular-nums ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200'
                      : 'bg-slate-200/80 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default TaskFilter
