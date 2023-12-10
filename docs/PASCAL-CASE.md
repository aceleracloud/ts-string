# PascalCase Function

The `pascalCase` function converts strings into PascalCase format. PascalCase, or Upper Camel Case, is a naming convention where each word begins with an uppercase letter and no separators are used.

## Function Signature

```typescript
function pascalCase(string: string): string
```

- `string`: The string to be converted to PascalCase.

## Examples

### Basic Usage

To convert a string to PascalCase:

```javascript
import { pascalCase } from './pascalCase'

console.log(pascalCase('hello world')) // Outputs: "HelloWorld"
```

### Handling Special Characters

The function removes non-alphanumeric characters and capitalizes the letter following each removed character:

```javascript
console.log(pascalCase('hello-world')) // Outputs: "HelloWorld"
console.log(pascalCase('hello world!')) // Outputs: "HelloWorld"
```

### Converting CamelCase and SnakeCase Strings

The function can handle camelCase and snake_case strings, capitalizing each word:

```javascript
console.log(pascalCase('helloWorldAgain')) // Outputs: "HelloWorldAgain"
console.log(pascalCase('hello_world_again')) // Outputs: "HelloWorldAgain"
```

### Dealing with Continuous Non-Alphanumeric Characters

The function handles strings with continuous non-alphanumeric characters by capitalizing each new word:

```javascript
console.log(pascalCase('hello   world')) // Outputs: "HelloWorld"
console.log(pascalCase('hello---world')) // Outputs: "HelloWorld"
```

## Notes

- The function is designed to handle strings with spaces, hyphens, underscores, and other non-alphanumeric characters.
- It is useful for converting strings to a format suitable for class names, object keys, and other programming identifiers where PascalCase is the convention.
