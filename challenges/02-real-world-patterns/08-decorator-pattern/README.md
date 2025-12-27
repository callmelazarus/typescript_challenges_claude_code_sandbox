# Challenge 11: Decorator Pattern

## Learning Goals
- Add behavior to objects dynamically
- Wrap objects to extend functionality
- Use composition to add features
- Understand decorator vs inheritance

## The Challenge

The Decorator pattern lets you add new behaviors to objects by wrapping them. You'll build a coffee shop ordering system:

1. **Create base `Coffee` interface**
   - `cost()` - returns price
   - `description()` - returns description

2. **Implement base coffee types**
   - `SimpleCoffee` - costs $2, description "Simple coffee"

3. **Create decorator classes**
   - `MilkDecorator` - adds $0.50, adds "milk" to description
   - `SugarDecorator` - adds $0.25, adds "sugar" to description
   - `WhipDecorator` - adds $0.75, adds "whip" to description

4. **Each decorator wraps a Coffee**
   - Decorators implement the same `Coffee` interface
   - They add their cost to the wrapped coffee's cost
   - They add their description to the wrapped coffee's description

## Real-World Use Cases

- Adding features to UI components (borders, scrollbars, shadows)
- Middleware in web frameworks (logging, auth, compression)
- Stream wrappers (BufferedReader, GZIPInputStream)
- Text formatting (bold, italic, underline)

## Why Decorator Pattern?

Instead of creating subclasses for every combination:
- SimpleCoffee, CoffeeWithMilk, CoffeeWithSugar, CoffeeWithMilkAndSugar...

You can compose decorators:
- `new MilkDecorator(new SugarDecorator(new SimpleCoffee()))`

## Run Tests
```bash
npm test 08-decorator-pattern
```
