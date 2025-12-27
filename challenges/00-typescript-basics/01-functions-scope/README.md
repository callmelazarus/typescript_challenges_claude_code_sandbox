# Challenge 0.1: Functions & Scope

## Learning Goals
- Understand different function syntaxes (regular, arrow, expression)
- Master scope, closures, and hoisting
- Use default parameters and rest parameters
- Understand `this` binding in different contexts

## The Challenge

Practice fundamental JavaScript/TypeScript function concepts through hands-on exercises.

### Function Basics

1. **`greet(name: string): string`**
   - Return a greeting message
   - Example: `greet("Alice")` → `"Hello, Alice!"`

2. **`add(a: number, b: number): number`**
   - Add two numbers using an arrow function
   - Should be exported as an arrow function

3. **`multiply(a: number, b: number = 1): number`**
   - Multiply two numbers with default parameter
   - If b is not provided, use 1 as default

### Scope & Closures

4. **`createCounter(): { increment: () => number; decrement: () => number; getValue: () => number }`**
   - Return an object with methods that share private state
   - Uses closures to maintain count
   - Example:
     ```typescript
     const counter = createCounter();
     counter.increment(); // 1
     counter.increment(); // 2
     counter.decrement(); // 1
     counter.getValue();  // 1
     ```

5. **`createMultiplier(factor: number): (n: number) => number`**
   - Return a function that multiplies by the given factor
   - Demonstrates closure over the factor variable

### Variable Hoisting & Scope

6. **`demonstrateHoisting(): string`**
   - Shows understanding of var vs let/const hoisting
   - Should demonstrate why let/const are preferred

### Rest Parameters

7. **`sum(...numbers: number[]): number`**
   - Sum any number of arguments using rest parameters
   - Example: `sum(1, 2, 3, 4)` → `10`

8. **`joinStrings(separator: string, ...strings: string[]): string`**
   - Join strings with a separator
   - Example: `joinStrings("-", "a", "b", "c")` → `"a-b-c"`

### The `this` Keyword

9. **Create a `Calculator` object**
   - Has `value` property
   - Methods: `add(n)`, `subtract(n)`, `multiply(n)`, `divide(n)`
   - All methods should return `this` for chaining
   - Methods should correctly use `this` to access value

## Key Concepts

### Function Types
```typescript
// Regular function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// Function expression
const add = function(a: number, b: number): number {
  return a + b;
};
```

### Hoisting
```typescript
// var is hoisted (but not initialized)
console.log(x); // undefined
var x = 5;

// let/const are hoisted but in "temporal dead zone"
console.log(y); // ReferenceError
let y = 5;
```

### Closures
```typescript
function outer() {
  const secret = 42;
  return function inner() {
    return secret; // inner "closes over" secret
  };
}
```

## Run Tests
```bash
npm test 01-functions-scope
```
