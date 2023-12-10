import { toNonAccents } from '../src'

describe('toNonAccents', () => {
  describe('invalid inputs', () => {
    test('should handle empty strings and null values', () => {
      expect(toNonAccents('')).toBe('')
      expect(toNonAccents(null as any)).toBe('')
    })
  })

  describe('common cases inputs', () => {
    test('should convert accented characters to non-accented characters', () => {
      expect(toNonAccents('áéíóú')).toBe('aeiou')
      expect(toNonAccents('ÁÉÍÓÚ')).toBe('AEIOU')
      expect(toNonAccents('çÇñÑ')).toBe('cCnN')
    })

    test('should handle strings with mixed accented and non-accented characters', () => {
      expect(toNonAccents('Olá, mundo!')).toBe('Ola, mundo!')
      expect(toNonAccents('Cães são ótimos')).toBe('Caes sao otimos')
    })

    test('should leave non-accented characters unchanged', () => {
      expect(toNonAccents('hello')).toBe('hello')
      expect(toNonAccents('123')).toBe('123')
      expect(toNonAccents('!@#$')).toBe('!@#$')
    })
  })

  describe('exceptions', () => {
    test('should handle special characters like ß, æ, and œ', () => {
      expect(toNonAccents('Fußball')).toBe('Fussball')
      expect(toNonAccents('Encyclopædia')).toBe('Encyclopaedia')
      expect(toNonAccents('Cœur')).toBe('Coeur')
    })

    test('should correctly convert ñ, ç, đ, and ð', () => {
      expect(toNonAccents('ñoño')).toBe('nono')
      expect(toNonAccents('façade')).toBe('facade')
      expect(toNonAccents('đạo')).toBe('dao')
      expect(toNonAccents('Eðelland')).toBe('Edelland')
    })
  })
})
