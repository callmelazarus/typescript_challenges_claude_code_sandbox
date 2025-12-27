// TODO: Implement MyReadonly type
// Make all properties readonly
// Hint: { readonly [K in keyof T]: T[K] }
export type MyReadonly<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement Mutable type
// Remove readonly from all properties
// Hint: { -readonly [K in keyof T]: T[K] }
export type Mutable<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement Optional type
// Make all properties optional (like Partial)
// Hint: { [K in keyof T]?: T[K] }
export type Optional<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement MyRequired type
// Make all properties required (remove ?)
// Hint: { [K in keyof T]-?: T[K] }
export type MyRequired<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement Nullable type
// Add | null to all property types
// Hint: { [K in keyof T]: T[K] | null }
export type Nullable<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement DeepReadonly type
// Make all properties readonly recursively
// Hint: Use conditional types + mapped types
// If T[K] is an object, apply DeepReadonly recursively
export type DeepReadonly<T> = unknown; // Replace 'unknown' with your implementation

// Helper type for MappedValues
// Maps all values of T to type U
export type MappedValues<T, U> = {
  [K in keyof T]: U;
};

// TODO: Implement pick function
// Pick specific properties from an object
// Should be type-safe using Pick<T, K>
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  // Your code here
  throw new Error('Not implemented');
}

// TODO: Implement mapValues function
// Transform all values in an object using a function
// Return type should be MappedValues<T, U>
export function mapValues<T extends Record<string, any>, U>(
  obj: T,
  fn: (value: T[keyof T]) => U
): MappedValues<T, U> {
  // Your code here
  throw new Error('Not implemented');
}

// Advanced: Implement a type that makes specific keys optional
// Example: PartialBy<User, 'email' | 'age'> makes email and age optional
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Advanced: Implement a type that makes specific keys required
// Example: RequiredBy<User, 'email'> makes email required
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
