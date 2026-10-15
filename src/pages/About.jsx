import { useLanguage } from '../context/LanguageContext'

const FEATURE_KEYS = [
  'about.feature1',
  'about.feature2',
  'about.feature3',
  'about.feature4',
  'about.feature5',
  'about.feature6',
  'about.feature7',
]

const TECH_STACK = ['React 19 and Vite', 'Tailwind CSS', 'Framer Motion', 'Vitest and Testing Library']

function About() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        {t('about.title')}
      </h2>
      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {t('about.intro')}
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
          {t('about.featuresTitle')}
        </h3>
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
          {FEATURE_KEYS.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
          {t('about.builtWith')}
        </h3>
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
          {TECH_STACK.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 mt-6">
          {t('about.storageTitle')}
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          {t('about.storageText')}
        </p>
      </div>
    </div>
  )
}

export default About
