function StatsDashboardSkeleton() {
  return (
    <div className="mb-6 p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm animate-pulse">
      <div className="flex justify-between mb-3">
        <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-4 w-10 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>
      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
      <div className="flex gap-4 mt-4">
        <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
        <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>
    </div>
  )
}

export default StatsDashboardSkeleton
