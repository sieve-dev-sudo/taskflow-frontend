function About() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
        About TaskFlow
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        TaskFlow is a modern task management app built to help you stay
        organized and focused. Create tasks, set priorities and due dates,
        organize them into categories, and track your progress at a glance.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
        Built With
      </h3>
      <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
        <li>React 19 + Vite</li>
        <li>Tailwind CSS</li>
        <li>Framer Motion</li>
        <li>Vitest + Testing Library</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
        Data Storage
      </h3>
      <p className="text-slate-600 dark:text-slate-400">
        All tasks are saved locally in your browser using localStorage — no
        account or server required. Your data stays on your device.
      </p>
    </div>
  )
}

export default About
