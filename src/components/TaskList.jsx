import { AnimatePresence, motion } from 'framer-motion'
import TaskItem from './TaskItem'
import EmptyState from './EmptyState'
import { useLanguage } from '../context/LanguageContext'

function TaskList({ tasks, hasActiveSearch = false, selectionMode = false, selectedIds = [], onToggleSelect }) {
  const { t } = useLanguage()

  if (tasks.length === 0) {
    return hasActiveSearch ? (
      <EmptyState message={t('empty.noResults')} variant="search" />
    ) : (
      <EmptyState message={t('empty.noTasks')} />
    )
  }

  return (
    <div className="space-y-2" role="list" aria-label={t('task.listLabel')}>
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, x: 120, y: -60, scale: 0.4, rotate: 20 }}
            transition={{ duration: 0.35, ease: 'easeIn' }}
          >
            <TaskItem
              task={task}
              selectionMode={selectionMode}
              isSelected={selectedIds.includes(task.id)}
              onToggleSelect={onToggleSelect}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default TaskList
