# Challenge 7: Builder Pattern

## Learning Goals
- Construct complex objects step-by-step
- Provide a fluent interface for object creation
- Use method chaining with proper types
- Handle optional parameters elegantly

## The Challenge

The Builder pattern helps you construct complex objects without messy constructors. You'll build a type-safe query builder:

1. **Create a `QueryBuilder<T>` class**
   - Start with `select()` to choose fields
   - Add `where()` for filtering conditions
   - Add `orderBy()` for sorting
   - Add `limit()` for result count
   - Each method returns `this` for chaining

2. **Implement type-safe field selection**
   - `select()` should only accept valid field names
   - Use `keyof T` to enforce this

3. **Build the final query**
   - `build()` method returns the constructed query object
   - Should include all configured options

## Real-World Use Case

Think of how libraries like Prisma, TypeORM, or SQL query builders work - they use the Builder pattern to construct complex queries in a readable, type-safe way.

## Example Usage

```typescript
const query = new QueryBuilder<User>()
  .select(['id', 'name', 'email'])
  .where({ role: 'admin' })
  .orderBy('name')
  .limit(10)
  .build();
```

## Run Tests
```bash
npm test 03-builder-pattern
```
