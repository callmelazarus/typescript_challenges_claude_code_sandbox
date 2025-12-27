// TODO: Implement this generic function
// Return the value unchanged, but preserve its type
export function identity<T>(value: T): T {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this generic function
// Return the first element of an array, or undefined if empty
export function firstElement<T>(arr: T[]): T | undefined {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this generic function
// Map over an array and transform each element
// The output type U can be different from input type T
export function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement this generic function with constraints
// Filter an array of objects by a specific property value
// K extends keyof T ensures K is a valid property of T
// T[K] is the type of that property
export function filterByProperty<T, K extends keyof T>(
  arr: T[],
  key: K,
  value: T[K]
): T[] {
  // Your code here
  throw new Error('Not implemented');
}
