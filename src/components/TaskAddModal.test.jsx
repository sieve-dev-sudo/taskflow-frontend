import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskAddModal from './TaskAddModal'
import { TaskProvider } from '../context/TaskContext'
import { ToastProvider } from '../context/ToastContext'

function renderModal(onClose = vi.fn()) {
  render(
    <ToastProvider>
      <TaskProvider>
        <TaskAddModal onClose={onClose} />
      </TaskProvider>
    </ToastProvider>
  )
  return onClose
}

describe('TaskAddModal', () => {
  it('shows the dialog with an empty title field', () => {
    renderModal()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Add New Task')).toBeInTheDocument()
    expect(screen.getByLabelText('Task title')).toHaveValue('')
  })

  it('disables the add button until a title is typed', () => {
    renderModal()
    expect(screen.getByRole('button', { name: 'Add task' })).toBeDisabled()
    fireEvent.change(screen.getByLabelText('Task title'), {
      target: { value: 'Write report' },
    })
    expect(screen.getByRole('button', { name: 'Add task' })).toBeEnabled()
  })

  it('closes after adding a task', () => {
    const onClose = renderModal()
    fireEvent.change(screen.getByLabelText('Task title'), {
      target: { value: 'Write report' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add task' }))
    expect(onClose).toHaveBeenCalled()
  })

  it('closes when Cancel is clicked', () => {
    const onClose = renderModal()
    fireEvent.click(screen.getByText('Cancel'))
    expect(onClose).toHaveBeenCalled()
  })

  it('closes when Escape is pressed', () => {
    const onClose = renderModal()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })
})
