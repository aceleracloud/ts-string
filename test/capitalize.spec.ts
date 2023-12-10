import { capitalize } from '../src'

describe('capitalize', () => {
  describe('invalid inputs', () => {
    test('should handle empty strings', () => {
      expect(capitalize('')).toBe('')
    })

    test('should handle null value', () => {
      expect(capitalize(null as any)).toBe('')
    })

    test('should handle undefined value', () => {
      expect(capitalize(undefined as any)).toBe('')
    })
  })

  describe('common cases', () => {
    test('should capitalize only the first letter of a single word', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    test('should lowercase the rest of the word', () => {
      expect(capitalize('hELLO')).toBe('Hello')
    })

    test('should capitalize the first letter of each word when capitalizeEachWord is true', () => {
      expect(capitalize('hello world', true)).toBe('Hello World')
    })

    test('should handle multiple spaces correctly when capitalizeEachWord is true', () => {
      expect(capitalize('hello   world', true)).toBe('Hello   World')
    })
  })

  describe('different separator', () => {
    test('should use the specified separator when provided', () => {
      expect(capitalize('hello-world', true, '-')).toBe('Hello-World')
    })

    test('should handle empty words in the string (multiple separators) correctly', () => {
      expect(capitalize('hello--world', true, '-')).toBe('Hello--World')
    })

    test('should handle strings with a single word correctly when capitalizeEachWord is true', () => {
      expect(capitalize('hello', true)).toBe('Hello')
    })

    test('should not alter non-alphabetic characters', () => {
      expect(capitalize('1234')).toBe('1234')
    })

    test('should handle non-standard separators', () => {
      expect(capitalize('hello*world', true, '*')).toBe('Hello*World')
    })
  })
})
