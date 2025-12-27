# Challenge 9: Strategy Pattern

## Learning Goals
- Define a family of algorithms/behaviors
- Make them interchangeable at runtime
- Encapsulate each algorithm in its own class
- Use composition over inheritance

## The Challenge

The Strategy pattern lets you swap algorithms at runtime. You'll build a payment processing system with different payment strategies:

1. **Create payment strategy interface**
   - `PaymentStrategy` with a `pay(amount: number)` method

2. **Implement concrete strategies**
   - `CreditCardStrategy` - requires cardNumber, cvv
   - `PayPalStrategy` - requires email
   - `CryptoStrategy` - requires walletAddress

3. **Create `PaymentProcessor` class**
   - Accepts a strategy in constructor
   - `processPayment(amount)` delegates to the strategy
   - `setStrategy()` allows changing strategy at runtime

4. **Add strategy validation**
   - Each strategy validates its inputs
   - Returns a Result type (success or error)

## Real-World Use Cases

- Payment processing (as shown here)
- Sorting algorithms (quicksort, mergesort, etc.)
- Compression algorithms (zip, gzip, bz2)
- Authentication methods (OAuth, JWT, API key)
- Routing algorithms in navigation apps

## Why Strategy Pattern?

Instead of if/else chains or switch statements, you can:
- Add new strategies without changing existing code
- Test strategies independently
- Swap strategies at runtime based on conditions

## Run Tests
```bash
npm test 06-strategy-pattern
```
