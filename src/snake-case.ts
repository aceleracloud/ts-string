/**
 * Checks if a string is in snake_case format.
 *
 * @param {string} str - The string to be checked.
 * @returns {boolean} Returns `true` if the string is in snake_case format, otherwise returns `false`.
 */
export const isSnakeCase = (str: string): boolean => /^[a-z]+(_[a-z]+)*$/.test(str)

/**
 * Converts a string to snake_case format.
 * This function handles strings in spaced case, kebab case, camelCase, and PascalCase,
 * converting them to snake_case. For spaced and kebab cases, it replaces spaces and hyphens
 * with underscores (_) and converts to lowercase. For camelCase and PascalCase, it adds an
 * underscore before each uppercase letter and converts to lowercase. An underscore at the
 * beginning of the string is removed if present.
 *
 * @param {string} str - The string to be converted to snake_case.
 * @returns {string} The string converted to snake_case.
 */
export const toSnakeCase = (str: string): string => {
  return (
    str
      // Inserts an underscore before uppercase letters in camelCase and PascalCase
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      // Fixes cases where an uppercase letter is followed by multiple lowercase letters in camelCase
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      // Converts kebab-case and spaced case to snake_case
      .replace(/[\s-]+/g, '_')
      .toLowerCase()
  )
}
