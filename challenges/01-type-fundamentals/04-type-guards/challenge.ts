// Type definitions
export type User = {
  id: number;
  name: string;
  email: string;
};

export type APIError = {
  message: string;
  statusCode: number;
};

// TODO: Implement this type guard
// Return true if the value is a string
// Use 'value is string' as the return type
export function isString(value: unknown): value is string {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this type guard
// Return true if the value is a valid User object
// Check that id is a number, name is a string, and email is a string
export function isUser(value: unknown): value is User {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this type guard
// Return true if the error is an APIError
// Check that message is a string and statusCode is a number
export function isAPIError(error: unknown): error is APIError {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// This function should never be called - it's used for exhaustive checking
// If TypeScript compiles and this is called, throw an error
// The parameter type is 'never', meaning it should be impossible to call
export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

// Example usage of assertNever for exhaustive checking:
export type Status = 'pending' | 'active' | 'completed';

export function handleStatus(status: Status): string {
  switch (status) {
    case 'pending':
      return 'Status is pending';
    case 'active':
      return 'Status is active';
    case 'completed':
      return 'Status is completed';
    default:
      // If we add a new status and forget to handle it,
      // TypeScript will error here because status won't be 'never'
      return assertNever(status);
  }
}
