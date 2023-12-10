# ToNonAccents Function

The `toNonAccents` function removes accents and special characters from a string, converting them into their non-accented equivalents. This function is particularly useful for normalizing strings in environments where accented characters may cause issues, such as URLs or file systems.

## Function Signature

```typescript
function toNonAccents(string: string): string
```

- `string`: The string from which accents and special characters are to be removed.

## Examples

### Basic Usage

To remove accents and special characters from a string:

```javascript
import { toNonAccents } from './toNonAccents'

console.log(toNonAccents('Olá, Mündo!')) // Outputs: "Ola, Mundo"
```

### Handling Special Cases

The function handles special cases such as German 'ß', which is replaced with 'ss':

```javascript
console.log(toNonAccents('Fußball')) // Outputs: "Fussball"
```

### Working with Various Accented Characters

The function can handle a variety of accented characters from different languages:

```javascript
console.log(toNonAccents('Æøå Éñç')) // Outputs: "Aeoa Enc"
```

### Preserving Non-Accented Characters

Non-accented characters and spaces are preserved:

```javascript
console.log(toNonAccents('hello world')) // Outputs: "hello world"
```

## Notes

- The function is designed to handle a wide range of accented and special characters used in various languages.
- It is useful for creating standardized, accent-free versions of strings for purposes like sorting, searching, or storing in systems that do not support such characters.
