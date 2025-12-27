import { describe, it, expect } from 'vitest';
import {
  getFullName,
  getAge,
  getDefaults,
  mergeObjects,
  addProperty,
  updateUser,
  getKeys,
  getValues,
  objectToArray,
  countProperties,
} from './challenge';

describe('Challenge 0.3: Objects & Destructuring', () => {
  describe('getFullName', () => {
    it('should return full name using destructuring', () => {
      expect(getFullName({ firstName: 'John', lastName: 'Doe' })).toBe('John Doe');
      expect(getFullName({ firstName: 'Jane', lastName: 'Smith' })).toBe('Jane Smith');
    });
  });

  describe('getAge', () => {
    it('should return age using destructuring', () => {
      expect(getAge({ age: 25 })).toBe(25);
      expect(getAge({ age: 30 })).toBe(30);
    });
  });

  describe('getDefaults', () => {
    it('should use provided age', () => {
      expect(getDefaults({ name: 'Alice', age: 25 })).toEqual({ name: 'Alice', age: 25 });
    });

    it('should use default age of 18', () => {
      expect(getDefaults({ name: 'Bob' })).toEqual({ name: 'Bob', age: 18 });
    });
  });

  describe('mergeObjects', () => {
    it('should merge two objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

    it('should override with obj2 properties', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });
  });

  describe('addProperty', () => {
    it('should add property to object', () => {
      const obj = { a: 1 };
      const result = addProperty(obj, 'b', 2);
      expect(result).toEqual({ a: 1, b: 2 });
      expect(obj).toEqual({ a: 1 }); // Original should not be mutated
    });
  });

  describe('updateUser', () => {
    it('should update user properties', () => {
      const user = { name: 'Alice', age: 25 };
      const result = updateUser(user, { age: 26 });
      expect(result).toEqual({ name: 'Alice', age: 26 });
      expect(user.age).toBe(25); // Original should not be mutated
    });
  });

  describe('getKeys', () => {
    it('should return object keys', () => {
      expect(getKeys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c']);
    });
  });

  describe('getValues', () => {
    it('should return object values', () => {
      expect(getValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
    });
  });

  describe('objectToArray', () => {
    it('should convert object to entries array', () => {
      expect(objectToArray({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
    });
  });

  describe('countProperties', () => {
    it('should count properties', () => {
      expect(countProperties({ a: 1, b: 2, c: 3 })).toBe(3);
      expect(countProperties({})).toBe(0);
    });
  });
});
