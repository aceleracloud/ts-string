# KebabCase Function

The `kebabCase` function converts strings into kebab case format. Kebab case is a naming convention where each word is in lowercase and separated by hyphens, often used in URLs and CSS class names.

## Function Signature

```typescript
function kebabCase(string: string): string
```

- `string`: The string to be converted to kebab case.

## Examples

### Basic Usage

To convert a string to kebab case:

```javascript
import { kebabCase } from './kebabCase'

console.log(kebabCase('Hello World')) // Outputs: "hello-world"
```

### Handling Special Characters

The function converts spaces, underscores, and other non-alphanumeric characters to hyphens:

```javascript
console.log(kebabCase('Hello_World')) // Outputs: "hello-world"
console.log(kebabCase('Hello World!')) // Outputs: "hello-world"
```

### Converting CamelCase Strings

The function can handle camelCase strings, placing hyphens between words:

```javascript
console.log(kebabCase('helloWorldAgain')) // Outputs: "hello-world-again"
```

### Dealing with Continuous Non-Alphanumeric Characters

Multiple non-alphanumeric characters are replaced by a single hyphen:

```javascript
console.log(kebabCase('Hello   World')) // Outputs: "hello-world"
console.log(kebabCase('Hello---World')) // Outputs: "hello-world"
```

## Notes

- The function is designed to handle strings with spaces, underscores, camelCase, and other non-alphanumeric characters.
- It's particularly useful for converting strings to a format suitable for web URLs and CSS class names.
