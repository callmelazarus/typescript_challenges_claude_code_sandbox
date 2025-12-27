# Real-World Patterns Guide

This section teaches practical patterns you'll use in professional TypeScript development. The patterns are organized by category and include both functional patterns and classic design patterns.

## Pattern Categories

### Functional Patterns
Patterns focused on handling data flow, errors, and asynchronous operations.

### Design Patterns (Gang of Four)
Classic object-oriented patterns adapted for TypeScript with type safety.

---

## Functional Patterns

### 01. Error Handling (Result Type)

**What it does:** Represents operations that can fail without throwing exceptions.

**When to use:**
- Expected errors (validation, parsing, network requests)
- When you want errors in the type system
- Avoiding try/catch blocks

**Real-world examples:**
- Parsing user input
- API requests that might fail
- File operations

**Key insight:** Makes errors explicit and forces you to handle them.

```typescript
// Instead of: throw new Error()
// Use: return Err("error message")
const result = divide(10, 0);
if (!result.success) {
  console.log(result.error); // TypeScript knows this exists
}
```

---

### 02. Async Patterns

**What it does:** Handle asynchronous operations with proper typing and error handling.

**When to use:**
- API calls
- Database queries
- Any I/O operations

**Real-world examples:**
- Fetching data from REST APIs
- Retry logic for unreliable services
- Parallel data loading

**Key insight:** `async/await` + `Promise<Result<T, E>>` combines the best of both worlds.

```typescript
// Type-safe async with error handling
const user = await fetchUserWithError(123);
if (user.success) {
  console.log(user.value.name); // TypeScript knows value exists
}
```

---

## Design Patterns

Design patterns are reusable solutions to common problems. They're not finished code, but templates for solving problems in different situations.

### Creational Patterns
**Purpose:** Control how objects are created.

#### 03. Builder Pattern

**What it does:** Construct complex objects step-by-step with a fluent interface.

**When to use:**
- Objects with many optional parameters
- When constructor has too many arguments
- Building complex configurations

**Real-world examples:**
- Query builders (Prisma, TypeORM, SQL builders)
- HTTP request builders
- Test data builders
- Configuration objects

**vs Alternatives:**
- **vs Constructor:** Better than `new Thing(a, b, c, d, e, f, g)`
- **vs Object literal:** Better when you need validation or complex logic
- **vs Factory:** Builder focuses on step-by-step construction

```typescript
const query = new QueryBuilder<User>()
  .select(['id', 'name'])
  .where({ role: 'admin' })
  .orderBy('name')
  .limit(10)
  .build();
```

---

#### 05. Factory Pattern

**What it does:** Create objects without specifying their exact class.

**When to use:**
- Creating different types of related objects
- Complex object creation logic
- When the exact type depends on runtime conditions

**Real-world examples:**
- Creating different notification types (email, SMS, push)
- Document creation (PDF, Word, Excel)
- UI component factories
- Plugin systems

**vs Alternatives:**
- **vs Constructor:** Factory encapsulates creation logic
- **vs Builder:** Factory creates complete objects in one call
- **vs new keyword:** Decouples code from concrete classes

```typescript
// Type-safe factory with discriminated unions
const notification = createNotification({
  type: 'email',  // TypeScript knows what fields are required
  recipient: 'user@example.com',
  subject: 'Hello',
  body: 'Message'
});
```

---

### Behavioral Patterns
**Purpose:** Handle communication between objects and define algorithms.

#### 06. Strategy Pattern

**What it does:** Define a family of algorithms and make them interchangeable.

**When to use:**
- Multiple ways to do the same thing
- Avoiding if/else or switch statements for algorithms
- Runtime algorithm selection

**Real-world examples:**
- Payment methods (credit card, PayPal, crypto)
- Sorting algorithms (quicksort, mergesort)
- Compression methods (zip, gzip)
- Authentication strategies (OAuth, JWT, API key)

**vs Alternatives:**
- **vs if/else chains:** More maintainable and extensible
- **vs Inheritance:** Composition over inheritance
- **vs Factory:** Strategy swaps behavior, Factory creates objects

```typescript
// Swap payment strategy at runtime
const processor = new PaymentProcessor(new CreditCardStrategy());
processor.processPayment(100);

processor.setStrategy(new PayPalStrategy());  // Change strategy
processor.processPayment(200);
```

---

#### 07. Observer Pattern (Pub/Sub)

**What it does:** Objects subscribe to events and get notified when they occur.

**When to use:**
- Event-driven systems
- When one object's changes should notify many others
- Loose coupling between components

**Real-world examples:**
- UI frameworks (React, Vue, Angular)
- WebSocket message handling
- Stock price updates
- Event buses
- Logging systems

**vs Alternatives:**
- **vs Callbacks:** More scalable for multiple listeners
- **vs Promises:** For ongoing events, not one-time operations
- **vs Direct calls:** Decouples sender from receivers

