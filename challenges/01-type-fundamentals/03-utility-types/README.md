# Challenge 3: Built-in Utility Types

## Learning Goals
- Master TypeScript's built-in utility types
- Understand how to transform types
- Learn when to use `Partial`, `Pick`, `Omit`, `Required`, `Record`, etc.

## The Challenge

TypeScript provides powerful utility types for transforming existing types. Use them to solve these challenges:

1. **`updateUser(user: User, updates: Partial<User>): User`**
   - Take a user and partial updates, return the updated user
   - Not all fields need to be provided in updates

2. **`getUserSummary(user: User): UserSummary`**
   - UserSummary should only have `id` and `name` from User
   - Use `Pick<User, 'id' | 'name'>` for the return type

3. **`createConfig(overrides: Partial<Config>): Required<Config>`**
   - Merge default config with overrides
   - Return a config with all required fields

4. **`createStatusMap(statuses: string[]): Record<string, boolean>`**
   - Create an object where each status is a key with boolean value
   - Use `Record<string, boolean>` for the return type

## Common Utility Types
- `Partial<T>` - Makes all properties optional
- `Required<T>` - Makes all properties required
- `Pick<T, K>` - Select specific properties
- `Omit<T, K>` - Remove specific properties
- `Record<K, V>` - Create an object type with specific keys and values

## Run Tests
```bash
npm test 03-utility-types
```
