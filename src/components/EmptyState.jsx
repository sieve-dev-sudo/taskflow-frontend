import { ClipboardList, SearchX } from 'lucide-react'

function EmptyState({ message = 'No tasks yet', variant = 'default' }) {
  const Icon = variant === 'search' ? SearchX : ClipboardList

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-14 text-center dark:border-slate-700 dark:bg-slate-800/40">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 dark:bg-indigo-500/15 dark:text-indigo-300">
        <Icon className="h-7 w-7" />
      </span>
      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{message}</p>
    </div>
  )
}

export default EmptyState
