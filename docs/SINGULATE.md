# SingulatePt Function

The `singulatePt` function converts Portuguese words from their plural forms to singular forms. It handles regular pluralization rules as well as exceptions.

## Function Signature

```typescript
function singulatePt(string: string): string
```

- `string`: The Portuguese word in its plural form to be converted to singular.

## Examples

### Basic Usage

To convert a plural word to singular:

```javascript
import { singulatePt } from './singulatePt'

console.log(singulatePt('cidades')) // Outputs: "cidade"
```

### Handling Exceptions

The function correctly handles exceptions:

```javascript
console.log(singulatePt('mãos')) // Outputs: "mão"
```

### Words with No Singular Form

Some words that don't change in singular form:

```javascript
console.log(singulatePt('lápis')) // Outputs: "lápis"
```

## Notes

- The function includes a dictionary of exceptions for words that do not follow standard pluralization rules.
- It is designed specifically for the Portuguese language.
