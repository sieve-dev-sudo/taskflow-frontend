import { describe, it, expect } from 'vitest'
import { formatDate, isOverdue } from './date'

describe('formatDate', () => {
  it('returns empty string for null input', () => {
    expect(formatDate(null)).toBe('')
  })

  it('formats a valid date string', () => {
    const result = formatDate('2026-01-15')
    expect(result).toContain('2026')
  })
})

describe('isOverdue', () => {
  it('returns false for null input', () => {
    expect(isOverdue(null)).toBe(false)
  })

  it('returns true for a past date', () => {
    expect(isOverdue('2020-01-01')).toBe(true)
  })

  it('returns false for a future date', () => {
    expect(isOverdue('2099-01-01')).toBe(false)
  })
})
