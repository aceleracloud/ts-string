# Deslugify Function

The `deslugify` function converts slugified strings back to a more readable format. It separates words in the slug using spaces and capitalizes the first letter of each word.

## Function Signature

```typescript
function deslugify(slug: string): string
```

- `slug`: The slugified string to be converted.

## Examples

### Basic Usage

To convert a slug back to a normal, readable string:

```javascript
import { deslugify } from './deslugify'

console.log(deslugify('hello-world')) // Outputs: "Hello World"
```

### Handling Slugs with Multiple Hyphens

The function correctly handles slugs with multiple hyphens:

```javascript
console.log(deslugify('hello-world-today')) // Outputs: "Hello World Today"
```

### Slugs with a Single Word

The function capitalizes a single word slug:

```javascript
console.log(deslugify('hello')) // Outputs: "Hello"
```

### Slugs with Uppercase Letters

The function handles slugs with uppercase letters, converting them to the appropriate case:

```javascript
console.log(deslugify('Hello-World')) // Outputs: "Hello World"
```

## Notes

- The function is designed to convert slugified strings into a human-readable format with capitalized words.
- It is particularly useful for displaying slug-based identifiers or titles in a user-friendly format.
