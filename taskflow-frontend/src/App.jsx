import Layout from './components/Layout'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'
import { useTasks } from './context/TaskContext'

function App() {
  const { tasks } = useTasks()

  return (
    <Layout>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
        My Tasks
      </h2>
      <TaskForm />
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </Layout>
  )
}

export default App
