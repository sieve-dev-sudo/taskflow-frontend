import { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskFilter from '../components/TaskFilter'
import SearchBar from '../components/SearchBar'
import StatsDashboard from '../components/StatsDashboard'
import StatsDashboardSkeleton from '../components/StatsDashboardSkeleton'
import BulkActionBar from '../components/BulkActionBar'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'

function Home() {
  const { tasks, isLoading, bulkComplete, bulkDelete } = useTasks()
  const { showToast } = useToast()
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState([])

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

  const handleBulkComplete = () => {
    bulkComplete(selectedIds)
    showToast(`${selectedIds.length} task(s) completed`, 'success')
    setSelectedIds([])
  }

  const handleBulkDelete = () => {
    bulkDelete(selectedIds)
    showToast(`${selectedIds.length} task(s) moved to trash`, 'delete')
    setSelectedIds([])
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        My Tasks
      </h2>
      {isLoading ? (
        <StatsDashboardSkeleton />
      ) : (
        <StatsDashboard tasks={tasks} />
      )}
      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm space-y-4">
        <TaskForm />
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <TaskFilter activeFilter={filter} onFilterChange={setFilter} />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
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
          selectedIds={selectedIds}
          onToggleSelect={handleToggleSelect}
        />
      )}
    </div>
  )
}

export default Home
