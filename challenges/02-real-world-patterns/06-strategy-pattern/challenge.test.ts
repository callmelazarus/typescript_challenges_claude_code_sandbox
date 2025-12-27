import { describe, it, expect } from 'vitest';
import {
  CreditCardStrategy,
  PayPalStrategy,
  CryptoStrategy,
  PaymentProcessor,
} from './challenge';

describe('Challenge 9: Strategy Pattern', () => {
  describe('CreditCardStrategy', () => {
    it('should process credit card payment', () => {
      const strategy = new CreditCardStrategy('1234567890123456', '123');
      expect(strategy.pay(100)).toBe('Paid $100 using Credit Card ending in 3456');
    });

    it('should handle different card numbers', () => {
      const strategy = new CreditCardStrategy('9876543210987654', '456');
      expect(strategy.pay(50.5)).toBe('Paid $50.5 using Credit Card ending in 7654');
    });
  });

  describe('PayPalStrategy', () => {
    it('should process PayPal payment', () => {
      const strategy = new PayPalStrategy('user@example.com');
      expect(strategy.pay(75)).toBe('Paid $75 using PayPal account user@example.com');
    });

    it('should handle different emails', () => {
      const strategy = new PayPalStrategy('alice@paypal.com');
      expect(strategy.pay(200)).toBe('Paid $200 using PayPal account alice@paypal.com');
    });
  });

  describe('CryptoStrategy', () => {
    it('should process crypto payment', () => {
      const strategy = new CryptoStrategy('0x742d35Cc6634C0532925a3b');
      expect(strategy.pay(0.5)).toBe('Paid $0.5 using Crypto wallet 0x742d35Cc6634C0532925a3b');
    });

    it('should handle different wallet addresses', () => {
      const strategy = new CryptoStrategy('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
      expect(strategy.pay(1000)).toBe(
        'Paid $1000 using Crypto wallet bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
      );
    });
  });

  describe('PaymentProcessor', () => {
    it('should process payment with credit card strategy', () => {
      const strategy = new CreditCardStrategy('1111222233334444', '999');
      const processor = new PaymentProcessor(strategy);
      expect(processor.processPayment(150)).toBe(
        'Paid $150 using Credit Card ending in 4444'
      );
    });

    it('should process payment with PayPal strategy', () => {
      const strategy = new PayPalStrategy('buyer@example.com');
      const processor = new PaymentProcessor(strategy);
      expect(processor.processPayment(99.99)).toBe(
        'Paid $99.99 using PayPal account buyer@example.com'
      );
    });

    it('should process payment with crypto strategy', () => {
      const strategy = new CryptoStrategy('0xABCDEF123456');
      const processor = new PaymentProcessor(strategy);
      expect(processor.processPayment(500)).toBe(
        'Paid $500 using Crypto wallet 0xABCDEF123456'
      );
    });

    it('should allow changing strategy at runtime', () => {
      const ccStrategy = new CreditCardStrategy('1234123412341234', '111');
      const processor = new PaymentProcessor(ccStrategy);

      expect(processor.processPayment(100)).toBe(
        'Paid $100 using Credit Card ending in 1234'
      );

      // Change to PayPal
      const ppStrategy = new PayPalStrategy('newuser@example.com');
      processor.setStrategy(ppStrategy);

      expect(processor.processPayment(200)).toBe(
        'Paid $200 using PayPal account newuser@example.com'
      );

      // Change to Crypto
      const cryptoStrategy = new CryptoStrategy('0x999888777');
      processor.setStrategy(cryptoStrategy);

      expect(processor.processPayment(300)).toBe(
        'Paid $300 using Crypto wallet 0x999888777'
      );
    });
  });
});
