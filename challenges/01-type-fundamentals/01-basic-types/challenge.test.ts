import { describe, it, expect } from 'vitest';
import { processValue, getArea, formatResult } from './challenge';

describe('Challenge 1: Type Narrowing & Union Types', () => {
  describe('processValue', () => {
    it('should double numbers and return as string', () => {
      expect(processValue(10)).toBe('20');
      expect(processValue(5)).toBe('10');
      expect(processValue(0)).toBe('0');
    });

    it('should uppercase strings', () => {
      expect(processValue('hello')).toBe('HELLO');
      expect(processValue('world')).toBe('WORLD');
      expect(processValue('TypeScript')).toBe('TYPESCRIPT');
    });
  });

  describe('getArea', () => {
    it('should calculate circle area correctly', () => {
      const circle = { kind: 'circle' as const, radius: 5 };
      expect(getArea(circle)).toBeCloseTo(78.54, 1);
    });

    it('should calculate rectangle area correctly', () => {
      const rectangle = { kind: 'rectangle' as const, width: 4, height: 6 };
      expect(getArea(rectangle)).toBe(24);
    });

    it('should handle different sized shapes', () => {
      const smallCircle = { kind: 'circle' as const, radius: 1 };
      expect(getArea(smallCircle)).toBeCloseTo(3.14, 1);

      const largeRectangle = { kind: 'rectangle' as const, width: 10, height: 20 };
      expect(getArea(largeRectangle)).toBe(200);
    });
  });

  describe('formatResult', () => {
    it('should format success results', () => {
      const success = { success: true as const, data: 'Operation completed' };
      expect(formatResult(success)).toBe('Success: Operation completed');
    });

    it('should format failure results', () => {
      const failure = { success: false as const, error: 'Something went wrong' };
      expect(formatResult(failure)).toBe('Error: Something went wrong');
    });

    it('should handle different messages', () => {
      const success = { success: true as const, data: 'User created' };
      expect(formatResult(success)).toBe('Success: User created');

      const failure = { success: false as const, error: 'Network timeout' };
      expect(formatResult(failure)).toBe('Error: Network timeout');
    });
  });
});
