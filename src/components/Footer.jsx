import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative w-full border-t border-slate-200/70 bg-white/60 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mx-auto max-w-4xl px-4 py-5 text-center text-sm text-slate-500 dark:text-slate-400 sm:px-6">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  )
}

export default Footer
