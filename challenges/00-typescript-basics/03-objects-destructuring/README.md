# Challenge 0.3: Objects & Destructuring

## Learning Goals
- Master object destructuring syntax
- Use spread/rest operators with objects
- Understand object methods (Object.keys, values, entries)
- Practice object manipulation techniques

## The Challenge

### Destructuring

1. **`getFullName({ firstName, lastName }: { firstName: string; lastName: string }): string`**
   - Use parameter destructuring
   - Return full name: "firstName lastName"

2. **`getAge(user: { age: number }): number`**
   - Destructure age property
   - Return the age

3. **`getDefaults({ name, age = 18 }: { name: string; age?: number })`**
   - Use default values in destructuring
   - Return object with name and age (defaulting to 18)

### Spread Operator

4. **`mergeObjects(obj1: object, obj2: object): object`**
   - Merge two objects using spread
   - obj2 properties should override obj1

5. **`addProperty(obj: object, key: string, value: any): object`**
   - Add a new property to object (without mutating original)
   - Use spread operator

6. **`updateUser(user: { name: string; age: number }, updates: Partial<{ name: string; age: number }>)`**
   - Merge updates into user object
   - Return new object (don't mutate original)

### Object Methods

7. **`getKeys(obj: object): string[]`**
   - Use Object.keys()

8. **`getValues(obj: object): any[]`**
   - Use Object.values()

9. **`objectToArray(obj: Record<string, any>): [string, any][]`**
   - Use Object.entries()
   - Convert object to array of [key, value] pairs

10. **`countProperties(obj: object): number`**
    - Count number of properties in object

## Key Concepts

```typescript
// Object destructuring
const { name, age } = user;

// With defaults
const { name, age = 18 } = user;

// Renaming
const { name: userName } = user;

// Nested
const { address: { city } } = user;

// Spread operator
const merged = { ...obj1, ...obj2 };

// Rest in destructuring
const { name, ...rest } = user;
```

## Run Tests
```bash
npm test 03-objects-destructuring
```
