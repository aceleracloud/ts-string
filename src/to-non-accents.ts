/**
 * Converts a string to its non-accented form. It replaces each accented character with its non-accented equivalent.
 * Characters that do not have a direct non-accented equivalent are either transformed to their closest equivalent
 * or kept as is if no equivalent is available. This function is primarily designed for Latin-based scripts.
 *
 * @param {string} string - The string to be converted.
 * @returns {string} The non-accented version of the input string. Returns an empty string if the input is falsy.
 */
export const toNonAccents = (string: string): string => {
  if (!string) return ''

  // exceptions
  string = string.replace(/ß/g, 'ss').replace(/æ/g, 'ae').replace(/œ/g, 'oe')

  const accents = 'ŕŔÀÁÂÃÄÅàáâãäåạÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽžªºĐđ'
  const accentsOut = 'rRAAAAAAaaaaaaaOOOOOOOooooooEEEEeeeedCcIIIIiiiiUUUUuuuuNnSsYyyZzaoDd'

  return string
    .split('')
    .map(letter => {
      const accentIndex = accents.indexOf(letter)
      return accentIndex !== -1 ? accentsOut[accentIndex] : letter
    })
    .join('')
}
