import { ClipboardList, SearchX } from 'lucide-react'

function EmptyState({ message = 'No tasks yet', variant = 'default' }) {
  const Icon = variant === 'search' ? SearchX : ClipboardList

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Icon className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-3" />
      <p className="text-slate-400 dark:text-slate-500 text-sm">
        {message}
      </p>
    </div>
  )
}

export default EmptyState
