# TypeScript Skills Playground

A challenge-based learning environment for building real TypeScript skills. Each challenge includes tests that verify your solutions, helping you learn by doing.

## Philosophy

This playground focuses on **building skills, not just building things**. You'll practice:
- Type system fundamentals (generics, utility types, type guards)
- Real-world patterns (error handling, async patterns, design patterns)
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
└── 02-real-world-patterns/
    ├── 01-error-handling/
    └── 02-async-patterns/
```

## Progression Guide

### Start Here: Type Fundamentals

1. **01-basic-types** - Type narrowing and union types
2. **02-generics-intro** - Creating reusable, type-safe functions
3. **03-utility-types** - Built-in TypeScript utilities
4. **04-type-guards** - Custom type predicates

### Then: Real-World Patterns

5. **01-error-handling** - Result types and functional error handling
6. **02-async-patterns** - Promises, async/await, retries

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
