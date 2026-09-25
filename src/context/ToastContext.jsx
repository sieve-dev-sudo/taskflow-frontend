import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback((message, type = 'success', options = {}) => {
    const id = Date.now().toString()
    const duration = options.duration ?? 3000
    setToasts((prev) => [...prev, { id, message, type, action: options.action }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)
    return id
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
