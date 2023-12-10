/**
 * Capitalizes the first letter of each word in a string. If 'capitalizeEachWord' is true,
 * capitalizes the first letter of each word, considering 'separator' as the word delimiter.
 *
 * @param {string} string - The string to be capitalized.
 * @param {boolean} [capitalizeEachWord=false] - Whether to capitalize each word in the string.
 * @param {string} [separator=' '] - The character used as a word separator in the string.
 * @returns {string} The capitalized string. Returns an empty string if the input is falsy.
 */
export const capitalize = (string: string, capitalizeEachWord = false, separator = ' '): string => {
  if (!string) return ''

  if (capitalizeEachWord) {
    return string
      .split(separator)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(separator)
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
