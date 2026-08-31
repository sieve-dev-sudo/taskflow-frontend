const PRIORITY_STYLES = {
  low: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  high: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
}

function PriorityBadge({ priority }) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full capitalize ${PRIORITY_STYLES[priority] || PRIORITY_STYLES.medium}`}
    >
      {priority}
    </span>
  )
}

export default PriorityBadge
