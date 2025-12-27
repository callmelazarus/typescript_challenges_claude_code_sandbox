import { describe, it, expect } from 'vitest';
import {
  doubleNumbers,
  getEvenNumbers,
  sumArray,
  findFirstNegative,
  hasNegativeNumbers,
  areAllPositive,
  getNames,
  getAdults,
  averageAge,
  groupByAge,
  flatten,
  removeDuplicates,
  chunk,
} from './challenge';

describe('Challenge 0.2: Arrays & Iteration', () => {
  describe('doubleNumbers', () => {
    it('should double each number', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
      expect(doubleNumbers([5, 10, 15])).toEqual([10, 20, 30]);
    });

    it('should handle empty array', () => {
      expect(doubleNumbers([])).toEqual([]);
    });
  });

  describe('getEvenNumbers', () => {
    it('should filter even numbers', () => {
      expect(getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
      expect(getEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
    });

    it('should handle array with no even numbers', () => {
      expect(getEvenNumbers([1, 3, 5])).toEqual([]);
    });
  });

  describe('sumArray', () => {
    it('should sum all numbers', () => {
      expect(sumArray([1, 2, 3, 4])).toBe(10);
      expect(sumArray([5, 10, 15])).toBe(30);
    });

    it('should handle empty array', () => {
      expect(sumArray([])).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(sumArray([10, -5, 3])).toBe(8);
    });
  });

  describe('findFirstNegative', () => {
    it('should find first negative number', () => {
      expect(findFirstNegative([1, 2, -3, 4, -5])).toBe(-3);
      expect(findFirstNegative([5, -1, 2])).toBe(-1);
    });

    it('should return undefined if no negative numbers', () => {
      expect(findFirstNegative([1, 2, 3])).toBeUndefined();
    });
  });

  describe('hasNegativeNumbers', () => {
    it('should return true if array has negative numbers', () => {
      expect(hasNegativeNumbers([1, 2, -3])).toBe(true);
      expect(hasNegativeNumbers([-1, 2, 3])).toBe(true);
    });

    it('should return false if no negative numbers', () => {
      expect(hasNegativeNumbers([1, 2, 3])).toBe(false);
      expect(hasNegativeNumbers([0, 5, 10])).toBe(false);
    });
  });

  describe('areAllPositive', () => {
    it('should return true if all numbers positive', () => {
      expect(areAllPositive([1, 2, 3])).toBe(true);
      expect(areAllPositive([5, 10, 15])).toBe(true);
    });

    it('should return false if any number not positive', () => {
      expect(areAllPositive([1, 0, 3])).toBe(false);
      expect(areAllPositive([1, -1, 3])).toBe(false);
    });
  });

  describe('getNames', () => {
    it('should extract names from users', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
      ];
      expect(getNames(users)).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should handle empty array', () => {
      expect(getNames([])).toEqual([]);
    });
  });

  describe('getAdults', () => {
    it('should filter users 18 or older', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 15 },
        { name: 'Charlie', age: 18 },
        { name: 'David', age: 17 },
      ];
      expect(getAdults(users)).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 18 },
      ]);
    });
  });

  describe('averageAge', () => {
    it('should calculate average age', () => {
      const users = [
        { name: 'Alice', age: 20 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 40 },
      ];
      expect(averageAge(users)).toBe(30);
    });

    it('should return 0 for empty array', () => {
      expect(averageAge([])).toBe(0);
    });

    it('should handle single user', () => {
      expect(averageAge([{ name: 'Alice', age: 25 }])).toBe(25);
    });
  });

  describe('groupByAge', () => {
    it('should group names by age', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'David', age: 30 },
      ];
      expect(groupByAge(users)).toEqual({
        25: ['Alice', 'Charlie'],
        30: ['Bob', 'David'],
      });
    });

    it('should handle empty array', () => {
      expect(groupByAge([])).toEqual({});
    });
  });

  describe('flatten', () => {
    it('should flatten 2D array', () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
      expect(flatten([['a', 'b'], ['c']])).toEqual(['a', 'b', 'c']);
    });

    it('should handle empty array', () => {
      expect(flatten([])).toEqual([]);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate numbers', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(removeDuplicates([5, 5, 5])).toEqual([5]);
    });

    it('should remove duplicate strings', () => {
      expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    });

    it('should handle array with no duplicates', () => {
      expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });

    it('should handle size larger than array', () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    it('should handle empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });
  });
});
