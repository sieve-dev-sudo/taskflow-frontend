import { useLanguage } from '../context/LanguageContext'

const PRIORITY_STYLES = {
  low: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 font-medium',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-medium',
  high: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 font-semibold',
}

function PriorityBadge({ priority }) {
  const { t } = useLanguage()
  const safePriority = PRIORITY_STYLES[priority] ? priority : 'medium'

  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full ${PRIORITY_STYLES[safePriority]}`}
    >
      {t(`priority.${safePriority}`)}
    </span>
  )
}

export default PriorityBadge
