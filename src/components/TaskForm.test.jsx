import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TaskForm from './TaskForm'
import { TaskProvider } from '../context/TaskContext'
import { ToastProvider } from '../context/ToastContext'

describe('TaskForm', () => {
  it('renders input and add button', () => {
    render(
      <ToastProvider>
        <TaskProvider>
          <TaskForm />
        </TaskProvider>
      </ToastProvider>
    )
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
    expect(screen.getByText('Add Task')).toBeInTheDocument()
  })
})
