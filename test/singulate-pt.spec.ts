import { singulatePt } from '../src'

describe('singulatePt', () => {
  describe('exceptions', () => {
    test('should correctly singularize "cidadões" to "cidadão"', () => {
      expect(singulatePt('cidadões')).toBe('cidadão')
    })

    test('should correctly singularize "mãos" to "mão"', () => {
      expect(singulatePt('mãos')).toBe('mão')
    })

    test('should correctly singularize "leões" to "leão"', () => {
      expect(singulatePt('leões')).toBe('leão')
    })

    test('should correctly singularize "mulheres" to "mulher"', () => {
      expect(singulatePt('mulheres')).toBe('mulher')
    })

    test('should correctly singularize "pães" to "pão"', () => {
      expect(singulatePt('pães')).toBe('pão')
    })

    test('should correctly singularize "homens" to "homem"', () => {
      expect(singulatePt('homens')).toBe('homem')
    })
  })

  describe('rules', () => {
    test('should correctly apply the ões to ão rule', () => {
      expect(singulatePt('leões')).toBe('leão')
    })

    test('should correctly apply the is to l rule', () => {
      expect(singulatePt('móveis')).toBe('móvel')
    })

    test('should correctly apply the xes to x rule', () => {
      expect(singulatePt('tóraxes')).toBe('tórax')
    })

    test('should correctly apply the zes to z rule', () => {
      expect(singulatePt('raízes')).toBe('raiz')
    })

    test('should correctly apply the ns to m rule', () => {
      expect(singulatePt('hifens')).toBe('hífen')
    })

    test('should correctly apply the res to r rule', () => {
      expect(singulatePt('pilares')).toBe('pilar')
    })
  })

  describe('common cases', () => {
    test('should remove s from words ending in vowels', () => {
      expect(singulatePt('casas')).toBe('casa')
    })

    test('should handle words ending in s that do not pluralize with "es"', () => {
      expect(singulatePt('lápis')).toBe('lápis')
    })

    test('should handle words with no plural form', () => {
      expect(singulatePt('táxi')).toBe('táxi')
    })

    test('should not alter non-plural words', () => {
      expect(singulatePt('carro')).toBe('carro')
    })

    test('should handle words ending in s that are the same in singular', () => {
      expect(singulatePt('ônibus')).toBe('ônibus')
    })
  })
})
