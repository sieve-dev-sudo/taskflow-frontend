const FILTERS = ['All', 'Active', 'Completed']

function TaskFilter({ activeFilter, onFilterChange }) {
  return (
    <div className="flex gap-2 mb-4">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1 rounded-full text-sm ${
            activeFilter === filter
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter
