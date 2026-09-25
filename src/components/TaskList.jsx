import { AnimatePresence, motion } from 'framer-motion'
import TaskItem from './TaskItem'
import EmptyState from './EmptyState'

function TaskList({ tasks, hasActiveSearch = false, selectedIds = [], onToggleSelect }) {
  if (tasks.length === 0) {
    return hasActiveSearch ? (
      <EmptyState message="No tasks match your search" variant="search" />
    ) : (
      <EmptyState message="No tasks yet. Add one above!" />
    )
  }

  return (
    <div className="space-y-2" role="list" aria-label="Task list">
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
