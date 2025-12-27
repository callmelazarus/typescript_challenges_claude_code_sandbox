# Challenge 2: Introduction to Generics

## Learning Goals
- Understand why generics are useful
- Create reusable, type-safe functions
- Practice generic constraints

## The Challenge

Implement generic functions that work with multiple types while maintaining type safety:

1. **`identity<T>(value: T): T`**
   - The classic generic example - return the value unchanged
   - TypeScript should infer the return type from the input

2. **`firstElement<T>(arr: T[]): T | undefined`**
   - Return the first element of an array
   - Return `undefined` if the array is empty

3. **`mapArray<T, U>(arr: T[], fn: (item: T) => U): U[]`**
   - Transform an array using a mapping function
   - The output type can be different from the input type

4. **`filterByProperty<T, K extends keyof T>(arr: T[], key: K, value: T[K]): T[]`**
   - Filter an array of objects by a property value
   - Use generic constraints to ensure type safety

## Why Generics?
Without generics, you'd need to write separate functions for each type, or use `any` (which loses type safety). Generics let you write code once that works with any type while keeping full type checking.

## Run Tests
```bash
npm test 02-generics-intro
```
