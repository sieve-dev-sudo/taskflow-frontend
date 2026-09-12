import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TaskItem from './TaskItem'
import { TaskProvider } from '../context/TaskContext'

const mockTask = {
  id: '1',
  title: 'Sample task',
  completed: false,
  priority: 'medium',
  dueDate: null,
  createdAt: new Date().toISOString(),
}

describe('TaskItem', () => {
  it('renders the task title', () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    )
    expect(screen.getByText('Sample task')).toBeInTheDocument()
  })

  it('renders the priority badge', () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    )
    expect(screen.getByText('medium')).toBeInTheDocument()
  })

  it('shows checkbox reflecting completed state', () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.checked).toBe(false)
  })

  it('enters edit mode on double-click', () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    )
    fireEvent.doubleClick(screen.getByText('Sample task'))
    expect(screen.getByDisplayValue('Sample task')).toBeInTheDocument()
  })
})
