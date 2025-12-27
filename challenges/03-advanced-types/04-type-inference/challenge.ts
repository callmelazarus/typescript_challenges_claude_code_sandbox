// TODO: Implement GetReturnType
// Extract the return type from a function
// Hint: T extends (...args: any[]) => infer R ? R : never
export type GetReturnType<T> = unknown; // Replace 'unknown'

// TODO: Implement GetParameters
// Extract all parameter types as a tuple
// Hint: T extends (...args: infer P) => any ? P : never
export type GetParameters<T> = unknown; // Replace 'unknown'

// TODO: Implement GetFirstParameter
// Extract just the first parameter type
// Hint: Use GetParameters and then extract first element from tuple
export type GetFirstParameter<T> = unknown; // Replace 'unknown'

// TODO: Implement UnwrapPromise
// Extract the type from inside a Promise
// Hint: T extends Promise<infer U> ? U : T
export type UnwrapPromise<T> = unknown; // Replace 'unknown'

// TODO: Implement UnwrapArray
// Extract the element type from an array
// Hint: T extends (infer U)[] ? U : never
export type UnwrapArray<T> = unknown; // Replace 'unknown'

// TODO: Implement GetConstructorParameters
// Extract parameter types from a class constructor
// Hint: T extends new (...args: infer P) => any ? P : never
export type GetConstructorParameters<T> = unknown; // Replace 'unknown'

// TODO: Implement DeepAwaited (Advanced!)
// Recursively unwrap nested Promises
// Example: Promise<Promise<string>> → string
// Hint: Use recursion with UnwrapPromise
export type DeepAwaited<T> = unknown; // Replace 'unknown'

// TODO: Implement GetObjectValues
// Extract all value types from an object as a union
// Example: GetObjectValues<{ a: string; b: number }> → string | number
// Hint: T[keyof T]
export type GetObjectValues<T> = unknown; // Replace 'unknown'

// Advanced: Extract the instance type from a class constructor
// Example: GetInstanceType<typeof MyClass> → MyClass
export type GetInstanceType<T> = T extends new (...args: any[]) => infer I ? I : never;

// Advanced: Extract property type by key
// Example: GetProperty<{ name: string; age: number }, 'name'> → string
export type GetProperty<T, K extends keyof T> = T[K];
