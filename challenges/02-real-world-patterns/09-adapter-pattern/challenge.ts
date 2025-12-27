// Common interface that all payment gateways should implement
export interface PaymentGateway {
  processPayment(amount: number): { success: boolean; transactionId: string };
}

// Legacy Stripe service (incompatible interface)
// Uses cents instead of dollars
// Returns different response format
export class StripeService {
  charge(cents: number): { id: string } {
    // Simulate Stripe API
    return { id: `stripe_${Math.random().toString(36).substr(2, 9)}` };
  }
}

// Legacy PayPal service (incompatible interface)
// Uses dollars but returns different response format
export class PayPalService {
  pay(dollars: number): { paymentId: string; status: string } {
    // Simulate PayPal API
    return {
      paymentId: `paypal_${Math.random().toString(36).substr(2, 9)}`,
      status: 'COMPLETED',
    };
  }
}

// TODO: Implement StripeAdapter
// Should adapt StripeService to the PaymentGateway interface
// Convert dollars to cents (multiply by 100)
// Convert Stripe response to standard format
export class StripeAdapter implements PaymentGateway {
  constructor(private stripeService: StripeService) {}

  processPayment(amount: number): { success: boolean; transactionId: string } {
    // Your code here
    // Hint: Convert dollars to cents, call stripeService.charge(), map response
    throw new Error('Not implemented');
  }
}

// TODO: Implement PayPalAdapter
// Should adapt PayPalService to the PaymentGateway interface
// Keep dollars as is
// Convert PayPal response to standard format
// Set success based on status === 'COMPLETED'
export class PayPalAdapter implements PaymentGateway {
  constructor(private paypalService: PayPalService) {}

  processPayment(amount: number): { success: boolean; transactionId: string } {
    // Your code here
    // Hint: Call paypalService.pay(), map response
    throw new Error('Not implemented');
  }
}

// Example usage:
// const stripeGateway: PaymentGateway = new StripeAdapter(new StripeService());
// const paypalGateway: PaymentGateway = new PayPalAdapter(new PayPalService());
//
// // Both can be used the same way now!
// stripeGateway.processPayment(10); // $10
// paypalGateway.processPayment(20); // $20
