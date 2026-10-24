import { useState } from 'react'
import { CheckSquare, Plus } from 'lucide-react'
import TaskAddModal from '../components/TaskAddModal'
import TaskList from '../components/TaskList'
import TaskFilter from '../components/TaskFilter'
import SearchBar from '../components/SearchBar'
import StatsDashboard from '../components/StatsDashboard'
import StatsDashboardSkeleton from '../components/StatsDashboardSkeleton'
import BulkActionBar from '../components/BulkActionBar'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../context/LanguageContext'
import { formatLongDate } from '../utils/date'
import { getGreetingKey } from '../utils/greeting'

function Home() {
  const { tasks, isLoading, bulkComplete, bulkDelete } = useTasks()
  const { showToast } = useToast()
  const { t, locale } = useLanguage()
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectionMode, setSelectionMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState([])
  const [showAdd, setShowAdd] = useState(false)

  const now = new Date()
  const greetingKey = getGreetingKey(now.getHours())
  const dateLabel = formatLongDate(now, locale)

  const completedCount = tasks.filter((task) => task.completed).length
  const remaining = tasks.length - completedCount
  const counts = {
    All: tasks.length,
    Active: remaining,
    Completed: completedCount,
  }

  let summary
  if (tasks.length === 0) summary = t('home.summaryNone')
  else if (remaining === 0) summary = t('home.summaryDone')
  else if (remaining === 1) summary = t('home.summaryOne')
  else summary = t('home.summaryLeft', { count: remaining })

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'Active') return !task.completed
      if (filter === 'Completed') return task.completed
      return true
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const hasActiveSearch = searchQuery.trim().length > 0 && tasks.length > 0

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleToggleSelectionMode = () => {
    setSelectionMode((prev) => !prev)
    setSelectedIds([])
  }

  const handleBulkComplete = () => {
    bulkComplete(selectedIds)
    showToast(t('toast.bulkCompleted', { count: selectedIds.length }), 'success')
    setSelectedIds([])
    setSelectionMode(false)
  }

  const handleBulkDelete = () => {
    bulkDelete(selectedIds)
    showToast(t('toast.bulkTrashed', { count: selectedIds.length }), 'delete')
    setSelectedIds([])
    setSelectionMode(false)
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
            {dateLabel}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {t(greetingKey)}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">{summary}</p>
        </div>

        <button
          type="button"
          onClick={() => setShowAdd(true)}
          className="btn-primary w-full whitespace-nowrap sm:w-auto"
        >
          <Plus className="h-4 w-4" />
          {t('form.addTask')}
        </button>
      </header>

      {isLoading ? <StatsDashboardSkeleton /> : <StatsDashboard tasks={tasks} />}

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {t('home.title')}
          </h2>
          {tasks.length > 0 && (
            <button
              onClick={handleToggleSelectionMode}
              aria-pressed={selectionMode}
              className={
                selectionMode
                  ? 'inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 dark:focus-visible:ring-indigo-500/30'
                  : 'btn-ghost'
              }
            >
              <CheckSquare className="h-4 w-4" />
              {selectionMode ? t('home.cancel') : t('home.select')}
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <TaskFilter
            activeFilter={filter}
            onFilterChange={setFilter}
            counts={counts}
          />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <BulkActionBar
          selectedCount={selectedIds.length}
          onComplete={handleBulkComplete}
          onDelete={handleBulkDelete}
          onClear={() => setSelectedIds([])}
        />

        {!isLoading && (
          <TaskList
            tasks={filteredTasks}
            hasActiveSearch={hasActiveSearch}
            selectionMode={selectionMode}
            selectedIds={selectedIds}
            onToggleSelect={handleToggleSelect}
          />
        )}
      </section>

      {showAdd && <TaskAddModal onClose={() => setShowAdd(false)} />}
    </div>
  )
}

export default Home
