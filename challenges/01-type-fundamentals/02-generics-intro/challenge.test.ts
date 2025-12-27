import { describe, it, expect } from 'vitest';
import { identity, firstElement, mapArray, filterByProperty } from './challenge';

describe('Challenge 2: Introduction to Generics', () => {
  describe('identity', () => {
    it('should return the same value for numbers', () => {
      expect(identity(42)).toBe(42);
    });

    it('should return the same value for strings', () => {
      expect(identity('hello')).toBe('hello');
    });

    it('should return the same value for objects', () => {
      const obj = { name: 'Alice', age: 30 };
      expect(identity(obj)).toBe(obj);
    });

    it('should preserve type information', () => {
      const result: string = identity('TypeScript');
      expect(result).toBe('TypeScript');
    });
  });

  describe('firstElement', () => {
    it('should return the first element of a number array', () => {
      expect(firstElement([1, 2, 3])).toBe(1);
    });

    it('should return the first element of a string array', () => {
      expect(firstElement(['a', 'b', 'c'])).toBe('a');
    });

    it('should return undefined for an empty array', () => {
      expect(firstElement([])).toBeUndefined();
    });

    it('should work with arrays of objects', () => {
      const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
      expect(firstElement(users)).toEqual({ id: 1, name: 'Alice' });
    });
  });

  describe('mapArray', () => {
    it('should transform numbers to strings', () => {
      const result = mapArray([1, 2, 3], (n) => n.toString());
      expect(result).toEqual(['1', '2', '3']);
    });

    it('should double numbers', () => {
      const result = mapArray([1, 2, 3], (n) => n * 2);
      expect(result).toEqual([2, 4, 6]);
    });

    it('should extract properties from objects', () => {
      const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const names = mapArray(users, (user) => user.name);
      expect(names).toEqual(['Alice', 'Bob']);
    });

    it('should handle empty arrays', () => {
      const result = mapArray([], (n: number) => n * 2);
      expect(result).toEqual([]);
    });
  });

  describe('filterByProperty', () => {
    it('should filter by string property', () => {
      const users = [
        { id: 1, name: 'Alice', role: 'admin' },
        { id: 2, name: 'Bob', role: 'user' },
        { id: 3, name: 'Charlie', role: 'admin' },
      ];
      const admins = filterByProperty(users, 'role', 'admin');
      expect(admins).toEqual([
        { id: 1, name: 'Alice', role: 'admin' },
        { id: 3, name: 'Charlie', role: 'admin' },
      ]);
    });

    it('should filter by number property', () => {
      const items = [
        { id: 1, quantity: 5 },
        { id: 2, quantity: 0 },
        { id: 3, quantity: 5 },
      ];
      const fiveItems = filterByProperty(items, 'quantity', 5);
      expect(fiveItems).toEqual([
        { id: 1, quantity: 5 },
        { id: 3, quantity: 5 },
      ]);
    });

    it('should return empty array when no matches', () => {
      const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const result = filterByProperty(users, 'name', 'Charlie');
      expect(result).toEqual([]);
    });
  });
});
