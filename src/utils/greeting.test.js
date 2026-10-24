import { describe, it, expect } from 'vitest'
import { getGreetingKey } from './greeting'

describe('getGreetingKey', () => {
  it('returns morning from 5 to 11', () => {
    expect(getGreetingKey(5)).toBe('greeting.morning')
    expect(getGreetingKey(11)).toBe('greeting.morning')
  })

  it('returns afternoon from 12 to 17', () => {
    expect(getGreetingKey(12)).toBe('greeting.afternoon')
    expect(getGreetingKey(17)).toBe('greeting.afternoon')
  })

  it('returns evening from 18 to 20', () => {
    expect(getGreetingKey(18)).toBe('greeting.evening')
    expect(getGreetingKey(20)).toBe('greeting.evening')
  })

  it('returns night late in the evening and after midnight', () => {
    expect(getGreetingKey(21)).toBe('greeting.night')
    expect(getGreetingKey(0)).toBe('greeting.night')
    expect(getGreetingKey(4)).toBe('greeting.night')
  })
})
