import { toNonAccents } from './to-non-accents'

/**
 * Converts a given string into a URL-friendly slug format.
 * This includes converting the string to lowercase, removing accents,
 * replacing spaces with hyphens, and removing special characters.
 *
 * @param {string} string - The string to be converted into a slug.
 * @returns {string} The slugified version of the input string.
 */
export const slugify = (string: string): string => {
  if (!string) return ''

  // Remove accents using the toNonAccents function
  let slug = toNonAccents(string)

  // Convert to lowercase
  slug = slug.toLowerCase()

  // Replace spaces and special characters
  slug = slug
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove characters that are not letters, numbers, or hyphens

  // Remove extra hyphens (multiple consecutive hyphens)
  slug = slug.replace(/-+/g, '-')

  // Remove hyphens from the beginning and end
  while (slug.startsWith('-')) {
    slug = slug.substring(1)
  }
  while (slug.endsWith('-')) {
    slug = slug.substring(0, slug.length - 1)
  }

  return slug
}
