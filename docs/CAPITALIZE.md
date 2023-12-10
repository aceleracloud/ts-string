# Capitalize Function

The `capitalize` function is designed to transform strings into a capitalized format. It can be used to capitalize the first letter of a single word or each word in a sentence, depending on the parameters provided.

## Function Signature

```typescript
function capitalize(string: string, capitalizeEachWord: boolean = false, separator: string = ' '): string
```

- `string`: The string to be capitalized.
- `capitalizeEachWord` (optional): A boolean flag to indicate whether each word in the string should be capitalized. Default is `false`.
- `separator` (optional): A string representing the word separator in the input string. Default is a space (`' '`).

## Examples

### Basic Usage

To capitalize the first letter of a single word:

```javascript
import { capitalize } from './capitalize'

console.log(capitalize('hello')) // Outputs: "Hello"
```

### Capitalizing Each Word in a Sentence

To capitalize the first letter of each word in a sentence:

```javascript
console.log(capitalize('hello world', true)) // Outputs: "Hello World"
```

### Using a Custom Separator

To capitalize words in a string separated by a custom separator (e.g., hyphen):

```javascript
console.log(capitalize('hello-world', true, '-')) // Outputs: "Hello-World"
```

### Handling Multiple Separators

The function correctly handles cases where multiple separators are present:

```javascript
console.log(capitalize('hello--world', true, '-')) // Outputs: "Hello--World"
```

### Non-Alphabetic Characters

Non-alphabetic characters are not altered:

```javascript
console.log(capitalize('1234')) // Outputs: "1234"
```

## Notes

- The function does not revert all transformations made by a slugify function, such as the removal of accents or special characters.
- The function is case-insensitive for the input string.
