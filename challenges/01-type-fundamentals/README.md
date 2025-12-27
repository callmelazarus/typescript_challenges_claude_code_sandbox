# Type Fundamentals

Welcome to TypeScript's type system! This section teaches you the core type features you'll use every day.

## Prerequisites

**Recommended:** Complete **00-typescript-basics** first if you're new to JavaScript/TypeScript.

You should be comfortable with:
- Functions and arrow functions
- Array methods (map, filter, reduce)
- Objects and destructuring
- Async/await basics

**New to JS?** Go back to `00-typescript-basics/` first.

## What You'll Learn

After completing this section, you'll be able to:
- ✅ Use union types and type narrowing
- ✅ Create generic, reusable functions
- ✅ Use TypeScript's built-in utility types
- ✅ Build custom type guards
- ✅ Write type-safe code that prevents bugs

## Challenge Overview

### 1. Basic Types & Type Narrowing
**Concepts:** Union types, discriminated unions, type narrowing

**You'll learn:**
- Combine types with `|` (union types)
- Narrow types with `typeof`, `in`, and discriminated unions
- Handle multiple possible types safely

**Real-world use:**
- Function parameters that accept multiple types
- API responses with success/error states
- Form validation with different result types

---

### 2. Generics Introduction
**Concepts:** Generic functions, type parameters, constraints

**You'll learn:**
- Create functions that work with any type
- Use `<T>` type parameters
- Constrain generics with `extends`
- Maintain type safety while being flexible

**Real-world use:**
- Array operations that preserve types
- Utility functions
- Type-safe data structures
- Framework and library code

---

### 3. Utility Types
**Concepts:** Built-in TypeScript utilities

**You'll learn:**
- Use `Partial<T>`, `Required<T>`, `Readonly<T>`
- Use `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`
- Transform types without writing custom code

**Real-world use:**
- Form state (Partial for updates)
- API responses (Readonly for immutability)
- Configuration objects
- Type transformations

---

### 4. Type Guards
**Concepts:** Custom type predicates, `is` keyword

**You'll learn:**
- Create type guard functions
- Use `value is Type` syntax
- Safely handle unknown types
- Use `never` for exhaustive checking

**Real-world use:**
- Validating API responses
- Runtime type checking
- Discriminating between types
- Ensuring exhaustive switch statements

## Learning Path

### Recommended Order

1. **Start with Basic Types** - Foundation for everything else
2. **Move to Generics** - Learn to write flexible, reusable code
3. **Practice Utility Types** - Use TypeScript's built-in helpers
4. **Master Type Guards** - Handle runtime types safely

Work through in sequence. Each builds on previous concepts.

### Time Investment

- Each challenge: 30-60 minutes
- Total section: 2-4 hours

Take your time! Understanding these fundamentals pays off exponentially.

## Key Concepts

### Union Types
```typescript
function process(value: string | number) {
  // value can be string OR number
}
```

### Type Narrowing
```typescript
function process(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  // TypeScript knows value is number here
  return value * 2;
}
```

### Generics
```typescript
function identity<T>(value: T): T {
  return value; // Preserves the type
}

const num = identity(42);    // number
const str = identity("hi");  // string
```

### Type Guards
```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Usage
if (isString(someValue)) {
  // TypeScript knows someValue is string
  console.log(someValue.toUpperCase());
}
```

## Common Patterns

### Discriminated Unions
```typescript
type Result =
  | { success: true; data: string }
  | { success: false; error: string };

function handle(result: Result) {
  if (result.success) {
    // TypeScript knows result.data exists
    return result.data;
  }
  // TypeScript knows result.error exists
  return result.error;
}
```

### Generic Constraints
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Type-safe property access
}
```

## Tips for Success

### 1. Let TypeScript Guide You
Hover over types in your editor. TypeScript shows you what it infers. This is invaluable feedback.

### 2. Start Simple
Don't try to write the perfect generic solution first. Get it working with concrete types, then generalize.

### 3. Read Error Messages
TypeScript errors are verbose but helpful. They tell you exactly what's wrong.

### 4. Use the Tests
The tests show you what types are expected. If you're stuck, check what the tests require.

## Common Mistakes

### Over-using `any`
```typescript
// Bad - loses all type safety
function process(value: any) { ... }

// Good - be specific
function process(value: string | number) { ... }
```

### Forgetting Type Guards
```typescript
// Bad - TypeScript doesn't know which type
function process(value: string | number) {
  return value.toUpperCase(); // Error!
}

// Good - narrow the type first
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
}
```

### Not Using Built-in Utilities
```typescript
// Bad - manually making properties optional
type PartialUser = {
  name?: string;
  age?: number;
};

// Good - use Partial
type PartialUser = Partial<User>;
```

## After This Section

Once you've completed type fundamentals, you're ready for:

**Next:** Real-World Patterns (02-real-world-patterns)
- Apply types to practical patterns
- Learn error handling with Result types
- Master design patterns with TypeScript

**Or:** Advanced Types (03-advanced-types)
- If you want to dive deep into the type system
- Conditional types, mapped types, recursion
- Build your own utility types

## Resources

- [TypeScript Handbook - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

---

Ready to begin? Start with **01-basic-types** and work your way through!
