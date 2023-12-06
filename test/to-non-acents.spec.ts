import { toNonAcents } from '../src'

describe('toNonAcents', () => {
  test('should convert accented characters to non-accented characters', () => {
    expect(toNonAcents('áéíóú')).toBe('aeiou')
    expect(toNonAcents('ÁÉÍÓÚ')).toBe('AEIOU')
    expect(toNonAcents('çÇñÑ')).toBe('cCnN')
  })

  test('should handle strings with mixed accented and non-accented characters', () => {
    expect(toNonAcents('Olá, mundo!')).toBe('Ola, mundo!')
    expect(toNonAcents('Cães são ótimos')).toBe('Caes sao otimos')
  })

  test('should leave non-accented characters unchanged', () => {
    expect(toNonAcents('hello')).toBe('hello')
    expect(toNonAcents('123')).toBe('123')
    expect(toNonAcents('!@#$')).toBe('!@#$')
  })

  test('should handle empty strings and null values', () => {
    expect(toNonAcents('')).toBe('')
    expect(toNonAcents(null as any)).toBe('')
  })

  test('should handle special characters like ß, ñ, and ÿ', () => {
    expect(toNonAcents('Fußball')).toBe('Fussball')
    expect(toNonAcents('ñoño')).toBe('nono')
    expect(toNonAcents('lýður')).toBe('lydur')
  })
})
