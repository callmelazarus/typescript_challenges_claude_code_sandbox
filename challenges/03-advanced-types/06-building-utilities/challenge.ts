// ============================================
// Recreate Built-in Utilities
// ============================================

// TODO: Implement MyPick
// Select specific properties from T
// Hint: { [P in K]: T[P] }
export type MyPick<T, K extends keyof T> = unknown; // Replace 'unknown'

// TODO: Implement MyOmit
// Remove specific properties from T
// Hint: Pick<T, Exclude<keyof T, K>>
export type MyOmit<T, K extends keyof T> = unknown; // Replace 'unknown'

// TODO: Implement MyExclude
// Remove types from a union
// Hint: T extends U ? never : T
export type MyExclude<T, U> = unknown; // Replace 'unknown'

// TODO: Implement MyExtract
// Keep only specified types from a union
// Hint: T extends U ? T : never
export type MyExtract<T, U> = unknown; // Replace 'unknown'

// TODO: Implement MyRecord
// Create object type with specific keys and value type
// Hint: { [P in K]: T }
export type MyRecord<K extends string | number | symbol, T> = unknown; // Replace 'unknown'

// TODO: Implement MyReturnType
// Extract return type from function
// Hint: T extends (...args: any[]) => infer R ? R : never
export type MyReturnType<T> = unknown; // Replace 'unknown'

// ============================================
// Custom Utility Types
// ============================================

// TODO: Implement StrictOmit
// Like Omit but K must be keys of T
// The constraint K extends keyof T makes this strict
export type StrictOmit<T, K extends keyof T> = MyOmit<T, K>;

// TODO: Implement Merge
// Merge two types, U properties override T
// Hint: Omit<T, keyof U> & U
export type Merge<T, U> = unknown; // Replace 'unknown'

// TODO: Implement PartialBy
// Make specific keys optional
// Hint: Omit<T, K> & Partial<Pick<T, K>>
export type PartialBy<T, K extends keyof T> = unknown; // Replace 'unknown'

// TODO: Implement RequireAtLeastOne (Advanced!)
// Require at least one property to be present
// Hint: This is tricky! You need to create a union of types where each has one required property
// { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }[keyof T]
export type RequireAtLeastOne<T> = unknown; // Replace 'unknown'

// TODO: Implement Mutable
// Remove readonly from all properties
// Hint: { -readonly [P in keyof T]: T[P] }
export type Mutable<T> = unknown; // Replace 'unknown'

// TODO: Implement PromiseType
// Unwrap Promise type
// Hint: T extends Promise<infer U> ? U : T
export type PromiseType<T> = unknown; // Replace 'unknown'

// ============================================
// Advanced Utilities
// ============================================

// TODO: Implement DeepPartial (from previous challenge)
export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// TODO: Implement Prettify
// Expand type for better IDE display
// Hint: { [K in keyof T]: T[K] } & {}
export type Prettify<T> = unknown; // Replace 'unknown'

// TODO: Implement UnionToIntersection (Very Advanced!)
// Convert union to intersection
// Example: UnionToIntersection<{ a: string } | { b: number }> → { a: string } & { b: number }
// Hint: This uses a contravariance trick with function types
// ((x: T) => any) extends ((x: infer U) => any) ? U : never
export type UnionToIntersection<U> = unknown; // Replace 'unknown'

// ============================================
// Bonus: Key Remapping
// ============================================

// TODO: Implement Getters
// Create getter methods for all properties
// Example: { name: string } → { getName: () => string }
// Hint: [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
export type Getters<T> = unknown; // Replace 'unknown'

// TODO: Implement RemovePrefix
// Remove a prefix from all keys
// Example: RemovePrefix<{ prefixName: string }, 'prefix'> → { Name: string }
// Hint: Use template literals and conditional types in key remapping
export type RemovePrefix<T, Prefix extends string> = unknown; // Replace 'unknown'
