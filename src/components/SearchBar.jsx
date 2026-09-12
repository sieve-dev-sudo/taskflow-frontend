function SearchBar({ value, onChange }) {
  return (
    <>
      <label htmlFor="task-search" className="sr-only">Search tasks</label>
      <input
        id="task-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
        aria-label="Search tasks"
        className="w-full px-4 py-2 mb-4 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
      />
    </>
  )
}

export default SearchBar
