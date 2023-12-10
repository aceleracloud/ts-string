/**
 * Checks if a given string is in camelCase format.
 *
 * CamelCase strings start with a lowercase letter and have no spaces,
 * with each new word starting with an uppercase letter (e.g., 'camelCaseExample').
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns `true` if the string is in camelCase format, otherwise returns `false`.
 */
export const isCamelCase = (str: string): boolean => /^[a-z]+([A-Z][a-z]*)+$/.test(str)

/**
 * Converts a string to camelCase format.
 *
 * This function can handle strings in various formats (like snake_case, kebab-case, PascalCase, etc.),
 * converting them to camelCase. It removes any digits, underscores, or hyphens at the beginning of the string,
 * converts characters following any hyphens or underscores to uppercase, and ensures the first character
 * of the resulting string is lowercase.
 *
 * Note: This function does not handle strings with spaces or special characters correctly.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string converted to camelCase format.
 */
export const toCamelCase = (str: string): string => {
  return (
    str
      // Remove special chars or numbers from string start
      .replace(/^[\d-_]+/, '')
      // Convert kebab-case and snake_case to camelCase
      .replace(/([-_]\w)/g, group => group[1].toUpperCase())
      // Ensure that first letter are lower case according camelCase
      .replace(/^./, firstChar => firstChar.toLowerCase())
  )
}
