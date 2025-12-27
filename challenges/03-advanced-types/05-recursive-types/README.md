# Challenge 17: Recursive Types

## Learning Goals
- Create types that reference themselves
- Build deeply nested type transformations
- Understand TypeScript's recursion limits
- Apply recursion to real-world problems

## The Challenge

Recursive types call themselves, enabling operations on deeply nested structures like JSON, trees, and nested objects.

### Type Challenges

1. **`DeepPartial<T>`**
   - Make all properties optional recursively
   - Nested objects should also become partial
   - Example: `DeepPartial<{ user: { name: string } }>` → `{ user?: { name?: string } }`

2. **`DeepRequired<T>`**
   - Make all properties required recursively
   - Remove `?` from all nested properties

3. **`DeepReadonly<T>`**
   - Make all properties readonly recursively
   - You implemented a simple version earlier - now make it truly recursive!

4. **`JSONValue`**
   - Type representing any valid JSON value
   - Can be: string, number, boolean, null, JSONObject, or JSONArray
   - JSONObject and JSONArray are recursive!

5. **`Flatten<T>`**
   - Flatten a nested array one level
   - Example: `Flatten<[[1, 2], [3, 4]]>` → `[1, 2, 3, 4]`

6. **`DeepFlatten<T>`**
   - Completely flatten nested arrays
   - Example: `DeepFlatten<[[1, [2]], 3]>` → `[1, 2, 3]`

7. **`PathsToStringProps<T>`**
   - Generate union of dot-notation paths to all string properties
   - Example: `PathsToStringProps<{ user: { name: string; age: number } }>` → `"user.name"`
   - Advanced!

## Syntax Reference

```typescript
// Basic recursion
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
  //                                      ^^^^^^^^^^^^^^^^^ recursive call
};

// Recursive with conditions
type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONValue }  // recursive
  | JSONValue[];                  // recursive
```

## Important Notes

**TypeScript has recursion limits!**
- Too deep recursion may hit "Type instantiation is excessively deep"
- Usually happens around 40-50 levels deep
- Design types to avoid unnecessary depth

## Real-World Use Cases

- JSON typing (APIs, configs)
- Deep cloning types
- Form state (deeply nested optional fields)
- Database queries (nested relations)
- File system trees
- AST (Abstract Syntax Tree) types

## Run Tests
```bash
npm test 05-recursive-types
```
