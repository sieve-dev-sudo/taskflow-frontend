import { Search } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function SearchBar({ value, onChange }) {
  const { t } = useLanguage()

  return (
    <div className="relative w-full sm:w-72">
      <label htmlFor="task-search" className="sr-only">
        {t('search.label')}
      </label>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        id="task-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('search.placeholder')}
        aria-label={t('search.label')}
        className="field py-2 pl-10 text-sm"
      />
    </div>
  )
}

export default SearchBar
