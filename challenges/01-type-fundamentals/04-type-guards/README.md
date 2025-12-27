# Challenge 4: Custom Type Guards

## Learning Goals
- Create custom type guard functions
- Understand type predicates (`is` keyword)
- Use type guards to safely narrow types
- Handle unknown and complex types

## The Challenge

Type guards help TypeScript understand what type something is at runtime. Create custom type guards:

1. **`isString(value: unknown): value is string`**
   - Check if a value is a string
   - Use the `is` keyword to create a type predicate

2. **`isUser(value: unknown): value is User`**
   - Check if an unknown value matches the User type
   - Verify all required properties exist and have correct types

3. **`isAPIError(error: unknown): error is APIError`**
   - Check if an error is an APIError with status code
   - Should handle different error types safely

4. **`assertNever(value: never): never`**
   - Helper for exhaustive checks in switch statements
   - Throws an error if called (should never happen in correct code)

## Type Predicates
The `value is Type` syntax tells TypeScript that if the function returns `true`, the value is definitely that type. This is more powerful than just returning a boolean.

## Run Tests
```bash
npm test 04-type-guards
```
