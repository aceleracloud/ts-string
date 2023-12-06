import { isSnakeCase, toSnakeCase } from '../src'

describe('SnakeCase', () => {
  describe('isSnakeCase', () => {
    it('should return true for strings in snake_case', () => {
      expect(isSnakeCase('hello_world')).toBe(true)
      expect(isSnakeCase('snake_case_test')).toBe(true)
    })

    it('should return false for strings not in snake_case', () => {
      expect(isSnakeCase('HelloWorld')).toBe(false)
      expect(isSnakeCase('helloWorld')).toBe(false)
      expect(isSnakeCase('hello-world')).toBe(false)
      expect(isSnakeCase('hello world')).toBe(false)
    })

    it('should return false for strings with uppercase letters', () => {
      expect(isSnakeCase('Hello_World')).toBe(false)
      expect(isSnakeCase('Snake_Case_Test')).toBe(false)
    })

    it('should return false for empty strings and strings with special characters', () => {
      expect(isSnakeCase('')).toBe(false)
      expect(isSnakeCase('123')).toBe(false)
      expect(isSnakeCase('hello_world!')).toBe(false)
    })
  })

  describe('isSnakeCase extreme tests', () => {
    it('should return false for very long strings not in snake_case', () => {
      const longString = 'a'.repeat(10000) + 'B' + 'c'.repeat(10000)

      expect(isSnakeCase(longString)).toBe(false)
    })

    it('should handle strings with repetitive patterns', () => {
      const repetitiveString = 'a_b_'.repeat(1000) + 'a_b'

      expect(isSnakeCase(repetitiveString)).toBe(true)
    })

    it('should return false for strings with mixed separators', () => {
      const mixedString = 'a_b-c_d-e'.repeat(1000)

      expect(isSnakeCase(mixedString)).toBe(false)
    })
  })

  describe('toSnakeCase', () => {
    it('should convert spaced case to snake_case', () => {
      expect(toSnakeCase('Hello World')).toBe('hello_world')
    })

    it('should convert kebab-case to snake_case', () => {
      expect(toSnakeCase('hello-world')).toBe('hello_world')
    })

    it('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world')
    })

    it('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('HelloWorld')).toBe('hello_world')
    })

    it('should handle strings with multiple uppercase letters in camelCase', () => {
      expect(toSnakeCase('helloWorldWithJest')).toBe('hello_world_with_jest')
    })

    it('should handle strings with multiple uppercase letters in PascalCase', () => {
      expect(toSnakeCase('HelloWorldWithJest')).toBe('hello_world_with_jest')
    })

    it('should not add underscore at the beginning if PascalCase starts with an uppercase letter', () => {
      expect(toSnakeCase('PascalCase')).toBe('pascal_case')
    })

    it('should handle strings with mixed case and separators', () => {
      const complexString = 'HelloWorld-thisIsATest'

      expect(toSnakeCase(complexString)).toBe('hello_world_this_is_a_test')
    })
  })

  describe('toSnakeCase extreme tests', () => {
    it('should handle very long strings in spaced case', () => {
      const longString = 'A '.repeat(5000) + 'B'

      expect(toSnakeCase(longString)).toBe('a_'.repeat(5000) + 'b')
    })

    it('should handle strings with mixed case and separators', () => {
      const complexString = 'HelloWorld-thisIsATest'.repeat(1000)

      expect(toSnakeCase(complexString)).toBe('hello_world_this_is_a_test_'.repeat(999) + 'hello_world_this_is_a_test')
    })

    it('should convert strings with special characters', () => {
      const specialCharString = 'Hello@World! How*Are&You?'

      expect(toSnakeCase(specialCharString)).toBe('hello@world!_how*are&you?')
    })
  })
})
