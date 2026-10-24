import { Link, NavLink } from 'react-router-dom'
import { ListTodo, Trash2 } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useLanguage } from '../context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const linkBase =
  'rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 dark:focus-visible:ring-indigo-500/30'
const linkActive = 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-300'
const linkIdle =
  'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'

const textLink = ({ isActive }) =>
  `${linkBase} px-3 py-1.5 ${isActive ? linkActive : linkIdle}`

const iconLink = ({ isActive }) =>
  `${linkBase} relative flex h-8 w-9 items-center justify-center ${
    isActive ? linkActive : linkIdle
  }`

function Header() {
  const { trashedTasks } = useTasks()
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 dark:focus-visible:ring-indigo-500/30"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
            <ListTodo className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            TaskFlow
          </span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <nav
            aria-label={t('nav.main')}
            className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800"
          >
            <NavLink to="/" end className={textLink}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/analytics" className={textLink}>
              {t('nav.analytics')}
            </NavLink>
            <NavLink to="/about" className={textLink}>
              {t('nav.about')}
            </NavLink>
            <NavLink
              to="/trash"
              aria-label={t('nav.trashLabel', { count: trashedTasks.length })}
              className={iconLink}
            >
              <Trash2 className="h-4 w-4" />
              {trashedTasks.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                  {trashedTasks.length}
                </span>
              )}
            </NavLink>
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
