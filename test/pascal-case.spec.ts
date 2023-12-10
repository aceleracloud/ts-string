import { isPascalCase, toPascalCase } from '../src'

describe('PascalCase', () => {
  describe('isPascalCase', () => {
    it('should return true for PascalCase strings', () => {
      expect(isPascalCase('PascalCase')).toBe(true)
      expect(isPascalCase('ThisIsPascalCase')).toBe(true)
    })

    it('should return false for non-PascalCase strings', () => {
      expect(isPascalCase('camelCase')).toBe(false)
      expect(isPascalCase('snake_case')).toBe(false)
      expect(isPascalCase('kebab-case')).toBe(false)
      expect(isPascalCase('lowercase')).toBe(false)
      expect(isPascalCase('UPPERCASE')).toBe(false)
      expect(isPascalCase('With spaces')).toBe(false)
    })
  })

  describe('isPascalCase extreme tests', () => {
    it('should handle very long PascalCase strings', () => {
      const longString = 'VeryLongPascalCaseString'.repeat(1000)

      expect(isPascalCase(longString)).toBe(true)
    })

    it('should return false for very long non-PascalCase strings', () => {
      const longString = 'very_long_snake_case_string'.repeat(1000)

      expect(isPascalCase(longString)).toBe(false)
    })
  })

  describe('toPascalCase', () => {
    it('should convert camelCase to PascalCase', () => {
      expect(toPascalCase('camelCaseExample')).toBe('CamelCaseExample')
      expect(toPascalCase('thisIsPascalCase')).toBe('ThisIsPascalCase')
    })

    it('should convert snake_case to PascalCase', () => {
      expect(toPascalCase('snake_case_example')).toBe('SnakeCaseExample')
    })

    it('should convert kebab-case to PascalCase', () => {
      expect(toPascalCase('kebab-case-example')).toBe('KebabCaseExample')
    })

    it('should convert spaced case to PascalCase', () => {
      expect(toPascalCase('Spaced Case Example')).toBe('SpacedCaseExample')
    })
  })

  describe('toPascalCase extreme tests', () => {
    it('should handle very long strings', () => {
      const longString = 'longCamelCaseString' + 'LongCamelCaseString'.repeat(999)
      const expectedResult = 'LongCamelCaseString'.repeat(1000)

      expect(toPascalCase(longString)).toBe(expectedResult)
    })

    it('should handle strings with mixed cases and separators', () => {
      const mixedString = 'Mix3d_Case-With-digits123_and_Spaces'

      expect(toPascalCase(mixedString)).toBe('Mix3dCaseWithDigits123AndSpaces')
    })

    it('should convert strings with special characters', () => {
      const specialCharString = 'Hello@World! How*Are&You?'

      expect(toPascalCase(specialCharString)).toBe('HelloWorldHowAreYou')
    })
  })
})
