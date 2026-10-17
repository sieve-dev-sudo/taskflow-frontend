import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CategoryPieChart from './CategoryPieChart'

// jsdom has no ResizeObserver, which recharts' ResponsiveContainer needs.
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const data = [
  { name: 'Health', label: 'Health', value: 1 },
  { name: 'Work', label: 'Work', value: 3 },
]

describe('CategoryPieChart', () => {
  it('shows an empty message when there is no data', () => {
    render(<CategoryPieChart data={[]} />)
    expect(screen.getByText('No data to display yet')).toBeInTheDocument()
  })

  it('lists categories sorted by count with percentages', () => {
    render(<CategoryPieChart data={data} />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(2)
    expect(items[0]).toHaveTextContent('Work')
    expect(items[0]).toHaveTextContent('75%')
    expect(items[1]).toHaveTextContent('Health')
    expect(items[1]).toHaveTextContent('25%')
  })
})
