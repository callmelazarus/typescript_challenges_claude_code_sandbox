# Challenge 1: Type Narrowing & Union Types

## Learning Goals
- Understand union types in TypeScript
- Practice type narrowing techniques
- Learn when to use `typeof`, `in`, and other type guards

## The Challenge

You're building a simple data processor that needs to handle different types of input. Implement the following functions:

1. **`processValue(value: string | number): string`**
   - If it's a number, return it doubled as a string (e.g., `10` → `"20"`)
   - If it's a string, return it uppercased (e.g., `"hello"` → `"HELLO"`)

2. **`getArea(shape: Circle | Rectangle): number`**
   - Calculate the area based on the shape type
   - Circle has `{ kind: 'circle'; radius: number }`
   - Rectangle has `{ kind: 'rectangle'; width: number; height: number }`

3. **`formatResult(result: Success | Failure): string`**
   - Success: `{ success: true; data: string }`
   - Failure: `{ success: false; error: string }`
   - Return formatted message based on the result

## Tips
- Use discriminated unions for complex types (the `kind` or `success` property)
- TypeScript will narrow types automatically after you check them
- Pay attention to what properties are available after narrowing

## Run Tests
```bash
npm test 01-basic-types
```
