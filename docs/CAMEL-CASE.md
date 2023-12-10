# CamelCase Function

The `camelCase` function converts strings into camel case format, which is a common naming convention in many programming languages. This format starts with a lowercase letter and capitalizes each subsequent word.

## Function Signature

```typescript
function camelCase(string: string): string
```

- `string`: The string to be converted to camel case.

## Examples

### Basic Usage

To convert a string to camel case:

```javascript
import { camelCase } from './camelCase'

console.log(camelCase('hello world')) // Outputs: "helloWorld"
```

### Handling Special Characters

The function removes non-alphabetic characters and capitalizes the letter following each removed character:

```javascript
console.log(camelCase('hello-world')) // Outputs: "helloWorld"
console.log(camelCase('hello_world')) // Outputs: "helloWorld"
```

### Converting Multiple Words

The function can handle strings with multiple words:

```javascript
console.log(camelCase('hello world again')) // Outputs: "helloWorldAgain"
```

### Dealing with Uppercase Strings

The function converts uppercase strings appropriately:

```javascript
console.log(camelCase('HELLO WORLD')) // Outputs: "helloWorld"
```

## Notes

- The function is designed to handle strings with spaces, hyphens, underscores, and other non-alphabetic characters.
- It always ensures the first character of the returned string is lowercase.
- The function is useful for formatting strings to match camel case naming conventions in programming.
