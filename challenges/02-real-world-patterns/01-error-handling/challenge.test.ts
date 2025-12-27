import { describe, it, expect } from 'vitest';
import { divide, parseJSON, mapResult, chainResult, Ok, Err } from './challenge';

describe('Challenge 5: Error Handling Patterns', () => {
  describe('divide', () => {
    it('should return Ok with result for valid division', () => {
      const result = divide(10, 2);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toBe(5);
      }
    });

    it('should return Err when dividing by zero', () => {
      const result = divide(10, 0);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBeTruthy();
      }
    });

    it('should handle negative numbers', () => {
      const result = divide(-10, 2);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toBe(-5);
      }
    });
  });

  describe('parseJSON', () => {
    it('should parse valid JSON', () => {
      const result = parseJSON<{ name: string }>('{"name":"Alice"}');
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toEqual({ name: 'Alice' });
      }
    });

    it('should return Err for invalid JSON', () => {
      const result = parseJSON('{invalid json}');
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBeTruthy();
      }
    });

    it('should handle arrays', () => {
      const result = parseJSON<number[]>('[1,2,3]');
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value).toEqual([1, 2, 3]);
      }
    });
  });

  describe('mapResult', () => {
    it('should transform successful results', () => {
      const result = Ok(5);
      const mapped = mapResult(result, (x) => x * 2);
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.value).toBe(10);
      }
    });

    it('should pass through errors', () => {
      const result = Err('Something went wrong');
      const mapped = mapResult(result, (x: number) => x * 2);
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error).toBe('Something went wrong');
      }
    });

    it('should allow type transformations', () => {
      const result = Ok(42);
      const mapped = mapResult(result, (x) => x.toString());
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.value).toBe('42');
      }
    });
  });

  describe('chainResult', () => {
    it('should chain successful operations', () => {
      const result = Ok(10);
      const chained = chainResult(result, (x) => divide(x, 2));
      expect(chained.success).toBe(true);
      if (chained.success) {
        expect(chained.value).toBe(5);
      }
    });

    it('should stop at first error', () => {
      const result = Ok(10);
      const chained = chainResult(result, (x) => divide(x, 0));
      expect(chained.success).toBe(false);
    });

    it('should pass through initial errors', () => {
      const result = Err('Initial error');
      const chained = chainResult(result, (x: number) => Ok(x * 2));
      expect(chained.success).toBe(false);
      if (!chained.success) {
        expect(chained.error).toBe('Initial error');
      }
    });

    it('should compose multiple operations', () => {
      const result = parseJSON<{ value: number }>('{"value":20}');
      const final = chainResult(
        mapResult(result, (obj) => obj.value),
        (x) => divide(x, 4)
      );
      expect(final.success).toBe(true);
      if (final.success) {
        expect(final.value).toBe(5);
      }
    });
  });
});
