# Challenge 6: Async Patterns with TypeScript

## Learning Goals
- Type async functions correctly with Promise<T>
- Handle async errors properly
- Combine multiple async operations
- Use async/await with type safety

## The Challenge

Master asynchronous TypeScript patterns:

1. **`fetchUser(id: number): Promise<User>`**
   - Simulate an async API call
   - Return a User after a delay
   - Use `setTimeout` and Promise

2. **`fetchUserWithError(id: number): Promise<Result<User, string>>`**
   - Same as above but return a Result type
   - Return Err if id is negative
   - Demonstrates async + Result pattern

3. **`fetchMultipleUsers(ids: number[]): Promise<User[]>`**
   - Fetch multiple users in parallel
   - Use Promise.all
   - Return all users when all fetches complete

4. **`retryOperation<T>(fn: () => Promise<T>, maxRetries: number): Promise<T>`**
   - Retry an async operation on failure
   - Stop after maxRetries attempts
   - Throw the last error if all retries fail

## Key Concepts
- `async` functions always return `Promise<T>`
- `await` unwraps `Promise<T>` to `T`
- `Promise.all()` runs promises in parallel
- Error handling with try/catch in async functions

## Run Tests
```bash
npm test 02-async-patterns
```
