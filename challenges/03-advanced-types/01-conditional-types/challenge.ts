// TODO: Implement IsString type
// Should return true if T is a string, false otherwise
// Hint: Use T extends string ? true : false
export type IsString<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement IsArray type
// Should return true if T is an array, false otherwise
// Hint: Arrays can be checked with T extends any[] or T extends Array<any>
export type IsArray<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement ArrayElementType
// Extract the element type from an array, or return never if not an array
// Hint: Use T extends (infer U)[] ? U : never
export type ArrayElementType<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement your own NonNullable type
// Remove null and undefined from a type
// Hint: T extends null | undefined ? never : T
export type MyNonNullable<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement ExtractNumbers type
// Extract only number types from a union
// Hint: Use T extends number ? T : never
export type ExtractNumbers<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement WrapInArray type
// If T is already an array, return T
// Otherwise, return T wrapped in an array (T[])
export type WrapInArray<T> = unknown; // Replace 'unknown' with your implementation

// TODO: Implement wrapInArray function
// Use the WrapInArray type for the return type
// If the value is already an array, return it as-is
// Otherwise, wrap it in an array
export function wrapInArray<T>(value: T): WrapInArray<T> {
  // Your code here
  throw new Error('Not implemented');
}

// Advanced: Implement a type that extracts the return type of a function
// If T is a function, extract its return type
// Otherwise, return never
export type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

// Advanced: Implement a type that gets the Promise value type
// If T is Promise<U>, return U
// Otherwise, return T
export type Awaited<T> = T extends Promise<infer U> ? U : T;
