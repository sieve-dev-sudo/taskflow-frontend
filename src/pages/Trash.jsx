import { RotateCcw, XCircle, Trash2 } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../context/LanguageContext'
import EmptyState from '../components/EmptyState'
import { formatDate } from '../utils/date'

function Trash() {
  const { trashedTasks, restoreTask, permanentlyDeleteTask, emptyTrash } = useTasks()
  const { showToast } = useToast()
  const { t, locale } = useLanguage()

  const handleRestore = (id) => {
    restoreTask(id)
    showToast(t('toast.restored'), 'success')
  }

  const handlePermanentDelete = (id) => {
    permanentlyDeleteTask(id)
    showToast(t('toast.permanentlyDeleted'), 'delete')
  }

  const handleEmptyTrash = () => {
    emptyTrash()
    showToast(t('toast.trashEmptied'), 'delete')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {t('trash.title')}
        </h2>
        {trashedTasks.length > 0 && (
          <button
            onClick={handleEmptyTrash}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-red-600 border border-red-200 dark:border-red-900 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <Trash2 className="w-4 h-4" />
            {t('trash.empty')}
          </button>
        )}
      </div>

      {trashedTasks.length === 0 ? (
        <EmptyState message={t('empty.trash')} />
      ) : (
        <div className="space-y-2" role="list" aria-label={t('trash.listLabel')}>
          {trashedTasks.map((task) => (
            <div
              key={task.id}
              role="listitem"
              className="flex items-center justify-between gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800"
            >
              <div className="flex-1 min-w-0">
                <span className="text-slate-500 dark:text-slate-400 line-through">
                  {task.title}
                </span>
                <span className="block text-xs text-slate-400 dark:text-slate-500">
                  {t('trash.deletedOn', { date: formatDate(task.deletedAt, locale) })}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleRestore(task.id)}
                  aria-label={t('trash.restoreLabel', { title: task.title })}
                  className="flex items-center gap-1 text-sm text-indigo-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t('trash.restore')}
                </button>
                <button
                  onClick={() => handlePermanentDelete(task.id)}
                  aria-label={t('trash.deleteForeverLabel', { title: task.title })}
                  className="flex items-center gap-1 text-sm text-red-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
                >
                  <XCircle className="w-4 h-4" />
                  {t('trash.deleteForever')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Trash
