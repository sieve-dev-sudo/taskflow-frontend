function StatsDashboardSkeleton() {
  return (
    <div className="card animate-pulse p-5" aria-hidden="true">
      <div className="flex items-end justify-between">
        <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-8 w-14 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
      <div className="mt-3 h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="h-14 rounded-xl bg-slate-100 dark:bg-slate-700/60" />
        <div className="h-14 rounded-xl bg-slate-100 dark:bg-slate-700/60" />
        <div className="h-14 rounded-xl bg-slate-100 dark:bg-slate-700/60" />
      </div>
    </div>
  )
}

export default StatsDashboardSkeleton
