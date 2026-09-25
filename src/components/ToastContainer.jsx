import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Trash2, Pencil } from 'lucide-react'
import { useToast } from '../context/ToastContext'

const ICONS = {
  success: CheckCircle2,
  delete: Trash2,
  edit: Pencil,
}

const COLORS = {
  success: 'bg-green-600',
  delete: 'bg-red-600',
  edit: 'bg-indigo-600',
}

function ToastContainer() {
  const { toasts, dismissToast } = useToast()

  const handleAction = (toast) => {
    toast.action?.onClick()
    dismissToast(toast.id)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = ICONS[toast.type] || CheckCircle2
          const color = COLORS[toast.type] || COLORS.success
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-white text-sm shadow-lg ${color}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{toast.message}</span>
              {toast.action && (
                <button
                  onClick={() => handleAction(toast)}
                  className="font-semibold underline underline-offset-2 hover:no-underline focus:outline-none"
                >
                  {toast.action.label}
                </button>
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default ToastContainer
