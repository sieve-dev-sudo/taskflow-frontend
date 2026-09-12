import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TaskProvider, useTasks } from './TaskContext'

function TestComponent() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTasks()

  return (
    <div>
      <button onClick={() => addTask('Test task', 'high', '2026-01-01')}>
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} data-testid="task-item">
            <span>{task.title}</span>
            <span>{task.completed ? 'done' : 'pending'}</span>
            <button onClick={() => toggleTask(task.id)}>Toggle</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => editTask(task.id, 'Edited title')}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

describe('TaskContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with an empty task list', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    )
    expect(screen.queryAllByTestId('task-item')).toHaveLength(0)
  })

  it('adds a new task', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    )
    fireEvent.click(screen.getByText('Add Task'))
    expect(screen.getByText('Test task')).toBeInTheDocument()
  })

  it('toggles a task completed state', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    )
    fireEvent.click(screen.getByText('Add Task'))
    expect(screen.getByText('pending')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByText('done')).toBeInTheDocument()
  })

  it('deletes a task', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    )
    fireEvent.click(screen.getByText('Add Task'))
    expect(screen.getAllByTestId('task-item')).toHaveLength(1)
    fireEvent.click(screen.getByText('Delete'))
    expect(screen.queryAllByTestId('task-item')).toHaveLength(0)
  })

  it('edits a task title', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    )
    fireEvent.click(screen.getByText('Add Task'))
    fireEvent.click(screen.getByText('Edit'))
    expect(screen.getByText('Edited title')).toBeInTheDocument()
  })

  it('persists tasks to localStorage', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    )
    fireEvent.click(screen.getByText('Add Task'))
    const stored = JSON.parse(localStorage.getItem('taskflow-tasks'))
    expect(stored).toHaveLength(1)
    expect(stored[0].title).toBe('Test task')
  })
})
