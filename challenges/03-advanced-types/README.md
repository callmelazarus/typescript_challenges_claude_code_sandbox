# Advanced Type System Guide

Welcome to the advanced TypeScript type system! This section teaches you the powerful features that make TypeScript's type system Turing-complete.

## What You'll Learn

After completing this section, you'll be able to:
- ✅ Create types that transform other types
- ✅ Extract and manipulate types programmatically
- ✅ Build your own utility types from scratch
- ✅ Read and understand complex library type definitions
- ✅ Design type-safe APIs

## Prerequisites

**Required:** Complete **01-type-fundamentals** before starting this section.

**Recommended:** Complete at least a few challenges from **02-real-world-patterns**.

You should be comfortable with:
- Union types, generics, and utility types
- Type guards and type narrowing
- Basic TypeScript patterns

**Complete learning path:**
1. `00-typescript-basics/` - Language fundamentals (if new to JS/TS)
2. `01-type-fundamentals/` - Type system basics (required)
3. `02-real-world-patterns/` - Apply types in practice (recommended)
4. `03-advanced-types/` - You are here!

## Challenge Overview

### 13. Conditional Types
**Concepts:** `T extends U ? X : Y`, type-level if/else

**You'll learn:**
- How to create types that change based on conditions
- Type narrowing at the type level
- Building flexible, adaptive types

**Real-world use:**
- React component props that change based on mode
- API response types based on success/failure
- Function return types that depend on parameters

---

### 14. Mapped Types
**Concepts:** `[K in keyof T]`, property transformation, modifiers

**You'll learn:**
- Transform all properties of a type
- Add/remove `readonly` and `?` modifiers
- Create variations of existing types

**Real-world use:**
- Form state types (Partial for updates)
- API responses (Nullable for loading states)
- Configuration objects (Readonly for immutability)

---

### 15. Template Literal Types
**Concepts:** String manipulation at the type level

**You'll learn:**
- Combine string literal types
- Use `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`
- Generate type-safe string patterns

**Real-world use:**
- CSS-in-JS property names
- Event handler names (`onClick`, `onChange`)
- API routes and endpoints
- Database column names

---

### 16. Type Inference with `infer`
**Concepts:** Extract types from other types

**You'll learn:**
- Use `infer` to name and extract types
- Pull out return types, parameter types, etc.
- Build advanced type utilities

**Real-world use:**
- Extracting types from functions
- Unwrapping Promises
- Getting array element types
- Framework type helpers

---

### 17. Recursive Types
**Concepts:** Types that reference themselves

**You'll learn:**
- Create deeply nested type transformations
- Handle tree structures and JSON
- Understand recursion limits

**Real-world use:**
- JSON typing for APIs
- Deep cloning and freezing
- File system trees
- Nested form state
- AST (Abstract Syntax Tree) types

---

### 18. Building Utility Types
**Concepts:** Combine all techniques

**You'll learn:**
- Recreate TypeScript's built-in utilities
- Build custom utilities for your needs
- Understand how libraries work under the hood

**Real-world use:**
- Creating reusable type utilities
- Building type-safe APIs
- Library and framework development

## Learning Path

### Recommended Order

1. **Start with Conditional Types**
   - Foundation for everything else
   - Relatively easy to understand
   - Immediate practical value

2. **Move to Mapped Types**
   - Natural progression from conditionals
   - Very common in real code
   - Builds on concepts you know

3. **Learn Template Literals**
   - Fun and visual
   - Unique TypeScript feature
   - Great for type-safe strings

4. **Master Type Inference**
   - More abstract but powerful
   - Unlocks advanced patterns
   - Essential for utility types

5. **Tackle Recursive Types**
   - Most challenging concept
   - Builds on all previous knowledge
   - Handle complex nested structures

6. **Complete Building Utilities**
   - Capstone challenge
   - Combines everything
   - Proves you've mastered the material

### Alternative: Pick Your Own Path

Choose based on what you need:

