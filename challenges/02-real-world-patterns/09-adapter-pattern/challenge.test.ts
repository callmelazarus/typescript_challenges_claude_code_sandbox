import { describe, it, expect, vi } from 'vitest';
import {
  StripeService,
  PayPalService,
  StripeAdapter,
  PayPalAdapter,
  PaymentGateway,
} from './challenge';

describe('Challenge 12: Adapter Pattern', () => {
  describe('StripeAdapter', () => {
    it('should adapt Stripe service to PaymentGateway interface', () => {
      const stripeService = new StripeService();
      const adapter = new StripeAdapter(stripeService);
      const result = adapter.processPayment(10);

      expect(result.success).toBe(true);
      expect(result.transactionId).toMatch(/^stripe_/);
    });

    it('should convert dollars to cents when calling Stripe', () => {
      const stripeService = new StripeService();
      const chargeSpy = vi.spyOn(stripeService, 'charge');
      const adapter = new StripeAdapter(stripeService);

      adapter.processPayment(10);
      expect(chargeSpy).toHaveBeenCalledWith(1000); // $10 = 1000 cents

      adapter.processPayment(25.50);
      expect(chargeSpy).toHaveBeenCalledWith(2550); // $25.50 = 2550 cents
    });

    it('should return transaction ID from Stripe response', () => {
      const stripeService = new StripeService();
      vi.spyOn(stripeService, 'charge').mockReturnValue({ id: 'stripe_test123' });
      const adapter = new StripeAdapter(stripeService);

      const result = adapter.processPayment(100);
      expect(result.transactionId).toBe('stripe_test123');
    });
  });

  describe('PayPalAdapter', () => {
    it('should adapt PayPal service to PaymentGateway interface', () => {
      const paypalService = new PayPalService();
      const adapter = new PayPalAdapter(paypalService);
      const result = adapter.processPayment(20);

      expect(result.success).toBe(true);
      expect(result.transactionId).toMatch(/^paypal_/);
    });

    it('should pass dollars directly to PayPal', () => {
      const paypalService = new PayPalService();
      const paySpy = vi.spyOn(paypalService, 'pay');
      const adapter = new PayPalAdapter(paypalService);

      adapter.processPayment(15);
      expect(paySpy).toHaveBeenCalledWith(15);

      adapter.processPayment(99.99);
      expect(paySpy).toHaveBeenCalledWith(99.99);
    });

    it('should map PayPal payment ID to transaction ID', () => {
      const paypalService = new PayPalService();
      vi.spyOn(paypalService, 'pay').mockReturnValue({
        paymentId: 'paypal_test456',
        status: 'COMPLETED',
      });
      const adapter = new PayPalAdapter(paypalService);

      const result = adapter.processPayment(50);
      expect(result.transactionId).toBe('paypal_test456');
    });

    it('should set success based on status', () => {
      const paypalService = new PayPalService();
      const adapter = new PayPalAdapter(paypalService);

      // Mock completed payment
      vi.spyOn(paypalService, 'pay').mockReturnValue({
        paymentId: 'paypal_test',
        status: 'COMPLETED',
      });
      let result = adapter.processPayment(10);
      expect(result.success).toBe(true);

      // Mock failed payment
      vi.spyOn(paypalService, 'pay').mockReturnValue({
        paymentId: 'paypal_test',
        status: 'FAILED',
      });
      result = adapter.processPayment(10);
      expect(result.success).toBe(false);
    });
  });

  describe('Polymorphic usage', () => {
    it('should allow using different adapters through same interface', () => {
      const gateways: PaymentGateway[] = [
        new StripeAdapter(new StripeService()),
        new PayPalAdapter(new PayPalService()),
      ];

      gateways.forEach((gateway) => {
        const result = gateway.processPayment(100);
        expect(result).toHaveProperty('success');
        expect(result).toHaveProperty('transactionId');
        expect(typeof result.success).toBe('boolean');
        expect(typeof result.transactionId).toBe('string');
      });
    });

    it('should work with a payment processor that accepts any gateway', () => {
      function processOrder(gateway: PaymentGateway, amount: number) {
        const result = gateway.processPayment(amount);
        return result.success ? `Paid: ${result.transactionId}` : 'Payment failed';
      }

      const stripeResult = processOrder(new StripeAdapter(new StripeService()), 50);
      expect(stripeResult).toMatch(/^Paid: stripe_/);

      const paypalResult = processOrder(new PayPalAdapter(new PayPalService()), 75);
      expect(paypalResult).toMatch(/^Paid: paypal_/);
    });
  });
});
