import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskItem from './TaskItem'
import { TaskProvider } from '../context/TaskContext'
import { ToastProvider } from '../context/ToastContext'

const mockTask = {
  id: '1',
  title: 'Sample task',
  completed: false,
  priority: 'medium',
  category: 'General',
  dueDate: null,
  createdAt: new Date().toISOString(),
}

function renderWithProviders(ui) {
  return render(
    <ToastProvider>
      <TaskProvider>{ui}</TaskProvider>
    </ToastProvider>
  )
}

describe('TaskItem', () => {
  it('renders the task title', () => {
    renderWithProviders(<TaskItem task={mockTask} />)
    expect(screen.getByText('Sample task')).toBeInTheDocument()
  })

  it('renders the priority badge', () => {
    renderWithProviders(<TaskItem task={mockTask} />)
    expect(screen.getByText('medium')).toBeInTheDocument()
  })

  it('shows checkbox reflecting completed state', () => {
    renderWithProviders(<TaskItem task={mockTask} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.checked).toBe(false)
  })

  it('enters edit mode on double-click', () => {
    renderWithProviders(<TaskItem task={mockTask} />)
    fireEvent.doubleClick(screen.getByText('Sample task'))
    expect(screen.getByDisplayValue('Sample task')).toBeInTheDocument()
  })
})
