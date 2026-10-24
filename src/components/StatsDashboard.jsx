import { CheckCircle2, Clock, ListTodo } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function StatTile({ icon: Icon, label, value, tone }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/60">
      <span
        className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:flex ${tone}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xl font-bold leading-none tabular-nums text-slate-900 dark:text-slate-100">
          {value}
        </p>
        <p className="mt-1 truncate text-xs text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    </div>
  )
}

function StatsDashboard({ tasks }) {
  const { t } = useLanguage()
  const total = tasks.length
  const completed = tasks.filter((task) => task.completed).length
  const active = total - completed
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)
  const isComplete = total > 0 && percentage === 100
  const summary = t('stats.completedOf', { completed, total })

  return (
    <section className="card p-5">
      <div className="flex items-end justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">{summary}</p>
        <p className="text-3xl font-bold tabular-nums text-slate-900 dark:text-slate-100">
          {percentage}
          <span className="text-lg text-slate-400">%</span>
        </p>
      </div>

      <div
        role="progressbar"
        aria-label={summary}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700"
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 ease-out ${
            isComplete ? 'bg-emerald-500' : 'bg-linear-to-r from-indigo-500 to-violet-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <StatTile
          icon={Clock}
          label={t('stats.activeLabel')}
          value={active}
          tone="bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300"
        />
        <StatTile
          icon={CheckCircle2}
          label={t('stats.completedLabel')}
          value={completed}
          tone="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
        />
        <StatTile
          icon={ListTodo}
          label={t('stats.totalLabel')}
          value={total}
          tone="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300"
        />
      </div>
    </section>
  )
}

export default StatsDashboard