```typescript
// Stock price changes notify all observers
stock.onPriceChange((change) => {
  console.log(`Price changed: ${change.oldPrice} -> ${change.newPrice}`);
});

stock.setPrice(155);  // All observers notified automatically
```

---

### Structural Patterns
**Purpose:** Compose objects to form larger structures.

#### 08. Decorator Pattern

**What it does:** Add behavior to objects by wrapping them.

**When to use:**
- Adding features without changing the original class
- Combining features dynamically
- When inheritance creates too many subclasses

**Real-world examples:**
- Adding features to UI components (borders, shadows, scrollbars)
- HTTP middleware (logging, auth, compression)
- Stream wrappers (BufferedReader, GZIPInputStream)
- Text formatting (bold, italic, underline)

**vs Alternatives:**
- **vs Inheritance:** More flexible, can combine decorators
- **vs Extending classes:** Can add behavior at runtime
- **vs Composition:** Decorator implements same interface

```typescript
// Compose features by wrapping
const coffee = new WhipDecorator(
  new MilkDecorator(
    new SugarDecorator(
      new SimpleCoffee()
    )
  )
);

console.log(coffee.cost());        // $3.50
console.log(coffee.description()); // "Simple coffee, sugar, milk, whip"
```

---

#### 09. Adapter Pattern

**What it does:** Convert one interface to another to make incompatible interfaces work together.

**When to use:**
- Integrating third-party libraries
- Working with legacy code
- Supporting multiple API versions
- Wrapping external dependencies

**Real-world examples:**
- Payment gateway adapters (Stripe, PayPal, Square)
- Database drivers (PostgreSQL, MySQL, MongoDB)
- API versioning (v1, v2)
- External service integrations

**vs Alternatives:**
- **vs Rewriting code:** Adapter wraps instead of modifying
- **vs Facade:** Adapter matches interface, Facade simplifies
- **vs Proxy:** Adapter changes interface, Proxy keeps same interface

```typescript
// Use different payment services through one interface
const gateway: PaymentGateway = new StripeAdapter(new StripeService());
gateway.processPayment(100);  // Works

const gateway2: PaymentGateway = new PayPalAdapter(new PayPalService());
gateway2.processPayment(100);  // Same interface, different implementation
```

---

## Pattern Relationships

### Patterns that work well together

**Builder + Factory**
- Factory decides which builder to use
- Builder constructs the object

**Strategy + Factory**
- Factory creates the right strategy
- Strategy handles the algorithm

**Observer + Decorator**
- Observers listen to decorated objects
- Decorators can add observable behavior

**Adapter + Factory**
- Factory creates the right adapter
- Adapter wraps incompatible interfaces

### When to combine patterns

Don't use patterns for the sake of patterns. Combine them when:
1. The problem naturally fits multiple patterns
2. It simplifies the code
3. It makes the code more maintainable

---

## Quick Reference: Which Pattern to Use?

### I need to...

**...create objects:**
- Complex object with many options → **Builder**
- Different types of related objects → **Factory**

**...add behavior:**
- Swap algorithms at runtime → **Strategy**
- Add features by wrapping → **Decorator**
- Notify multiple objects of changes → **Observer**

**...make things compatible:**
- Work with incompatible interfaces → **Adapter**

**...handle errors:**
- Expected errors without exceptions → **Result Type**

**...handle async operations:**
- API calls, I/O → **Async Patterns**

---

## Pattern Anti-Patterns

### Don't use patterns when:

1. **Over-engineering simple problems**
   - Don't use Factory for `new User()` when the constructor works fine

2. **Patterns for the sake of patterns**
   - "Let me add a Factory, Builder, and Strategy here" when you just need a function

3. **Wrong pattern for the problem**
   - Using Observer when a simple callback would work
   - Using Builder when object has 2 properties

4. **Premature abstraction**
   - Wait until you have 2-3 similar cases before abstracting with a pattern

### Good rule of thumb:
Start simple. Add patterns when the pain of NOT having them becomes clear.

---

## Learning Path

### Recommended order:

1. **Start with Error Handling & Async**
   - You'll use these daily
   - Foundation for other patterns

2. **Learn Builder & Factory**
   - Easy to understand
   - Immediately useful

3. **Master Strategy & Observer**
   - More complex but powerful
   - Common in real applications

4. **Add Decorator & Adapter**
   - Advanced patterns
   - Useful for integration work

### Practice approach:

1. **Do the challenge** - Implement the pattern
2. **Recognize it in the wild** - Find it in libraries you use
3. **Apply it** - Use it in a real project
4. **Teach it** - Explain it to someone else

---

## Resources

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns) - Excellent visual explanations
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Official TypeScript docs
- Each challenge's README has specific examples and use cases

---

Ready to dive in? Start with **01-error-handling** and work your way through!
