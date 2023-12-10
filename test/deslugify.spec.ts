import { deslugify } from '../src'

describe('deslugify', () => {
  describe('invalid inputs', () => {
    test('should handle empty strings', () => {
      expect(deslugify('')).toBe('')
    })

    test('should handle null value', () => {
      expect(deslugify(null as any)).toBe('')
    })

    test('should handle undefined value', () => {
      expect(deslugify(undefined as any)).toBe('')
    })
  })

  describe('transformations', () => {
    test('should convert slugs to normal strings', () => {
      expect(deslugify('hello-world')).toBe('Hello World')
    })

    test('should handle slugs with multiple hyphens', () => {
      expect(deslugify('hello-world-today')).toBe('Hello World Today')
    })

    test('should handle slugs with a single word', () => {
      expect(deslugify('hello')).toBe('Hello')
    })

    test('should handle slugs with uppercase letters', () => {
      expect(deslugify('Hello-World')).toBe('Hello World')
    })
  })
})
