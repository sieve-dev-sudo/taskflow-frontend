import { useTasks } from '../context/TaskContext'
import CategoryPieChart from '../components/CategoryPieChart'
import PriorityBarChart from '../components/PriorityBarChart'
import CompletionTrendChart from '../components/CompletionTrendChart'
import { getTasksByCategory, getTasksByPriority, getCompletionTrend } from '../utils/analytics'

function Analytics() {
  const { tasks } = useTasks()

  const categoryData = getTasksByCategory(tasks)
  const priorityData = getTasksByPriority(tasks)
  const trendData = getCompletionTrend(tasks)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Tasks by Category
          </h3>
          <CategoryPieChart data={categoryData} />
        </div>

        <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Tasks by Priority
          </h3>
          <PriorityBarChart data={priorityData} />
        </div>
      </div>

      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
          Completed Tasks (Last 7 Days)
        </h3>
        <CompletionTrendChart data={trendData} />
      </div>
    </div>
  )
}

export default Analytics
