# PluralizePt Function

The `pluralizePt` function converts Portuguese words from their singular forms to plural forms. It applies standard pluralization rules and handles exceptions.

## Function Signature

```typescript
function pluralizePt(string: string): string
```

- `string`: The Portuguese word in its singular form to be converted to plural.

## Examples

### Basic Usage

To convert a singular word to plural:

```javascript
import { pluralizePt } from './pluralizePt'

console.log(pluralizePt('cidade')) // Outputs: "cidades"
```

### Handling Exceptions

The function correctly handles exceptions:

```javascript
console.log(pluralizePt('cão')) // Outputs: "cães"
```

### Words with Irregular Plural Forms

Handling words with irregular plural forms:

```javascript
console.log(pluralizePt('mão')) // Outputs: "mãos"
```

## Notes

- The function includes a dictionary of exceptions for words that do not follow standard singularization rules.
- It is designed specifically for the Portuguese language and covers a wide range of pluralization patterns.
