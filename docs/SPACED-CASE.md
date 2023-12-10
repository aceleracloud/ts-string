# SpacedCase Function

The `spacedCase` function converts strings into a spaced format where each word is separated by a space and all in lowercase. This format is particularly useful for creating user-readable strings from various coding conventions.

## Function Signature

```typescript
function spacedCase(string: string): string
```

- `string`: The string to be converted to spaced case.

## Examples

### Basic Usage

To convert a string to spaced case:

```javascript
import { spacedCase } from './spacedCase'

console.log(spacedCase('HelloWorld')) // Outputs: "hello world"
```

### Handling Special Characters

The function converts hyphens, underscores, and other non-alphanumeric characters to spaces:

```javascript
console.log(spacedCase('Hello-World')) // Outputs: "hello world"
console.log(spacedCase('Hello_World!')) // Outputs: "hello world"
```

### Converting CamelCase and PascalCase Strings

The function can handle camelCase and PascalCase strings, placing spaces between words:

```javascript
console.log(spacedCase('helloWorldAgain')) // Outputs: "hello world again"
console.log(spacedCase('HelloWorldAgain')) // Outputs: "hello world again"
```

### Dealing with Continuous Non-Alphanumeric Characters

The function handles strings with continuous non-alphanumeric characters by replacing them with a single space:

```javascript
console.log(spacedCase('hello---world')) // Outputs: "hello world"
console.log(spacedCase('hello   world')) // Outputs: "hello world"
```

## Notes

- The function is designed to handle strings with various non-alphanumeric characters, converting them into spaces.
- It is useful for converting programming identifiers and compound words into a format that is easily readable and understandable for general audiences.
