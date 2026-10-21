import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

// Load the Khmer font up front so the first language switch does not flash.
const KHMER_FONT_WEIGHTS = ['400', '500', '600', '700']
if (typeof document !== 'undefined' && document.fonts && document.fonts.load) {
  KHMER_FONT_WEIGHTS.forEach((weight) => {
    document.fonts.load(`${weight} 1rem "Noto Sans Khmer"`, 'ក').catch(() => {})
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <ToastProvider>
            <TaskProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </TaskProvider>
          </ToastProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
)
