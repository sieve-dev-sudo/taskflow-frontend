import { Search } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1">
      <label htmlFor="task-search" className="sr-only">Search tasks</label>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        id="task-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
        aria-label="Search tasks"
        className="w-full pl-10 pr-4 py-1.5 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      />
    </div>
  )
}

export default SearchBar
