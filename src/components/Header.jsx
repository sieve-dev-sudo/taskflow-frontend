import { Link, NavLink } from 'react-router-dom'
import { ListTodo } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
          <ListTodo className="w-6 h-6 text-indigo-600" />
          TaskFlow
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-medium' : 'hover:text-primary'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-medium' : 'hover:text-primary'
              }
            >
              About
            </NavLink>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
