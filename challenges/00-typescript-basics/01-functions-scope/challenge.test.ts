import { describe, it, expect } from 'vitest';
import {
  greet,
  add,
  multiply,
  createCounter,
  createMultiplier,
  demonstrateHoisting,
  sum,
  joinStrings,
  Calculator,
} from './challenge';

describe('Challenge 0.1: Functions & Scope', () => {
  describe('greet', () => {
    it('should return greeting message', () => {
      expect(greet('Alice')).toBe('Hello, Alice!');
      expect(greet('Bob')).toBe('Hello, Bob!');
    });
  });

  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
      expect(add(-5, 5)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(5, 2)).toBe(10);
    });

    it('should use default parameter of 1', () => {
      expect(multiply(7)).toBe(7);
      expect(multiply(10)).toBe(10);
    });
  });

  describe('createCounter', () => {
    it('should increment count', () => {
      const counter = createCounter();
      expect(counter.increment()).toBe(1);
      expect(counter.increment()).toBe(2);
      expect(counter.increment()).toBe(3);
    });

    it('should decrement count', () => {
      const counter = createCounter();
      counter.increment();
      counter.increment();
      expect(counter.decrement()).toBe(1);
      expect(counter.decrement()).toBe(0);
    });

    it('should get current value', () => {
      const counter = createCounter();
      expect(counter.getValue()).toBe(0);
      counter.increment();
      expect(counter.getValue()).toBe(1);
    });

    it('should maintain separate state for each counter', () => {
      const counter1 = createCounter();
      const counter2 = createCounter();
      counter1.increment();
      counter1.increment();
      counter2.increment();
      expect(counter1.getValue()).toBe(2);
      expect(counter2.getValue()).toBe(1);
    });
  });

  describe('createMultiplier', () => {
    it('should create function that multiplies by factor', () => {
      const double = createMultiplier(2);
      expect(double(5)).toBe(10);
      expect(double(10)).toBe(20);
    });

    it('should remember different factors', () => {
      const triple = createMultiplier(3);
      const quadruple = createMultiplier(4);
      expect(triple(5)).toBe(15);
      expect(quadruple(5)).toBe(20);
    });
  });

  describe('demonstrateHoisting', () => {
    it('should return correct string about hoisting', () => {
      const result = demonstrateHoisting();
      expect(result).toBe('let and const are hoisted but in temporal dead zone');
    });
  });

  describe('sum', () => {
    it('should sum multiple numbers', () => {
      expect(sum(1, 2, 3, 4)).toBe(10);
      expect(sum(5, 10, 15)).toBe(30);
    });

    it('should handle single number', () => {
      expect(sum(42)).toBe(42);
    });

    it('should handle no arguments', () => {
      expect(sum()).toBe(0);
    });

    it('should handle many arguments', () => {
      expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
    });
  });

  describe('joinStrings', () => {
    it('should join strings with separator', () => {
      expect(joinStrings('-', 'a', 'b', 'c')).toBe('a-b-c');
      expect(joinStrings(' ', 'hello', 'world')).toBe('hello world');
    });

    it('should handle single string', () => {
      expect(joinStrings('-', 'alone')).toBe('alone');
    });

    it('should handle different separators', () => {
      expect(joinStrings(', ', 'apple', 'banana', 'orange')).toBe('apple, banana, orange');
      expect(joinStrings('/', 'path', 'to', 'file')).toBe('path/to/file');
    });
  });

  describe('Calculator', () => {
    it('should add to value', () => {
      const calc = new Calculator();
      calc.add(5);
      expect(calc.value).toBe(5);
      calc.add(3);
      expect(calc.value).toBe(8);
    });

    it('should subtract from value', () => {
      const calc = new Calculator();
      calc.add(10);
      calc.subtract(3);
      expect(calc.value).toBe(7);
    });

    it('should multiply value', () => {
      const calc = new Calculator();
      calc.add(5);
      calc.multiply(3);
      expect(calc.value).toBe(15);
    });

    it('should divide value', () => {
      const calc = new Calculator();
      calc.add(20);
      calc.divide(4);
      expect(calc.value).toBe(5);
    });

    it('should support method chaining', () => {
      const calc = new Calculator();
      const result = calc.add(10).multiply(2).subtract(5).divide(3);
      expect(calc.value).toBe(5);
      expect(result).toBe(calc); // Should return this
    });

    it('should chain complex operations', () => {
      const calc = new Calculator();
      calc.add(100).subtract(20).multiply(2).divide(4);
      expect(calc.value).toBe(40);
    });
  });
});
