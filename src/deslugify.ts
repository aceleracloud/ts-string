/**
 * Converts a slugified string back to a normal, readable string. It capitalizes the first
 * letter of each word in the slug and replaces hyphens with spaces.
 * Note that this function does not revert all transformations made by a slugify function,
 * such as the removal of accents or special characters.
 *
 * @param {string} slug - The slugified string to be converted.
 * @returns {string} The deslugified version of the input string, with each word capitalized
 * and hyphens replaced by spaces. Returns an empty string if the input is falsy.
 */
export const deslugify = (slug: string): string => {
  if (!slug) return ''

  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
