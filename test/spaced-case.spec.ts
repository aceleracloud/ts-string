import { isSpacedCase, toSpacedCase } from '../src'

describe('SpacedCase', () => {
  describe('isSpacedCase', () => {
    it('should return true for Spaced Case strings', () => {
      expect(isSpacedCase('Spaced Case')).toBe(true)
      expect(isSpacedCase('This Is Spaced Case')).toBe(true)
    })

    it('should return false for non-Spaced Case strings', () => {
      expect(isSpacedCase('camelCase')).toBe(false)
      expect(isSpacedCase('snake_case')).toBe(false)
      expect(isSpacedCase('kebab-case')).toBe(false)
      expect(isSpacedCase('PascalCase')).toBe(false)
      expect(isSpacedCase('')).toBe(false)
    })
  })

  describe('isSpacedCase extreme tests', () => {
    it('should handle very long Spaced Case strings', () => {
      const longString = 'This Is A Very Long Spaced Case String '.repeat(1000).trim()

      expect(isSpacedCase(longString)).toBe(true)
    })

    it('should return false for strings with mixed separators', () => {
      const mixedString = 'This_Is A-Mixed spaced_case-string'

      expect(isSpacedCase(mixedString)).toBe(false)
    })
  })

  describe('toSpacedCase', () => {
    it('should convert camelCase to Spaced Case', () => {
      expect(toSpacedCase('camelCaseExample')).toBe('Camel Case Example')
      expect(toSpacedCase('thisIsSpacedCase')).toBe('This Is Spaced Case')
    })

    it('should convert snake_case to Spaced Case', () => {
      expect(toSpacedCase('snake_case_example')).toBe('Snake Case Example')
    })

    it('should convert kebab-case to Spaced Case', () => {
      expect(toSpacedCase('kebab-case-example')).toBe('Kebab Case Example')
    })

    it('should convert PascalCase to Spaced Case', () => {
      expect(toSpacedCase('PascalCaseExample')).toBe('Pascal Case Example')
    })
  })

  describe('toSpacedCase extreme tests', () => {
    it('should handle very long strings', () => {
      const longString = 'longCamelCaseString' + 'LongCamelCaseString'.repeat(999)
      const expectedResult = 'Long Camel Case String '.repeat(1000).trim()

      expect(toSpacedCase(longString)).toBe(expectedResult)
    })

    it('should handle strings with mixed cases and separators', () => {
      const mixedString = 'Mix3d_Case-With-digits123_and_Spaces'

      expect(toSpacedCase(mixedString)).toBe('Mix3d Case With Digits123 And Spaces')
    })
  })
})
