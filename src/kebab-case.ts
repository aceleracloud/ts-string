/**
 * Checks if a given string is in kebab-case format.
 *
 * Kebab-case strings consist of lowercase words separated by hyphens (e.g., 'kebab-case-example').
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns `true` if the string is in kebab-case format, otherwise returns `false`.
 */
export const isKebabCase = (str: string): boolean => /^[a-z]+(-[a-z]+)*$/.test(str)

/**
 * Converts a string to kebab-case format.
 *
 * This function can handle strings in various formats (like camelCase, snake_case, PascalCase, etc.),
 * converting them to kebab-case. It transforms camelCase and PascalCase by inserting hyphens
 * between lower and uppercase letters, replaces underscores and spaces with hyphens,
 * and converts the entire string to lowercase.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The string converted to kebab-case format.
 */
export const toKebabCase = (str: string): string => {
  return (
    str
      // Convert camelCase and PascalCase to kebab-case
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      // Convert snake_case and spaces to kebab-case
      .replace(/[_\s]+/g, '-')
      .toLowerCase()
  )
}
