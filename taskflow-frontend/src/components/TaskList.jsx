import { AnimatePresence, motion } from 'framer-motion'
import TaskItem from './TaskItem'

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-slate-400 py-8">
        No tasks yet. Add one above!
      </p>
    )
  }

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
          >
            <TaskItem task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default TaskList
