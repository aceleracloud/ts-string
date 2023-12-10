# SnakeCase Function

The `snakeCase` function converts strings into snake case format. Snake case is a naming convention where each word is in lowercase and separated by underscores, commonly used in many programming languages and contexts.

## Function Signature

```typescript
function snakeCase(string: string): string
```

- `string`: The string to be converted to snake case.

## Examples

### Basic Usage

To convert a string to snake case:

```javascript
import { snakeCase } from './snakeCase'

console.log(snakeCase('Hello World')) // Outputs: "hello_world"
```

### Handling Special Characters

The function converts spaces, hyphens, and other non-alphanumeric characters to underscores:

```javascript
console.log(snakeCase('Hello-World')) // Outputs: "hello_world"
console.log(snakeCase('Hello World!')) // Outputs: "hello_world"
```

### Converting CamelCase Strings

The function can handle camelCase strings, placing underscores between words:

```javascript
console.log(snakeCase('helloWorldAgain')) // Outputs: "hello_world_again"
```

### Dealing with Continuous Non-Alphanumeric Characters

Multiple non-alphanumeric characters are replaced by a single underscore:

```javascript
console.log(snakeCase('Hello   World')) // Outputs: "hello_world"
console.log(snakeCase('Hello---World')) // Outputs: "hello_world"
```

## Notes

- The function is designed to handle strings with spaces, hyphens, camelCase, and other non-alphanumeric characters.
- It's useful for converting strings to a format suitable for identifiers in programming environments where snake case is the convention.
