// TODO: Define the PaymentStrategy interface
// Should have a pay(amount: number) method that returns a string
export interface PaymentStrategy {
  pay(amount: number): string;
}

// TODO: Implement CreditCardStrategy
// Constructor should take cardNumber (string) and cvv (string)
// pay() should return: "Paid ${amount} using Credit Card ending in {last4}"
// Extract last 4 digits of card number
export class CreditCardStrategy implements PaymentStrategy {
  constructor(
    private cardNumber: string,
    private cvv: string
  ) {}

  pay(amount: number): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement PayPalStrategy
// Constructor should take email (string)
// pay() should return: "Paid ${amount} using PayPal account {email}"
export class PayPalStrategy implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement CryptoStrategy
// Constructor should take walletAddress (string)
// pay() should return: "Paid ${amount} using Crypto wallet {address}"
export class CryptoStrategy implements PaymentStrategy {
  constructor(private walletAddress: string) {}

  pay(amount: number): string {
    // Your code here
    throw new Error('Not implemented');
  }
}

// TODO: Implement PaymentProcessor
// Should accept a strategy and delegate payment to it
export class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  // Process payment using the current strategy
  processPayment(amount: number): string {
    // Your code here
    throw new Error('Not implemented');
  }

  // Allow changing the strategy at runtime
  setStrategy(strategy: PaymentStrategy): void {
    // Your code here
    throw new Error('Not implemented');
  }
}
