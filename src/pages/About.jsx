function About() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        About TaskFlow
      </h2>
      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          TaskFlow is a modern task management app built to help you stay
          organized and focused. Create tasks, set priorities and due dates,
          organize them into categories, and track your progress at a glance.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
          Key Features
        </h3>
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
          <li>Add, edit, and organize tasks with priorities and due dates</li>
          <li>Filter tasks by status and search by keyword</li>
          <li>Group tasks into custom categories</li>
          <li>Track completion progress with a visual stats dashboard</li>
          <li>Switch between light and dark mode, with your preference saved</li>
          <li>Restore deleted tasks from the trash before they are removed for good</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
          Built With
        </h3>
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
          <li>React 19 and Vite</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Vitest and Testing Library</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
          Data Storage
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          All tasks are saved locally in your browser using localStorage.
          No account or server is required, and your data always stays on
          your device.
        </p>
      </div>
    </div>
  )
}

export default About
