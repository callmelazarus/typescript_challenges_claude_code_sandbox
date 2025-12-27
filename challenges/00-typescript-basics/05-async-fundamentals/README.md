# Challenge 0.5: Async Fundamentals

## Learning Goals
- Understand Promises and how to create them
- Use async/await syntax
- Handle errors with try/catch
- Chain promises and handle multiple async operations

## The Challenge

1. **`delay(ms: number): Promise<void>`**
   - Return a promise that resolves after ms milliseconds
   - Use setTimeout

2. **`fetchData(url: string): Promise<string>`**
   - Simulate API call with 100ms delay
   - Return promise that resolves with `"Data from {url}"`

3. **`fetchWithError(shouldFail: boolean): Promise<string>`**
   - If shouldFail is true, reject with error
   - Otherwise resolve with "Success"

4. **`getData(): Promise<string>`** (using async/await)
   - Call fetchData() using async/await
   - Return the result

5. **`handleError(): Promise<string>`** (error handling)
   - Call fetchWithError(true) in try/catch
   - Return "Error handled" if it fails

6. **`parallel(urls: string[]): Promise<string[]>`**
   - Fetch multiple URLs in parallel using Promise.all()
   - Return array of results

## Run Tests
```bash
npm test 05-async-fundamentals
```
