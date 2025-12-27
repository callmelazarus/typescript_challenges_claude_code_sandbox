// TODO: Define the Result type as a discriminated union
// It should have two variants: Ok and Err
// Ok should have: { success: true; value: T }
// Err should have: { success: false; error: E }
export type Result<T, E> =
  | { success: true; value: T }
  | { success: false; error: E };

// Helper functions to create Results (already implemented for you)
export function Ok<T>(value: T): Result<T, never> {
  return { success: true, value };
}

export function Err<E>(error: E): Result<never, E> {
  return { success: false, error };
}

// TODO: Implement this function
// Divide two numbers, return Err if dividing by zero
export function divide(a: number, b: number): Result<number, string> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Parse JSON string, return Err if parsing fails
// Hint: Use try/catch and JSON.parse
export function parseJSON<T>(json: string): Result<T, string> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Transform a successful result, pass through errors
// If result is Ok, apply fn to the value and return Ok(fn(value))
// If result is Err, return the error unchanged
export function mapResult<T, U, E>(
  result: Result<T, E>,
  fn: (value: T) => U
): Result<U, E> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this function
// Chain operations that can fail
// If result is Ok, apply fn to the value and return the result
// If result is Err, return the error unchanged
export function chainResult<T, U, E>(
  result: Result<T, E>,
  fn: (value: T) => Result<U, E>
): Result<U, E> {
  // Your code here
  throw new Error('Not implemented');
}
