# Challenge 5: Error Handling Patterns

## Learning Goals
- Learn type-safe error handling with Result types
- Avoid throwing exceptions for expected errors
- Use discriminated unions for error states
- Handle errors functionally

## The Challenge

Instead of throwing exceptions everywhere, use a `Result<T, E>` type for predictable error handling:

1. **Implement the `Result<T, E>` type**
   - `Ok<T>` for successful results
   - `Err<E>` for errors
   - Use discriminated unions

2. **`divide(a: number, b: number): Result<number, string>`**
   - Return `Ok` with the result if b is not zero
   - Return `Err` with an error message if b is zero

3. **`parseJSON<T>(json: string): Result<T, string>`**
   - Parse JSON and return the result
   - Return `Err` if parsing fails

4. **`mapResult<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E>`**
   - Transform a successful result
   - Pass through errors unchanged

5. **`chainResult<T, U, E>(result: Result<T, E>, fn: (value: T) => Result<U, E>): Result<U, E>`**
   - Chain operations that can fail
   - Also known as `flatMap` or `bind`

## Why This Pattern?
This pattern makes errors explicit in the type system. You can't forget to handle errors because TypeScript forces you to check the result type.

## Run Tests
```bash
npm test 01-error-handling
```
