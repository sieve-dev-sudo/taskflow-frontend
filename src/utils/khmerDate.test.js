import { describe, it, expect } from 'vitest'
import {
  isKhmerLocale,
  formatKhmerLongDate,
  formatKhmerShortDate,
  getKhmerWeekday,
  getKhmerWeekdayShort,
} from './khmerDate'

// Month is zero based: 9 is October, 8 is September.
const saturday = new Date(2026, 9, 24)
const sunday = new Date(2026, 9, 25)
const septemberDate = new Date(2026, 8, 30)

describe('khmerDate', () => {
  it('detects Khmer locales', () => {
    expect(isKhmerLocale('km-KH')).toBe(true)
    expect(isKhmerLocale('km')).toBe(true)
    expect(isKhmerLocale('en-US')).toBe(false)
  })

  it('formats a long date with the Khmer weekday and month', () => {
    const result = formatKhmerLongDate(saturday)
    expect(result).toContain('សៅរ៍')
    expect(result).toContain('តុលា')
  })

  it('formats a short date with the Khmer month', () => {
    expect(formatKhmerShortDate(septemberDate)).toContain('កញ្ញា')
  })

  it('returns the full weekday name', () => {
    expect(getKhmerWeekday(saturday)).toBe('សៅរ៍')
    expect(getKhmerWeekday(sunday)).toBe('អាទិត្យ')
  })

  it('returns the short weekday label', () => {
    expect(getKhmerWeekdayShort(saturday)).toBe('ស')
  })
})
