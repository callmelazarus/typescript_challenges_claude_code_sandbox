# Challenge 14: Mapped Types

## Learning Goals
- Transform object types programmatically
- Use `[K in keyof T]` to iterate over properties
- Combine mapped types with conditional types
- Understand how built-in utilities work under the hood

## The Challenge

Mapped types let you create new types by transforming properties of existing types. They're like `map()` for types.

### Type Challenges

1. **`Readonly<T>` (implement yourself)**
   - Make all properties readonly
   - Example: `MyReadonly<{ name: string }>` → `{ readonly name: string }`

2. **`Mutable<T>`**
   - Remove readonly from all properties
   - Opposite of Readonly
   - Hint: Use `-readonly`

3. **`Optional<T>`**
   - Make all properties optional (like Partial)
   - Example: `Optional<{ name: string }>` → `{ name?: string }`

4. **`Required<T>` (implement yourself)**
   - Make all properties required
   - Remove `?` from all properties
   - Hint: Use `-?`

5. **`Nullable<T>`**
   - Add `| null` to all property types
   - Example: `Nullable<{ name: string }>` → `{ name: string | null }`

6. **`DeepReadonly<T>`**
   - Make all properties readonly recursively
   - Nested objects should also become readonly
   - Advanced challenge!

### Function Challenges

7. **`pick<T, K>(obj: T, keys: K[]): Pick<T, K>`**
   - Runtime function that picks specific properties
   - Should be type-safe

8. **`mapValues<T, U>(obj: T, fn: (value: T[keyof T]) => U): MappedValues<T, U>`**
   - Transform all values in an object
   - Create the `MappedValues` type

## Syntax Reference

```typescript
// Basic mapped type
type Mapped<T> = {
  [K in keyof T]: T[K]
};

// With modifiers
type ReadonlyMapped<T> = {
  readonly [K in keyof T]: T[K]
};

type OptionalMapped<T> = {
  [K in keyof T]?: T[K]
};

// Remove modifiers
type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K]
};

type RemoveOptional<T> = {
  [K in keyof T]-?: T[K]
};
```

## Real-World Use Cases

- Form state types (make all fields optional for partial updates)
- API response types (make all fields nullable for loading states)
- Configuration objects (make all fields readonly)
- Deep freezing objects
- Type-safe object transformations

## Run Tests
```bash
npm test 02-mapped-types
```