**Need type-safe strings?** → Template Literals
**Working with APIs?** → Conditional Types + Recursive Types
**Building a library?** → All of them, in order
**Just curious?** → Start anywhere that looks interesting!

## Difficulty Levels

🟢 **Easier**
- Conditional Types (basic concepts)
- Mapped Types (transformations)
- Template Literals (fun and visual)

🟡 **Moderate**
- Conditional Types (advanced patterns)
- Type Inference (requires abstract thinking)

🔴 **Challenging**
- Recursive Types (complex mental model)
- Building Utilities (combines everything)

Don't be discouraged by the 🔴 challenges - they're hard but very rewarding!

## Tips for Success

### 1. Use the TypeScript Playground
- Test ideas quickly: [typescriptlang.org/play](https://www.typescriptlang.org/play)
- See how types resolve in real-time
- Experiment without running tests

### 2. Read Error Messages Carefully
TypeScript errors are verbose but helpful:
```
Type 'string' is not assignable to type 'number'
```
This tells you exactly what's wrong and where.

### 3. Use Type Hovering
Hover over types in your editor to see what TypeScript infers. This is invaluable for understanding complex types.

### 4. Start Simple, Then Build Up
Don't try to write the perfect solution immediately:
1. Get something that type-checks
2. Make it handle one case correctly
3. Add complexity gradually
4. Refactor when you understand it better

### 5. Study the Built-in Utilities
TypeScript's source code is on GitHub. Look at how `Pick`, `Omit`, `Partial`, etc. are implemented. It's incredibly educational!

### 6. Type-Level vs Runtime
Remember: These types exist only at compile time. They don't affect runtime behavior or bundle size.

## Common Patterns

### Distributive Conditional Types
```typescript
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>; // string[] | number[]
// Distributes across the union!
```

### Using `never` to Filter
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
// 'never' removes types from unions
```

### Recursive Pattern
```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>  // Recurse
    : T[K];
};
```

### Key Remapping
```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```

## When to Use These Techniques

### Use Advanced Types When:
- ✅ You need type safety for complex patterns
- ✅ You're building a library for others
- ✅ You want to prevent entire classes of bugs
- ✅ The type complexity pays for itself

### Don't Use Advanced Types When:
- ❌ A simple type would work fine
- ❌ You're making code harder to understand
- ❌ You're over-engineering
- ❌ Runtime logic would be clearer

**Remember:** Simple is better than complex. Use advanced types when they genuinely help, not to show off.

## Real-World Applications

### React Component Props
```typescript
type ButtonProps<T extends 'button' | 'link'> = {
  variant: T;
} & (T extends 'button'
  ? { onClick: () => void }
  : { href: string }
);
```

### API Response Typing
```typescript
type APIResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };
```

### Form State Management
```typescript
type FormState<T> = {
  values: DeepPartial<T>;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
};
```

### Database Query Builders
```typescript
type Query<T> = {
  select<K extends keyof T>(fields: K[]): Query<Pick<T, K>>;
  where(conditions: Partial<T>): Query<T>;
  // ... etc
};
```

## Beyond This Course

After mastering these challenges:

1. **Read library source code**
   - React type definitions
   - Zod schema typing
   - tRPC type safety
   - Prisma query types

2. **Explore more advanced topics**
   - Variance (covariance, contravariance)
   - Higher-kinded types (TypeScript limitations)
   - Type-level computation
   - Branded types for nominal typing

3. **Contribute to DefinitelyTyped**
   - Help type JavaScript libraries
   - Learn from code reviews
   - Give back to the community

4. **Build your own utilities**
   - Create a types library for your team
   - Solve real problems you encounter
   - Share what you learn

## Resources

- [TypeScript Handbook - Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Type Challenges](https://github.com/type-challenges/type-challenges) - More practice!
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Matt Pocock's Type Tips](https://www.totaltypescript.com/tips)

## Ready to Begin?

Start with **01-conditional-types** and work your way through. Remember:
- It's okay to find these challenging
- Take breaks when needed
- Ask for help (use Claude Code!)
- Celebrate small victories

You've got this! 🚀
