import { useState } from 'react'
import { Plus, ChevronDown } from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useToast } from '../context/ToastContext'
import { useLanguage } from '../context/LanguageContext'
import { CATEGORIES } from '../utils/categories'

const labelClass = 'mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400'

function SelectField({ id, label, value, onChange, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="field appearance-none pr-9"
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  )
}

/**
 * Form for creating a task. It can render as a standalone card, or in an
 * embedded layout (inside the add popup) with an optional Cancel button.
 * @param {{
 *   embedded?: boolean,
 *   autoFocus?: boolean,
 *   onSubmitted?: () => void,
 *   onCancel?: () => void,
 * }} props
 */
function TaskForm({ embedded = false, autoFocus = false, onSubmitted, onCancel }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('General')
  const { addTask } = useTasks()
  const { showToast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask(title.trim(), priority, dueDate || null, category)
    showToast(t('toast.taskAdded'), 'success')
    setTitle('')
    setPriority('medium')
    setDueDate('')
    setCategory('General')
    if (onSubmitted) onSubmitted()
  }

  const titleField = (
    <div>
      <label
        htmlFor="task-title"
        className={embedded ? labelClass : 'sr-only'}
      >
        {t('form.titleLabel')}
      </label>
      <input
        id="task-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={t('form.titlePlaceholder')}
        aria-required="true"
        autoFocus={autoFocus}
        className="field py-3 text-base"
      />
    </div>
  )

  const submitButton = (
    <button
      type="submit"
      disabled={!title.trim()}
      aria-label={t('form.addTaskLabel')}
      className="btn-primary w-full whitespace-nowrap sm:w-auto"
    >
      <Plus className="h-4 w-4" />
      {t('form.addTask')}
    </button>
  )

  const optionFields = (
    <div
      className={`grid grid-cols-1 gap-3 ${
        embedded ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
      }`}
    >
      <SelectField
        id="task-category"
        label={t('form.categoryLabel')}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {t(`category.${cat}`)}
          </option>
        ))}
      </SelectField>

      <SelectField
        id="task-priority"
        label={t('form.priorityLabel')}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">{t('priority.low')}</option>
        <option value="medium">{t('priority.medium')}</option>
        <option value="high">{t('priority.high')}</option>
      </SelectField>

      <div className={embedded ? 'sm:col-span-2' : ''}>
        <label htmlFor="task-due-date" className={labelClass}>
          {t('form.dueDateLabel')}
        </label>
        <input
          id="task-due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="field"
        />
      </div>
    </div>
  )

  if (embedded) {
    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        aria-label={t('form.formLabel')}
      >
        {titleField}
        {optionFields}
        <div className="flex flex-col-reverse gap-2 pt-1 sm:flex-row sm:justify-end">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="btn-ghost px-5 py-2.5"
            >
              {t('edit.cancel')}
            </button>
          )}
          {submitButton}
        </div>
      </form>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card space-y-4 p-4 sm:p-5"
      aria-label={t('form.formLabel')}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">{titleField}</div>
        {submitButton}
      </div>
      {optionFields}
    </form>
  )
}

export default TaskForm
