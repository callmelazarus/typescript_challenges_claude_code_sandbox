# Challenge 13: Conditional Types

## Learning Goals
- Understand the `T extends U ? X : Y` syntax
- Create types that change based on conditions
- Use conditional types for type-level logic
- Master TypeScript's built-in conditional utility types

## The Challenge

Conditional types let you create types that behave like if/else statements at the type level. They're one of TypeScript's most powerful features.

### Type Challenges

1. **`IsString<T>`**
   - Type that resolves to `true` if T is a string, `false` otherwise
   - Example: `IsString<string>` → `true`, `IsString<number>` → `false`

2. **`IsArray<T>`**
   - Type that resolves to `true` if T is an array, `false` otherwise
   - Example: `IsArray<number[]>` → `true`, `IsArray<number>` → `false`

3. **`ArrayElementType<T>`**
   - Extract the element type from an array
   - Example: `ArrayElementType<string[]>` → `string`
   - Return `never` if T is not an array

4. **`NonNullable<T>` (implement yourself)**
   - Remove `null` and `undefined` from a type
   - Example: `NonNullable<string | null | undefined>` → `string`

5. **`ExtractNumbers<T>`**
   - Extract only number types from a union
   - Example: `ExtractNumbers<string | number | boolean | 42>` → `number | 42`

### Function Challenges

6. **`wrapInArray<T>(value: T): WrapInArray<T>`**
   - If T is already an array, return T
   - Otherwise, return T[]
   - Use conditional types for the return type

## Syntax Reference

```typescript
type Example<T> = T extends string ? 'yes' : 'no';

// The condition: T extends string
// If true: return 'yes'
// If false: return 'no'
```

## Real-World Use Cases

- React props: `type Props<T> = T extends string ? { value: T } : { values: T[] }`
- API responses: Different types based on success/failure
- Function overloads: Return type depends on input type
- Library APIs: Flexible types that adapt to usage

## Run Tests
```bash
npm test 01-conditional-types
```
