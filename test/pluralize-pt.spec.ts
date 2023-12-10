import { pluralizePt } from '../src'

describe('pluralizePt', () => {
  describe('invalid inputs', () => {
    test('should handle empty value', () => {
      expect(pluralizePt('')).toBe('')
    })

    test('should handle null value', () => {
      expect(pluralizePt(null as any)).toBe('')
    })

    test('should handle undefined value', () => {
      expect(pluralizePt(undefined as any)).toBe('')
    })
  })

  describe('exceptions', () => {
    test('should correctly pluralize "cidadão" as "cidadãos"', () => {
      expect(pluralizePt('cidadão')).toBe('cidadãos')
    })

    test('should correctly pluralize "mão" as "mãos"', () => {
      expect(pluralizePt('mão')).toBe('mãos')
    })

    test('should correctly pluralize "qualquer" as "quaisquer"', () => {
      expect(pluralizePt('qualquer')).toBe('quaisquer')
    })

    test('should correctly pluralize "alemão" as "alemães"', () => {
      expect(pluralizePt('alemão')).toBe('alemães')
    })

    test('should correctly pluralize "cão" as "cães"', () => {
      expect(pluralizePt('cão')).toBe('cães')
    })

    test('should correctly pluralize "irmão" as "irmãos"', () => {
      expect(pluralizePt('irmão')).toBe('irmãos')
    })
  })

  describe('testing rules', () => {
    test('should correctly apply the ão to ões rule', () => {
      expect(pluralizePt('pão')).toBe('pães')
    })

    test('should correctly apply the m to ns rule', () => {
      expect(pluralizePt('homem')).toBe('homens')
    })

    test('should correctly apply the l to is rule', () => {
      expect(pluralizePt('animal')).toBe('animais')
    })

    test('should correctly apply the us to i rule', () => {
      expect(pluralizePt('álbum')).toBe('álbuns')
    })

    test('should correctly apply the x to xes rule', () => {
      expect(pluralizePt('tórax')).toBe('tóraxes')
    })
  })

  describe('common cases', () => {
    test('should add s to words ending in vowels', () => {
      expect(pluralizePt('casa')).toBe('casas')
    })

    test('should handle words already in plural', () => {
      expect(pluralizePt('casas')).toBe('casas')
    })

    test('should handle words ending in z', () => {
      expect(pluralizePt('luz')).toBe('luzes')
    })

    test('should handle words ending in r', () => {
      expect(pluralizePt('amor')).toBe('amores')
    })

    test('should handle words ending in s', () => {
      expect(pluralizePt('país')).toBe('países')
    })
  })
})
