/**
 * Checks if a given string is in PascalCase format.
 *
 * PascalCase strings start with an uppercase letter and have no spaces,
 * with each word starting with an uppercase letter (e.g., 'PascalCaseExample').
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns `true` if the string is in PascalCase format, otherwise returns `false`.
 */
export const isPascalCase = (str: string): boolean => /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(str)

/**
 * Converts a string to PascalCase format.
 *
 * This function can handle strings in various formats (like camelCase, snake_case, kebab-case, etc.),
 * converting them to PascalCase. It transforms words in the string to start with uppercase letters
 * and removes non-alphabetic characters such as underscores, hyphens, and spaces.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string converted to PascalCase format.
 */
export const toPascalCase = (str: string): string => {
  return (
    str
      // Substitui caracteres não alfanuméricos por espaços
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      // Converte para PascalCase
      .replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase())
      // Remove os espaços
      .replace(/\s+/g, '')
  )
}
