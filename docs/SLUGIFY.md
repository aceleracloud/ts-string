# Slugify Function

The `slugify` function converts strings into a slug format suitable for URLs. A slug is a string where each word is in lowercase and separated by hyphens. This format is widely used for creating user-friendly and SEO-friendly URLs.

## Function Signature

```typescript
function slugify(string: string): string
```

- `string`: The string to be converted to a slug.

## Examples

### Basic Usage

To convert a string to a slug:

```javascript
import { slugify } from './slugify'

console.log(slugify('Hello World')) // Outputs: "hello-world"
```

### Handling Special Characters

The function removes special characters and replaces spaces with hyphens:

```javascript
console.log(slugify('Hello, World!')) // Outputs: "hello-world"
```

### Converting Strings with Non-Alphanumeric Characters

The function handles non-alphanumeric characters by omitting them:

```javascript
console.log(slugify('Hello@World')) // Outputs: "hello-world"
```

### Dealing with Multiple Spaces

The function converts multiple consecutive spaces to a single hyphen:

```javascript
console.log(slugify('Hello   World')) // Outputs: "hello-world"
```

### Capital Letters

The function converts all letters to lowercase:

```javascript
console.log(slugify('HelloWorld')) // Outputs: "helloworld"
```

## Notes

- The function is designed to handle strings with spaces, special characters, and uppercase letters, converting them into a lowercase slug format.
- It is particularly useful for creating URLs, filenames, and identifiers where a clean, readable format is desired.
