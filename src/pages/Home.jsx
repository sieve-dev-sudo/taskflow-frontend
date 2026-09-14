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
    <>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
        My Tasks
      </h2>
      <StatsDashboard tasks={tasks} />
      <TaskForm />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <TaskFilter activeFilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} />
    </>
  )
}

export default Home
