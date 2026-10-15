import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'taskflow-language'
const DEFAULT_LANGUAGE = 'en'
const LOCALES = { en: 'en-US', km: 'km-KH' }

/**
 * Looks up a translation key and fills in {placeholders}.
 * Falls back to English, then to the key itself.
 * @param {'en'|'km'} language
 * @param {string} key
 * @param {Object.<string, string|number>} [params]
 * @returns {string}
 */
function translate(language, key, params = {}) {
  const dictionary = translations[language] || translations[DEFAULT_LANGUAGE]
  let text = dictionary[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key
  Object.entries(params).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value))
  })
  return text
}

// The default value lets components work without a provider (for example in unit tests).
const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  locale: LOCALES[DEFAULT_LANGUAGE],
  toggleLanguage: () => {},
  t: (key, params) => translate(DEFAULT_LANGUAGE, key, params),
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored === 'km' || stored === 'en' ? stored : DEFAULT_LANGUAGE
    } catch {
      return DEFAULT_LANGUAGE
    }
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignore storage errors
    }
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'km' : 'en'))
  }, [])

  const t = useCallback((key, params) => translate(language, key, params), [language])

  const value = { language, locale: LOCALES[language], toggleLanguage, t }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
