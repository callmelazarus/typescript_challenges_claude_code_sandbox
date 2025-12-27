// TODO: Implement DeepPartial
// Make all properties optional recursively
// Hint: Check if T[K] is an object, if so apply DeepPartial recursively
export type DeepPartial<T> = unknown; // Replace 'unknown'

// TODO: Implement DeepRequired
// Make all properties required recursively
// Hint: Similar to DeepPartial but use -? and recursively apply to objects
export type DeepRequired<T> = unknown; // Replace 'unknown'

// TODO: Implement DeepReadonly (you did a simple version before)
// Make all properties readonly recursively
// Hint: Add readonly and recursively apply to nested objects
export type DeepReadonly<T> = unknown; // Replace 'unknown'

// TODO: Implement JSONValue
// Type representing any valid JSON value
// Can be: string | number | boolean | null | JSONObject | JSONArray
// JSONObject is { [key: string]: JSONValue }
// JSONArray is JSONValue[]
export type JSONValue = unknown; // Replace 'unknown'

// TODO: Implement Flatten
// Flatten one level of nested arrays
// Example: [[1, 2], [3, 4]] → [1, 2, 3, 4]
// Hint: T extends (infer U)[] ? U : T
export type Flatten<T> = unknown; // Replace 'unknown'

// TODO: Implement DeepFlatten (Advanced!)
// Completely flatten nested arrays
// Example: [[1, [2]], 3] → [1, 2, 3]
// Hint: Use recursion - if element is array, flatten it
export type DeepFlatten<T> = unknown; // Replace 'unknown'

// Advanced: PathsToStringProps
// Generate dot-notation paths to all string properties
// Example: { user: { name: string; age: number } } → "user.name"
// This is very advanced - hints below!
// Hint: Use template literals, recursion, and conditional types
// type PathsToStringProps<T, Prefix extends string = ''> = ...
export type PathsToStringProps<T> = unknown; // Replace 'unknown'

// Helper type to check if something is an object
export type IsObject<T> = T extends object
  ? T extends any[]
    ? false
    : true
  : false;
