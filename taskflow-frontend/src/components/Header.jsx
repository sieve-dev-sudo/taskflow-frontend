function Header() {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          TaskFlow
        </h1>
        <nav className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
