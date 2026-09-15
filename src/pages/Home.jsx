import { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import TaskFilter from '../components/TaskFilter'
import SearchBar from '../components/SearchBar'
import StatsDashboard from '../components/StatsDashboard'
import { useTasks } from '../context/TaskContext'

function Home() {
  const { tasks } = useTasks()
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'Active') return !task.completed
      if (filter === 'Completed') return task.completed
      return true
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        My Tasks
      </h2>
      <StatsDashboard tasks={tasks} />
      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
        <TaskForm />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <TaskFilter activeFilter={filter} onFilterChange={setFilter} />
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  )
}

export default Home
