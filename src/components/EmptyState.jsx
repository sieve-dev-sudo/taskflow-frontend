function EmptyState({ message = 'No tasks found' }) {
  return (
    <div className="text-center py-12">
      <p className="text-slate-400 dark:text-slate-500 text-sm">
        {message}
      </p>
    </div>
  )
}

export default EmptyState
