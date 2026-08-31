function StatsDashboard({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const active = total - completed
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="mb-6 p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
        <span>{completed} of {total} tasks completed</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
        <span>Total: {total}</span>
      </div>
    </div>
  )
}

export default StatsDashboard
