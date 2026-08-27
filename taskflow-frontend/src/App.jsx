import Layout from './components/Layout'
import { useTasks } from './context/TaskContext'

function App() {
  const { tasks, addTask } = useTasks()

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Welcome to TaskFlow
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Tasks count: {tasks.length}
      </p>
      <button
        onClick={() => addTask('Test task')}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Add Test Task
      </button>
    </Layout>
  )
}

export default App
