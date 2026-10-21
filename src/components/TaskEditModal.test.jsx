import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskEditModal from './TaskEditModal'
import { TaskProvider } from '../context/TaskContext'
import { ToastProvider } from '../context/ToastContext'

const task = {
  id: '1',
  title: 'Sample task',
  notes: '',
  completed: false,
  priority: 'medium',
  category: 'General',
  dueDate: null,
  deleted: false,
  deletedAt: null,
  createdAt: new Date().toISOString(),
}

function renderModal(onClose = vi.fn()) {
  render(
    <ToastProvider>
      <TaskProvider>
        <TaskEditModal task={task} onClose={onClose} />
      </TaskProvider>
    </ToastProvider>
  )
  return onClose
}

describe('TaskEditModal', () => {
  it('shows the current task values', () => {
    renderModal()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Sample task')).toBeInTheDocument()
  })

  it('shows an error and stays open when the title is empty', () => {
    const onClose = renderModal()
    fireEvent.change(screen.getByLabelText('Task title'), {
      target: { value: '   ' },
    })
    fireEvent.click(screen.getByText('Save Changes'))
    expect(screen.getByText('Please enter a task title')).toBeInTheDocument()
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes after saving a valid title', () => {
    const onClose = renderModal()
    fireEvent.change(screen.getByLabelText('Task title'), {
      target: { value: 'Updated title' },
    })
    fireEvent.click(screen.getByText('Save Changes'))
    expect(onClose).toHaveBeenCalled()
  })

  it('closes without saving when Cancel is clicked', () => {
    const onClose = renderModal()
    fireEvent.click(screen.getByText('Cancel'))
    expect(onClose).toHaveBeenCalled()
  })
})
