# Challenge 15: Template Literal Types

## Learning Goals
- Create types using template literal syntax
- Combine string literal types
- Build type-safe string manipulation
- Master intrinsic string manipulation types

## The Challenge

Template literal types let you manipulate string types, enabling powerful type-safe APIs for things like CSS properties, event names, and more.

### Type Challenges

1. **`Greeting<Name>`**
   - Create a greeting type: "Hello, {Name}!"
   - Example: `Greeting<"Alice">` → `"Hello, Alice!"`

2. **`HTTPMethod`**
   - Create a union of HTTP methods with prefixes
   - Combine "GET" | "POST" | "PUT" | "DELETE" with "/api"
   - Result: "GET /api" | "POST /api" | ...

3. **`EventName<T>`**
   - Convert a type name to event format
   - Example: `EventName<"user">` → `"onUser" | "onUserChange"`

4. **`CSSProperty<Property, Value>`**
   - Create CSS property strings
   - Example: `CSSProperty<"color", "red">` → `"color: red"`

5. **`SnakeToCamel<S>`**
   - Convert snake_case to camelCase
   - Example: `SnakeToCamel<"hello_world">` → `"helloWorld"`
   - Advanced challenge!

6. **`Uppercase<S>`, `Lowercase<S>`, `Capitalize<S>`, `Uncapitalize<S>`**
   - Use built-in intrinsic string manipulation types
   - Examples provided for reference

### Function Challenges

7. **`createEventHandler<Event>(name: Event): `on${Capitalize<Event>}``**
   - Create type-safe event handler names
   - Example: `createEventHandler("click")` → `"onClick"`

## Syntax Reference

```typescript
// Basic template literal type
type World = "world";
type Greeting = `hello ${World}`; // "hello world"

// With unions
type Color = "red" | "blue";
type Size = "small" | "large";
type Variant = `${Size}-${Color}`; // "small-red" | "small-blue" | "large-red" | "large-blue"

// Intrinsic string manipulation
type Upper = Uppercase<"hello">; // "HELLO"
type Lower = Lowercase<"HELLO">; // "hello"
type Cap = Capitalize<"hello">; // "Hello"
type Uncap = Uncapitalize<"Hello">; // "hello"
```

## Real-World Use Cases

- React event handlers: `onClick`, `onChange`, etc.
- CSS-in-JS: Type-safe CSS properties
- API routes: `/api/users`, `/api/posts`
- Database columns: Type-safe column names
- Tailwind CSS: Class name generation

## Run Tests
```bash
npm test 03-template-literals
```
