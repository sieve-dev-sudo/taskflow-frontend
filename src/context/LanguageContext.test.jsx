import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'

function Demo() {
  const { language, t, toggleLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span>{t('nav.home')}</span>
      <button onClick={toggleLanguage}>toggle</button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('defaults to English', () => {
    render(
      <LanguageProvider>
        <Demo />
      </LanguageProvider>
    )
    expect(screen.getByTestId('lang').textContent).toBe('en')
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('switches to Khmer when toggled', () => {
    render(
      <LanguageProvider>
        <Demo />
      </LanguageProvider>
    )
    fireEvent.click(screen.getByText('toggle'))
    expect(screen.getByTestId('lang').textContent).toBe('km')
    expect(screen.getByText('ទំព័រដើម')).toBeInTheDocument()
  })

  it('persists the chosen language to localStorage', () => {
    render(
      <LanguageProvider>
        <Demo />
      </LanguageProvider>
    )
    fireEvent.click(screen.getByText('toggle'))
    expect(localStorage.getItem('taskflow-language')).toBe('km')
  })
})
