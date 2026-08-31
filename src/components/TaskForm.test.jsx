import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TaskForm from './TaskForm'
import { TaskProvider } from '../context/TaskContext'

describe('TaskForm', () => {
  it('renders input and add button', () => {
    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    )
    expect(screen.getByPlaceholderText('Add a new task...')).toBeInTheDocument()
    expect(screen.getByText('Add')).toBeInTheDocument()
  })
})
