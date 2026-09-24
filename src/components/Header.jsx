import { Link, NavLink } from 'react-router-dom'
import { ListTodo, Trash2, BarChart3 } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import ThemeToggle from './ThemeToggle'

function Header() {
  const { trashedTasks } = useTasks()

  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
          <ListTodo className="w-6 h-6 text-indigo-600" />
          TaskFlow
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2 py-1 rounded-md ${isActive ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600' : 'hover:text-primary'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center justify-center w-8 h-8 rounded-md ${isActive ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600' : 'hover:text-primary'}`
              }
              aria-label="Analytics"
            >
              <BarChart3 className="w-4 h-4" />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-2 py-1 rounded-md ${isActive ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600' : 'hover:text-primary'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/trash"
              aria-label={`Trash, ${trashedTasks.length} deleted tasks`}
              className={({ isActive }) =>
                `relative flex items-center justify-center w-8 h-8 rounded-md ${isActive ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600' : 'hover:text-primary'}`
              }
            >
              <Trash2 className="w-4 h-4" />
              {trashedTasks.length > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[10px] font-semibold text-white bg-red-600 rounded-full">
                  {trashedTasks.length}
                </span>
              )}
            </NavLink>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
