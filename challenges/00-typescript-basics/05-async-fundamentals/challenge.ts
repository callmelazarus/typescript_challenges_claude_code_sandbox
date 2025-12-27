// TODO: Implement delay function
// Return a Promise that resolves after ms milliseconds
export function delay(ms: number): Promise<void> {
  // Your code here
  // Hint: new Promise((resolve) => setTimeout(resolve, ms))
  throw new Error('Not implemented');
}

// TODO: Implement fetchData
// Simulate API call with 100ms delay
// Return promise resolving with "Data from {url}"
export function fetchData(url: string): Promise<string> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement fetchWithError
// If shouldFail is true, reject with Error("Failed")
// Otherwise resolve with "Success"
export function fetchWithError(shouldFail: boolean): Promise<string> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement getData using async/await
// Call fetchData("https://api.example.com") and return result
export async function getData(): Promise<string> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement handleError with try/catch
// Call fetchWithError(true) in try/catch
// Return "Error handled" if error caught
export async function handleError(): Promise<string> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement parallel
// Use Promise.all() to fetch multiple URLs in parallel
export async function parallel(urls: string[]): Promise<string[]> {
  // Your code here
  throw new Error('Not implemented');
}
