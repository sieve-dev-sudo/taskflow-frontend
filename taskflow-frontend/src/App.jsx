import { useState } from 'react'
import Layout from './components/Layout'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import { useTasks } from './context/TaskContext'

function App() {
  const { tasks } = useTasks()
  const [filter, setFilter] = useState('All')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
        My Tasks
      </h2>
      <TaskForm />
      <TaskFilter activeFilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} />
    </Layout>
  )
}

export default App
