import { Result, Ok, Err } from '../01-error-handling/challenge';

// Type definitions
export type User = {
  id: number;
  name: string;
  email: string;
};

// Mock database
const mockUsers: Record<number, User> = {
  1: { id: 1, name: 'Alice', email: 'alice@example.com' },
  2: { id: 2, name: 'Bob', email: 'bob@example.com' },
  3: { id: 3, name: 'Charlie', email: 'charlie@example.com' },
};

// TODO: Implement this async function
// Simulate fetching a user from an API with a 10ms delay
// Return the user if found, throw an error if not found
export async function fetchUser(id: number): Promise<User> {
  // Your code here
  // Hint: Use setTimeout wrapped in a Promise
  // Return mockUsers[id] after the delay
  throw new Error('Not implemented');
}

// TODO: Implement this async function
// Same as fetchUser but return a Result type instead of throwing
// Return Err if id is negative or user not found
// Return Ok with the user if found
export async function fetchUserWithError(
  id: number
): Promise<Result<User, string>> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this async function
// Fetch multiple users in parallel using Promise.all
// Return an array of users
export async function fetchMultipleUsers(ids: number[]): Promise<User[]> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this async function
// Retry an async operation up to maxRetries times
// If all retries fail, throw the last error
// If any attempt succeeds, return the result
export async function retryOperation<T>(
  fn: () => Promise<T>,
  maxRetries: number
): Promise<T> {
  // Your code here
  throw new Error('Not implemented');
}
