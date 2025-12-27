import { describe, it, expect } from 'vitest';
import {
  SimpleCoffee,
  MilkDecorator,
  SugarDecorator,
  WhipDecorator,
} from './challenge';

describe('Challenge 11: Decorator Pattern', () => {
  describe('SimpleCoffee', () => {
    it('should have base cost and description', () => {
      const coffee = new SimpleCoffee();
      expect(coffee.cost()).toBe(2);
      expect(coffee.description()).toBe('Simple coffee');
    });
  });

  describe('MilkDecorator', () => {
    it('should add milk to simple coffee', () => {
      const coffee = new MilkDecorator(new SimpleCoffee());
      expect(coffee.cost()).toBe(2.5);
      expect(coffee.description()).toBe('Simple coffee, milk');
    });
  });

  describe('SugarDecorator', () => {
    it('should add sugar to simple coffee', () => {
      const coffee = new SugarDecorator(new SimpleCoffee());
      expect(coffee.cost()).toBe(2.25);
      expect(coffee.description()).toBe('Simple coffee, sugar');
    });
  });

  describe('WhipDecorator', () => {
    it('should add whip to simple coffee', () => {
      const coffee = new WhipDecorator(new SimpleCoffee());
      expect(coffee.cost()).toBe(2.75);
      expect(coffee.description()).toBe('Simple coffee, whip');
    });
  });

  describe('Multiple Decorators', () => {
    it('should combine milk and sugar', () => {
      const coffee = new MilkDecorator(new SugarDecorator(new SimpleCoffee()));
      expect(coffee.cost()).toBe(2.75); // 2 + 0.25 + 0.50
      expect(coffee.description()).toBe('Simple coffee, sugar, milk');
    });

    it('should combine all three decorators', () => {
      const coffee = new WhipDecorator(
        new MilkDecorator(new SugarDecorator(new SimpleCoffee()))
      );
      expect(coffee.cost()).toBe(3.5); // 2 + 0.25 + 0.50 + 0.75
      expect(coffee.description()).toBe('Simple coffee, sugar, milk, whip');
    });

    it('should allow different combinations', () => {
      const coffee = new SugarDecorator(
        new SugarDecorator(new MilkDecorator(new SimpleCoffee()))
      );
      expect(coffee.cost()).toBe(3); // 2 + 0.50 + 0.25 + 0.25
      expect(coffee.description()).toBe('Simple coffee, milk, sugar, sugar');
    });

    it('should work in any order', () => {
      const coffee1 = new MilkDecorator(new WhipDecorator(new SimpleCoffee()));
      expect(coffee1.cost()).toBe(3.25);
      expect(coffee1.description()).toBe('Simple coffee, whip, milk');

      const coffee2 = new WhipDecorator(new MilkDecorator(new SimpleCoffee()));
      expect(coffee2.cost()).toBe(3.25);
      expect(coffee2.description()).toBe('Simple coffee, milk, whip');
    });
  });
});
