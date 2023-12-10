import { slugify } from '../src'

describe('slugify', () => {
  describe('invalid inputs', () => {
    test('should handle empty strings', () => {
      expect(slugify('')).toBe('')
    })

    test('should handle null value', () => {
      expect(slugify(null as any)).toBe('')
    })

    test('should handle undefined value', () => {
      expect(slugify(undefined as any)).toBe('')
    })
  })

  describe('transformations', () => {
    test('should convert strings to lowercase', () => {
      expect(slugify('HelloWorld')).toBe('helloworld')
    })

    test('should remove accents from characters', () => {
      expect(slugify('Olá, Mündo!')).toBe('ola-mundo')
    })

    test('should replace spaces with hyphens', () => {
      expect(slugify('hello world')).toBe('hello-world')
    })

    test('should remove special characters', () => {
      expect(slugify('hello@world!')).toBe('helloworld')
    })

    test('should remove extra hyphens', () => {
      expect(slugify('hello---world')).toBe('hello-world')
    })

    test('should remove hyphens from the beginning and end of the string', () => {
      expect(slugify('-hello-world-')).toBe('hello-world')
    })

    test('should remove continuous hyphens from the beginning and end of the string', () => {
      expect(slugify('----hello-world-')).toBe('hello-world')
    })
  })

  describe('extreme cases', () => {
    test('should handle strings with mixed cases, spaces, and special characters', () => {
      expect(slugify('Hello @World! Have a great day.')).toBe('hello-world-have-a-great-day')
    })

    test('should correctly process strings with no changes needed', () => {
      expect(slugify('hello-world')).toBe('hello-world')
    })
  })
})
