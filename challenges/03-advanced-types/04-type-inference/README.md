# Challenge 16: Type Inference with `infer`

## Learning Goals
- Master the `infer` keyword for extracting types
- Understand how TypeScript infers types within conditional types
- Build advanced type utilities using `infer`
- Extract types from functions, arrays, promises, and more

## The Challenge

The `infer` keyword lets you extract and name types within conditional type checks. It's essential for building advanced type utilities.

### Type Challenges

1. **`GetReturnType<T>`**
   - Extract the return type from a function type
   - Example: `GetReturnType<() => string>` → `string`

2. **`GetParameters<T>`**
   - Extract parameter types as a tuple
   - Example: `GetParameters<(a: string, b: number) => void>` → `[string, number]`

3. **`GetFirstParameter<T>`**
   - Extract just the first parameter type
   - Example: `GetFirstParameter<(a: string, b: number) => void>` → `string`

4. **`UnwrapPromise<T>`**
   - Extract the type from a Promise
   - Example: `UnwrapPromise<Promise<string>>` → `string`

5. **`UnwrapArray<T>`**
   - Extract the element type from an array
   - Example: `UnwrapArray<string[]>` → `string`

6. **`GetConstructorParameters<T>`**
   - Extract constructor parameter types from a class
   - Example: `GetConstructorParameters<typeof MyClass>` → parameter tuple

7. **`DeepAwaited<T>`**
   - Recursively unwrap nested Promises
   - Example: `DeepAwaited<Promise<Promise<string>>>` → `string`

## Syntax Reference

```typescript
// Basic infer usage
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
//                                                  ^^^^^ extract return type

// Multiple infer
type First<T> = T extends [infer F, ...any[]] ? F : never;
//                         ^^^^^ extract first element

// Infer in nested positions
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
//                                        ^^^^^ extract Promise type
```

## Key Concepts

**`infer` creates a type variable** that TypeScript fills in during type checking:
- Only works inside `extends` clauses of conditional types
- Can extract types from any position
- Can be used multiple times in one conditional

## Real-World Use Cases

- Building your own utility types
- Library type definitions
- Framework type helpers (React, Vue props)
- API response type extraction
- Generic type manipulation

## Run Tests
```bash
npm test 04-type-inference
```
