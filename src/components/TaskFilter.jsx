import { motion } from 'framer-motion'

const FILTERS = ['All', 'Active', 'Completed']

function TaskFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="flex gap-2" role="group" aria-label="Filter tasks">
      {FILTERS.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          whileTap={{ scale: 0.95 }}
          aria-pressed={activeFilter === filter}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  )
}

export default TaskFilter
