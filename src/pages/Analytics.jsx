import { useTasks } from '../context/TaskContext'
import { useLanguage } from '../context/LanguageContext'
import CategoryPieChart from '../components/CategoryPieChart'
import PriorityBarChart from '../components/PriorityBarChart'
import CompletionTrendChart from '../components/CompletionTrendChart'
import { getTasksByCategory, getTasksByPriority, getCompletionTrend } from '../utils/analytics'

function Analytics() {
  const { tasks } = useTasks()
  const { t, locale } = useLanguage()

  const categoryData = getTasksByCategory(tasks).map((entry) => ({
    ...entry,
    name: t(`category.${entry.name}`),
  }))

  const priorityData = getTasksByPriority(tasks).map((entry) => ({
    ...entry,
    label: t(`priority.${entry.name.toLowerCase()}`),
  }))

  const trendData = getCompletionTrend(tasks, locale)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        {t('analytics.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            {t('analytics.byCategory')}
          </h3>
          <CategoryPieChart data={categoryData} />
        </div>

        <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            {t('analytics.byPriority')}
          </h3>
          <PriorityBarChart data={priorityData} />
        </div>
      </div>

      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
          {t('analytics.trend')}
        </h3>
        <CompletionTrendChart data={trendData} />
      </div>
    </div>
  )
}

export default Analytics
