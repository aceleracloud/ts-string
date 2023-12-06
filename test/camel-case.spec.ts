import { isCamelCase, toCamelCase } from '../src'

describe('CamelCase', () => {
  describe('isCamelCase', () => {
    it('should return true for camelCase strings', () => {
      expect(isCamelCase('camelCase')).toBe(true)
      expect(isCamelCase('helloWorld')).toBe(true)
      expect(isCamelCase('thisIsACamelCaseString')).toBe(true)
    })

    it('should return false for non-camelCase strings', () => {
      expect(isCamelCase('CamelCase')).toBe(false)
      expect(isCamelCase('snake_case')).toBe(false)
      expect(isCamelCase('kebab-case')).toBe(false)
      expect(isCamelCase('')).toBe(false)
      expect(isCamelCase('camelCaseWith1Number')).toBe(false)
      expect(isCamelCase('camel_case_with_underscores')).toBe(false)
      expect(isCamelCase('ALLCAPS')).toBe(false)
      expect(isCamelCase('lowercase')).toBe(false)
      expect(isCamelCase('With spaces')).toBe(false)
      expect(isCamelCase('LeadingUppercase')).toBe(false)
    })
  })

  describe('isCamelCase extreme tests', () => {
    it('should handle very long camelCase strings', () => {
      const longCamelCaseString = 'a'.repeat(1000) + 'B' + 'c'.repeat(1000)
      expect(isCamelCase(longCamelCaseString)).toBe(true)
    })

    it('should return false for very long non-camelCase strings', () => {
      const longNonCamelCaseString = 'A'.repeat(2000)
      expect(isCamelCase(longNonCamelCaseString)).toBe(false)
    })

    it('should return false for strings with special characters', () => {
      expect(isCamelCase('thisIsACamelCaseString!')).toBe(false)
      expect(isCamelCase('camelCase#String')).toBe(false)
    })
  })

  describe('toCamelCase', () => {
    it('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld')
      expect(toCamelCase('snake_case_example')).toBe('snakeCaseExample')
    })

    it('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld')
      expect(toCamelCase('kebab-case-example')).toBe('kebabCaseExample')
    })

    it('should convert PascalCase to camelCase', () => {
      expect(toCamelCase('HelloWorld')).toBe('helloWorld')
      expect(toCamelCase('PascalCaseExample')).toBe('pascalCaseExample')
    })

    it('should remove leading digits and special characters', () => {
      expect(toCamelCase('123helloWorld')).toBe('helloWorld')
      expect(toCamelCase('--hello-world')).toBe('helloWorld')
    })

    it('should handle mixed cases and separators', () => {
      expect(toCamelCase('Hello-World_thisIsATest')).toBe('helloWorldThisIsATest')
      expect(toCamelCase('Mix3d-Case_with-digits123')).toBe('mix3dCaseWithDigits123')
    })
  })

  describe('toCamelCase extreme tests', () => {
    it('should handle very long strings', () => {
      const longString = 'hello_world_'.repeat(1000) + 'end'
      const expectedResult = 'helloWorld' + 'HelloWorld'.repeat(999) + 'End'

      expect(toCamelCase(longString)).toBe(expectedResult)
    })

    it('should handle strings with complex patterns', () => {
      const complexString = 'Hello_world-This-is-a-Complex_example123'

      expect(toCamelCase(complexString)).toBe('helloWorldThisIsAComplexExample123')
    })

    it('should return empty string for non-alphabetic characters only', () => {
      expect(toCamelCase('1234567890_-')).toBe('')
    })
  })
})
