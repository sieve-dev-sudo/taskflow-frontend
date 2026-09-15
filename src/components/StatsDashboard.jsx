function StatsDashboard({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const active = total - completed
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)
  const isComplete = percentage === 100

  return (
    <div className="mb-6 p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-3">
        <span>{completed} of {total} tasks completed</span>
        <span className="font-semibold">{percentage}%</span>
      </div>
      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isComplete ? 'bg-green-500' : 'bg-indigo-600'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex gap-4 mt-4 text-xs">
        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
          Active: {active}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
          Completed: {completed}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
          Total: {total}
        </span>
      </div>
    </div>
  )
}

export default StatsDashboard
