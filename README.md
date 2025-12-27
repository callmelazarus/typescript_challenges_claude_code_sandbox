# TypeScript Skills Playground

A challenge-based learning environment for building real TypeScript skills. Each challenge includes tests that verify your solutions, helping you learn by doing.

## Philosophy

This playground focuses on **building skills, not just building things**. You'll practice:
- Type system fundamentals (generics, utility types, type guards)
- Real-world patterns (error handling, async patterns, design patterns)
- Advanced type system features (conditional types, mapped types, recursion)
- Test-driven development (write code that passes tests)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Pick a Challenge

Start with the first one: `challenges/01-type-fundamentals/01-basic-types/`

### 3. Read the README

Each challenge has its own README explaining:
- What you'll learn
- The challenge requirements
- Tips and hints

### 4. Implement the Solution

Open `challenge.ts` and implement the functions marked with `TODO`

### 5. Run the Tests

```bash
# Run all tests
npm test

# Run specific challenge
npm test 01-basic-types

# Watch mode (recommended!)
npm test:watch

# Visual UI in browser
npm test:ui
```

### 6. Iterate Until Green

The tests tell you exactly what's broken. Fix it, save, and watch the tests re-run.

## Recommended Workflow

**Use watch mode for the best experience:**

```bash
npm test:watch
```

Then in your editor:
1. Open a challenge file
2. Implement one function
3. Save the file
4. Watch tests run automatically
5. Fix errors until green
6. Move to next function

## Challenge Structure

```
challenges/
├── 01-type-fundamentals/
│   ├── 01-basic-types/
│   │   ├── README.md          # Challenge description
│   │   ├── challenge.ts       # Your code goes here
│   │   └── challenge.test.ts  # Tests (don't modify)
│   ├── 02-generics-intro/
│   ├── 03-utility-types/
│   └── 04-type-guards/
├── 02-real-world-patterns/
│   ├── 01-error-handling/
│   ├── 02-async-patterns/
│   ├── 03-builder-pattern/
│   ├── 05-factory-pattern/
│   ├── 06-strategy-pattern/
│   ├── 07-observer-pattern/
│   ├── 08-decorator-pattern/
│   └── 09-adapter-pattern/
└── 03-advanced-types/
    ├── 01-conditional-types/
    ├── 02-mapped-types/
    ├── 03-template-literals/
    ├── 04-type-inference/
    ├── 05-recursive-types/
    └── 06-building-utilities/
```

## Progression Guide

### Start Here: Type Fundamentals (Challenges 1-4)

1. **01-basic-types** - Type narrowing and union types
2. **02-generics-intro** - Creating reusable, type-safe functions
3. **03-utility-types** - Built-in TypeScript utilities
4. **04-type-guards** - Custom type predicates

### Then: Real-World Patterns (Challenges 5-12)

**Functional Patterns:**
5. **01-error-handling** - Result types and functional error handling
6. **02-async-patterns** - Promises, async/await, retries

**Design Patterns** (based on [Refactoring Guru](https://refactoring.guru/design-patterns)):
7. **03-builder-pattern** - Construct complex objects step-by-step with fluent interfaces
8. **05-factory-pattern** - Create objects without specifying exact classes
9. **06-strategy-pattern** - Define interchangeable algorithms and behaviors
10. **07-observer-pattern** - Implement pub/sub for event-driven systems
11. **08-decorator-pattern** - Add behavior to objects dynamically
12. **09-adapter-pattern** - Make incompatible interfaces work together

### Advanced: Type System Mastery (Challenges 13-18)

**For those ready to level up their TypeScript game:**

13. **01-conditional-types** - Type-level if/else with `T extends U ? X : Y`
14. **02-mapped-types** - Transform object properties programmatically
15. **03-template-literals** - Type-safe string manipulation and generation
16. **04-type-inference** - Extract types with the `infer` keyword
17. **05-recursive-types** - Handle deeply nested structures
18. **06-building-utilities** - Build your own utility types (capstone!)

**Recommended approach:**
- Complete Type Fundamentals first
- Do at least a few Real-World Patterns
- Then tackle Advanced Types when you're ready for a challenge

**Note:** Advanced Types are optional but highly valuable for:
- Library authors
- Framework developers
- Those wanting to master TypeScript
- Anyone curious about how the type system really works

## Learning Tips

### Don't Peek at Tests (Yet)

Try implementing based on:
- Function signatures
- README description
- TypeScript compiler errors

Only look at tests if you're stuck.

### Use TypeScript's Help

Hover over types in your editor to see what TypeScript infers. Use compiler errors as hints - they often tell you exactly what's wrong.

### One Function at a Time

Don't try to implement everything at once. Get one function passing, then move to the next.

### Type Safety is the Goal

Your code should:
- Have no `any` types
- Pass TypeScript's strict mode checks
- Make illegal states unrepresentable

## Useful Commands

```bash
# Run all tests
npm test

# Run specific challenge by name
npm test 01-basic-types
npm test error-handling

# Watch mode - auto-runs tests on save
npm test:watch

# Visual UI - opens in browser
npm test:ui

# Type check without running tests
npm run type-check
```

## What If I Get Stuck?

1. **Read the error messages** - TypeScript errors are verbose but informative
2. **Check the README** - Each challenge has tips and hints
3. **Look at the tests** - They show exactly what your code should do
4. **Try the TypeScript playground** - Experiment at typescriptlang.org/play
5. **Ask for help** - Use Claude Code or search for the concepts online

## Configuration

The playground uses strict TypeScript settings to help you learn best practices:

- `strict: true` - All strict checks enabled
- `noImplicitAny: true` - No implicit any types
- `strictNullChecks: true` - Handle null/undefined explicitly
- `noUnusedLocals: true` - Clean up unused variables
- `noUncheckedIndexedAccess: true` - Arrays can return undefined

This might feel restrictive at first, but it teaches you to write safer code.

## Next Steps

After completing these challenges:

1. **Build something** - Apply what you learned in a real project
2. **Add more challenges** - Create your own in the same structure
3. **Explore advanced topics** - Conditional types, mapped types, template literals
4. **Contribute patterns** - Add new challenges for patterns you use at work

## Why This Approach?

Reading about TypeScript is useful, but you don't really learn until you:
- Write code that doesn't compile and fix it
- See type errors and understand why
- Make the tests pass through iteration

This playground gives you a safe space to make mistakes, learn from them, and build muscle memory for TypeScript patterns.

---

Happy learning! Start with `challenges/01-type-fundamentals/01-basic-types/` and work your way through.
