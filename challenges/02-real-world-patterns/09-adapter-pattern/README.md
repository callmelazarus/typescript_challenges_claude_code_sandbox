# Challenge 12: Adapter Pattern

## Learning Goals
- Convert one interface to another
- Make incompatible interfaces work together
- Wrap legacy or third-party code
- Understand when to use adapters

## The Challenge

The Adapter pattern lets you use classes with incompatible interfaces together. You'll build adapters for different payment gateways:

1. **Define a common `PaymentGateway` interface**
   - `processPayment(amount: number): { success: boolean; transactionId: string }`

2. **Create legacy payment services** (with different interfaces)
   - `StripeService` - has `charge(cents: number)` returning `{ id: string }`
   - `PayPalService` - has `pay(dollars: number)` returning `{ paymentId: string; status: string }`

3. **Implement adapters**
   - `StripeAdapter` - adapts StripeService to PaymentGateway interface
   - `PayPalAdapter` - adapts PayPalService to PaymentGateway interface

4. **Handle interface differences**
   - Convert between cents and dollars
   - Map different response formats to common format
   - Handle status codes differently

## Real-World Use Cases

- Integrating third-party libraries
- Supporting multiple API versions
- Working with legacy code
- Database drivers (adapting different databases to common interface)
- UI components (adapting different component libraries)

## Why Adapter Pattern?

Instead of rewriting third-party code or changing your interface:
- Wrap incompatible interfaces
- Keep your code clean and consistent
- Switch implementations easily

## Run Tests
```bash
npm test 09-adapter-pattern
```
