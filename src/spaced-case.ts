/**
 * Checks if a given string is in Spaced Case format.
 *
 * Spaced Case strings consist of words that may start with either uppercase or lowercase letters,
 * separated by spaces (e.g., 'Spaced Case', 'spaced case', 'Spaced case').
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns `true` if the string is in Spaced Case format, otherwise returns `false`.
 */
export const isSpacedCase = (str: string): boolean => /^[A-Za-z]+(\s[A-Za-z]+)+$/.test(str)

/**
 * Converts a string to Spaced Case format.
 *
 * This function can handle strings in various formats (like camelCase, snake_case, kebab-case, PascalCase),
 * converting them to Spaced Case. It inserts a space before each uppercase letter in camelCase and PascalCase,
 * replaces underscores and hyphens with spaces, removes consecutive spaces, and trims leading and trailing spaces.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string converted to Spaced Case format.
 */
export const toSpacedCase = (str: string): string => {
  return (
    str
      // Insere um espaço antes das letras maiúsculas em camelCase e PascalCase, exceto a primeira letra
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      // Substitui underscores e hífens por espaços
      .replace(/[_-]+/g, ' ')
      // Capitaliza a primeira letra de cada palavra
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
      .trim()
  )
}
