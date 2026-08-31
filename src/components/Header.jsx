import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
          TaskFlow
        </h1>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">About</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
