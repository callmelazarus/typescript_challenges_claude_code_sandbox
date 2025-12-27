# TypeScript/JavaScript Basics

Welcome to the fundamentals! This section covers core JavaScript/TypeScript language features that you'll use every day as a developer.

## Who This Is For

- **New to programming?** Start here to learn the basics
- **Know another language?** Quickly learn JS/TS syntax and idioms
- **Want to refresh fundamentals?** Review core concepts with practical exercises

## What You'll Learn

After completing this section, you'll be comfortable with:
- Functions, scope, closures, and hoisting
- Array methods (map, filter, reduce, etc.)
- Object manipulation and destructuring
- Classes and object-oriented programming
- Asynchronous programming (Promises, async/await)

## Challenge Overview

### 0.1: Functions & Scope
**Concepts:** Regular/arrow functions, closures, hoisting, `this`, rest parameters

**You'll learn:**
- Different function syntaxes
- How scope and closures work
- Why `let`/`const` are better than `var`
- Method chaining with `this`

**Real-world use:**
- Creating reusable functions
- Building stateful components
- Understanding library code

---

### 0.2: Arrays & Iteration
**Concepts:** map, filter, reduce, find, some, every

**You'll learn:**
- Transform arrays without mutations
- Filter and search arrays
- Combine array elements
- When to use each array method

**Real-world use:**
- Processing API responses
- Transforming data for UI
- Filtering and searching lists
- Daily data manipulation

---

### 0.3: Objects & Destructuring
**Concepts:** Destructuring, spread/rest, Object methods

**You'll learn:**
- Extract values elegantly
- Merge and clone objects
- Use Object.keys, values, entries
- Avoid mutations

**Real-world use:**
- Working with API data
- Component props in React
- Configuration objects
- State updates

---

### 0.4: Classes & OOP
**Concepts:** Classes, inheritance, access modifiers, static members

**You'll learn:**
- Create classes with methods
- Use inheritance (extends)
- Private vs public properties
- Static methods and properties

**Real-world use:**
- Building reusable components
- Domain modeling
- Understanding framework code
- Organizing complex logic

---

### 0.5: Async Fundamentals
**Concepts:** Promises, async/await, error handling, Promise.all

**You'll learn:**
- Create and consume Promises
- Use async/await syntax
- Handle errors with try/catch
- Run operations in parallel

**Real-world use:**
- API calls
- Database queries
- File operations
- Any I/O work

## Learning Path

### Recommended Order

Work through in sequence (0.1 → 0.5). Each builds on previous concepts.

### Can I Skip This Section?

**Skip if you're comfortable with:**
- ES6+ JavaScript syntax
- Array methods and functional programming
- Promises and async/await
- Classes and OOP basics

**Don't skip if you're:**
- New to JavaScript/TypeScript
- Coming from another language
- Rusty on modern JS features
- Want a solid foundation

## Tips for Success

### Practice, Don't Just Read

The only way to learn programming is by writing code. Try to solve each challenge without looking at the tests first.

### Experiment

Change the code, break it, fix it. Play with the examples in the TypeScript playground.

### Use the Tests

The tests show you exactly what your code should do. If you're stuck, look at the test cases.

### Google Is Your Friend

Don't know what `reduce()` does? Google "javascript array reduce". Learning to find information is a crucial skill.

## Common Gotchas

### Arrow Functions and `this`

```typescript
// Regular function - 'this' is dynamic
const obj = {
  value: 42,
  getValue: function() { return this.value; }
};

// Arrow function - 'this' is lexical (from outer scope)
const obj2 = {
  value: 42,
  getValue: () => this.value // Won't work as expected!
};
```

### Array Mutations

```typescript
// Mutates original array
const nums = [1, 2, 3];
nums.push(4); // nums is now [1, 2, 3, 4]

// Returns new array
const doubled = nums.map(x => x * 2); // nums unchanged
```

### var vs let/const

```typescript
// var is function-scoped and hoisted
if (true) {
  var x = 5;
}
console.log(x); // 5 - leaked out of block!

// let/const are block-scoped
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError
```

## After This Section

Once you've completed the basics, you're ready for:

**Next:** Type Fundamentals (01-type-fundamentals)
- Learn TypeScript's type system
- Make your code type-safe
- Catch bugs before runtime

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

Ready to start? Begin with **01-functions-scope** and work your way through!
