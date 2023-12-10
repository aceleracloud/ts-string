import { isKebabCase, toKebabCase } from '../src'

describe('KebabCase', () => {
  describe('isKebabCase', () => {
    it('should return true for kebab-case strings', () => {
      expect(isKebabCase('kebab-case')).toBe(true)
      expect(isKebabCase('this-is-kebab-case')).toBe(true)
    })

    it('should return false for non-kebab-case strings', () => {
      expect(isKebabCase('camelCase')).toBe(false)
      expect(isKebabCase('snake_case')).toBe(false)
      expect(isKebabCase('PascalCase')).toBe(false)
      expect(isKebabCase('with spaces')).toBe(false)
      expect(isKebabCase('WithCaps')).toBe(false)
    })
  })

  describe('isKebabCase extreme tests', () => {
    it('should handle very long kebab-case strings', () => {
      const longString = 'kebab-case-'.repeat(1000) + 'end'

      expect(isKebabCase(longString)).toBe(true)
    })

    it('should return false for strings with mixed separators', () => {
      const mixedString = 'kebab_case-mix_example'

      expect(isKebabCase(mixedString)).toBe(false)
    })
  })

  describe('toKebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('camelCaseExample')).toBe('camel-case-example')
      expect(toKebabCase('thisIsKebabCase')).toBe('this-is-kebab-case')
    })

    it('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('snake_case_example')).toBe('snake-case-example')
    })

    it('should convert PascalCase to kebab-case', () => {
      expect(toKebabCase('PascalCaseExample')).toBe('pascal-case-example')
    })

    it('should convert spaced case to kebab-case', () => {
      expect(toKebabCase('Spaced Case Example')).toBe('spaced-case-example')
    })
  })

  describe('Extreme Tests', () => {
    it('should handle very long strings', () => {
      const longString = 'LongCamelCaseString'.repeat(1000)
      const expectedResult = 'long-camel-case-string-'.repeat(999) + 'long-camel-case-string'

      expect(toKebabCase(longString)).toBe(expectedResult)
    })

    it('should handle strings with mixed cases and separators', () => {
      const mixedString = 'Mix3d_Case-With-digits123_and_Spaces'

      expect(toKebabCase(mixedString)).toBe('mix3d-case-with-digits123-and-spaces')
    })

    it('should convert strings with special characters', () => {
      const specialCharString = 'Hello@World! How*Are&You?'

      expect(toKebabCase(specialCharString)).toBe('hello@world!-how*are&you?')
    })
  })
})
