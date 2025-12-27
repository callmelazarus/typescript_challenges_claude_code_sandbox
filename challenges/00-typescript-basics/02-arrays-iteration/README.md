# Challenge 0.2: Arrays & Iteration

## Learning Goals
- Master array methods (map, filter, reduce, find, etc.)
- Understand when to use each array method
- Practice functional programming with arrays
- Learn array manipulation techniques

## The Challenge

Practice essential array operations that you'll use every day as a developer.

### Array Methods

1. **`doubleNumbers(numbers: number[]): number[]`**
   - Use `map()` to double each number
   - Example: `[1, 2, 3]` → `[2, 4, 6]`

2. **`getEvenNumbers(numbers: number[]): number[]`**
   - Use `filter()` to get only even numbers
   - Example: `[1, 2, 3, 4, 5]` → `[2, 4]`

3. **`sumArray(numbers: number[]): number`**
   - Use `reduce()` to sum all numbers
   - Example: `[1, 2, 3, 4]` → `10`

4. **`findFirstNegative(numbers: number[]): number | undefined`**
   - Use `find()` to get the first negative number
   - Return `undefined` if none found

5. **`hasNegativeNumbers(numbers: number[]): boolean`**
   - Use `some()` to check if array has any negative numbers

6. **`areAllPositive(numbers: number[]): boolean`**
   - Use `every()` to check if all numbers are positive

### Practical Array Operations

7. **`getNames(users: { name: string; age: number }[]): string[]`**
   - Extract just the names from user objects
   - Use `map()`

8. **`getAdults(users: { name: string; age: number }[]): { name: string; age: number }[]`**
   - Filter users who are 18 or older

9. **`averageAge(users: { name: string; age: number }[]): number`**
   - Calculate average age using `reduce()`
   - Return 0 if array is empty

10. **`groupByAge(users: { name: string; age: number }[]): Record<number, string[]>`**
    - Group user names by age
    - Example: `{ 25: ['Alice', 'Bob'], 30: ['Charlie'] }`
    - Use `reduce()`

### Array Transformation

11. **`flatten<T>(arrays: T[][]): T[]`**
    - Flatten a 2D array to 1D
    - Example: `[[1, 2], [3, 4]]` → `[1, 2, 3, 4]`
    - Use `reduce()` or `flat()`

12. **`removeDuplicates<T>(array: T[]): T[]`**
    - Remove duplicate values
    - Use `Set` or `filter()` with `indexOf()`

13. **`chunk<T>(array: T[], size: number): T[][]`**
    - Split array into chunks of given size
    - Example: `chunk([1, 2, 3, 4, 5], 2)` → `[[1, 2], [3, 4], [5]]`

## Key Concepts

### Common Array Methods

```typescript
// map - transform each element
[1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter - keep elements that match condition
[1, 2, 3, 4].filter(x => x > 2); // [3, 4]

// reduce - combine elements into single value
[1, 2, 3, 4].reduce((sum, x) => sum + x, 0); // 10

// find - get first matching element
[1, 2, 3, 4].find(x => x > 2); // 3

// some - check if any element matches
[1, 2, 3].some(x => x > 2); // true

// every - check if all elements match
[1, 2, 3].every(x => x > 0); // true
```

### When to Use Each

- **map** - Transform array to new array (same length)
- **filter** - Get subset of array
- **reduce** - Combine array into single value (or object)
- **find** - Get first matching element
- **some** - Check if condition is true for any element
- **every** - Check if condition is true for all elements
- **forEach** - Side effects only (use map/filter/reduce when possible)

## Run Tests
```bash
npm test 02-arrays-iteration
```
