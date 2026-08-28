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
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
