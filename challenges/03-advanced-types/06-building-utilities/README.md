# Challenge 18: Building Utility Types

## Learning Goals
- Combine all advanced type techniques
- Recreate TypeScript's built-in utilities
- Build your own custom utility types
- Understand how popular libraries work under the hood

## The Challenge

This is the capstone challenge! You'll build utility types from scratch, combining conditional types, mapped types, template literals, `infer`, and recursion.

### Recreate Built-in Utilities

1. **`MyPick<T, K>`**
   - Select specific properties from T
   - Hint: Use mapped types with K constraint

2. **`MyOmit<T, K>`**
   - Remove specific properties from T
   - Hint: Combine Pick with Exclude

3. **`MyExclude<T, U>`**
   - Remove types from a union
   - Hint: Use conditional types with distributive behavior

4. **`MyExtract<T, U>`**
   - Keep only specified types from a union
   - Opposite of Exclude

5. **`MyRecord<K, T>`**
   - Create object type with specific keys and value type
   - Hint: `{ [P in K]: T }`

6. **`MyReturnType<T>`**
   - Extract return type from function
   - Hint: Use infer

### Custom Utility Types

7. **`StrictOmit<T, K>`**
   - Like Omit but K must be keys of T (type error otherwise)
   - More type-safe than regular Omit

8. **`Merge<T, U>`**
   - Merge two types, U overrides T
   - Example: `Merge<{ a: string; b: number }, { b: string }>` → `{ a: string; b: string }`

9. **`PartialBy<T, K>`**
   - Make specific keys optional
   - Example: `PartialBy<User, 'email'>` makes email optional

10. **`RequireAtLeastOne<T>`**
    - Require at least one property to be present
    - Advanced!

11. **`Mutable<T>`**
    - Remove readonly from all properties
    - Opposite of Readonly

12. **`PromiseType<T>`**
    - If T is Promise<U>, return U, else return T
    - Unwrap promises

### Real-World Utilities

13. **`DeepPartial<T>`** (from previous challenge)
14. **`Prettify<T>`** - Expand type for better IDE display
15. **`UnionToIntersection<U>`** - Convert union to intersection (very advanced!)

## Techniques You'll Use

- ✅ Conditional types
- ✅ Mapped types
- ✅ Template literals
- ✅ Type inference with `infer`
- ✅ Recursive types
- ✅ Distributive conditional types
- ✅ Key remapping

## Tips

**Distributive Conditional Types:**
```typescript
type Exclude<T, U> = T extends U ? never : T;
// When T is a union, this distributes across each member
```

**Key Remapping:**
```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```

## Run Tests
```bash
npm test 06-building-utilities
```
