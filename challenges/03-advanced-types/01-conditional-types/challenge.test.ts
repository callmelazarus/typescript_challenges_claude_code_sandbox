import { describe, it, expect, expectTypeOf } from 'vitest';
import {
  IsString,
  IsArray,
  ArrayElementType,
  MyNonNullable,
  ExtractNumbers,
  WrapInArray,
  wrapInArray,
  ReturnTypeOf,
  Awaited,
} from './challenge';

describe('Challenge 13: Conditional Types', () => {
  describe('IsString type', () => {
    it('should return true for string types', () => {
      expectTypeOf<IsString<string>>().toEqualTypeOf<true>();
      expectTypeOf<IsString<'hello'>>().toEqualTypeOf<true>();
    });

    it('should return false for non-string types', () => {
      expectTypeOf<IsString<number>>().toEqualTypeOf<false>();
      expectTypeOf<IsString<boolean>>().toEqualTypeOf<false>();
      expectTypeOf<IsString<null>>().toEqualTypeOf<false>();
      expectTypeOf<IsString<string[]>>().toEqualTypeOf<false>();
    });
  });

  describe('IsArray type', () => {
    it('should return true for array types', () => {
      expectTypeOf<IsArray<number[]>>().toEqualTypeOf<true>();
      expectTypeOf<IsArray<string[]>>().toEqualTypeOf<true>();
      expectTypeOf<IsArray<Array<any>>>().toEqualTypeOf<true>();
    });

    it('should return false for non-array types', () => {
      expectTypeOf<IsArray<string>>().toEqualTypeOf<false>();
      expectTypeOf<IsArray<number>>().toEqualTypeOf<false>();
      expectTypeOf<IsArray<object>>().toEqualTypeOf<false>();
    });
  });

  describe('ArrayElementType', () => {
    it('should extract element type from arrays', () => {
      expectTypeOf<ArrayElementType<string[]>>().toEqualTypeOf<string>();
      expectTypeOf<ArrayElementType<number[]>>().toEqualTypeOf<number>();
      expectTypeOf<ArrayElementType<Array<boolean>>>().toEqualTypeOf<boolean>();
    });

    it('should return never for non-arrays', () => {
      expectTypeOf<ArrayElementType<string>>().toEqualTypeOf<never>();
      expectTypeOf<ArrayElementType<number>>().toEqualTypeOf<never>();
      expectTypeOf<ArrayElementType<object>>().toEqualTypeOf<never>();
    });
  });

  describe('MyNonNullable type', () => {
    it('should remove null and undefined', () => {
      expectTypeOf<MyNonNullable<string | null>>().toEqualTypeOf<string>();
      expectTypeOf<MyNonNullable<number | undefined>>().toEqualTypeOf<number>();
      expectTypeOf<MyNonNullable<string | null | undefined>>().toEqualTypeOf<string>();
    });

    it('should preserve other types', () => {
      expectTypeOf<MyNonNullable<string>>().toEqualTypeOf<string>();
      expectTypeOf<MyNonNullable<number | boolean>>().toEqualTypeOf<number | boolean>();
    });
  });

  describe('ExtractNumbers type', () => {
    it('should extract only number types', () => {
      expectTypeOf<ExtractNumbers<number>>().toEqualTypeOf<number>();
      expectTypeOf<ExtractNumbers<42>>().toEqualTypeOf<42>();
      expectTypeOf<ExtractNumbers<string | number>>().toEqualTypeOf<number>();
    });

    it('should filter out non-number types', () => {
      expectTypeOf<ExtractNumbers<string>>().toEqualTypeOf<never>();
      expectTypeOf<ExtractNumbers<boolean>>().toEqualTypeOf<never>();
      expectTypeOf<ExtractNumbers<string | boolean>>().toEqualTypeOf<never>();
    });

    it('should work with complex unions', () => {
      expectTypeOf<ExtractNumbers<string | number | boolean | 42>>().toEqualTypeOf<number | 42>();
    });
  });

  describe('WrapInArray type and function', () => {
    it('should keep arrays as-is (type level)', () => {
      expectTypeOf<WrapInArray<number[]>>().toEqualTypeOf<number[]>();
      expectTypeOf<WrapInArray<string[]>>().toEqualTypeOf<string[]>();
    });

    it('should wrap non-arrays in array (type level)', () => {
      expectTypeOf<WrapInArray<number>>().toEqualTypeOf<number[]>();
      expectTypeOf<WrapInArray<string>>().toEqualTypeOf<string[]>();
    });

    it('should keep arrays as-is (runtime)', () => {
      const arr = [1, 2, 3];
      const result = wrapInArray(arr);
      expect(result).toBe(arr);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should wrap non-arrays (runtime)', () => {
      expect(wrapInArray(5)).toEqual([5]);
      expect(wrapInArray('hello')).toEqual(['hello']);
      expect(wrapInArray(true)).toEqual([true]);
    });

    it('should have correct return types', () => {
      const arr = [1, 2, 3];
      const wrappedArr = wrapInArray(arr);
      expectTypeOf(wrappedArr).toEqualTypeOf<number[]>();

      const num = 42;
      const wrappedNum = wrapInArray(num);
      expectTypeOf(wrappedNum).toEqualTypeOf<number[]>();
    });
  });

  describe('ReturnTypeOf (advanced)', () => {
    it('should extract return type from functions', () => {
      type Fn1 = () => string;
      type Fn2 = (x: number) => boolean;
      type Fn3 = (...args: any[]) => number[];

      expectTypeOf<ReturnTypeOf<Fn1>>().toEqualTypeOf<string>();
      expectTypeOf<ReturnTypeOf<Fn2>>().toEqualTypeOf<boolean>();
      expectTypeOf<ReturnTypeOf<Fn3>>().toEqualTypeOf<number[]>();
    });

    it('should return never for non-functions', () => {
      expectTypeOf<ReturnTypeOf<string>>().toEqualTypeOf<never>();
      expectTypeOf<ReturnTypeOf<number>>().toEqualTypeOf<never>();
    });
  });

  describe('Awaited (advanced)', () => {
    it('should extract type from Promise', () => {
      expectTypeOf<Awaited<Promise<string>>>().toEqualTypeOf<string>();
      expectTypeOf<Awaited<Promise<number>>>().toEqualTypeOf<number>();
    });

    it('should return type as-is for non-Promise', () => {
      expectTypeOf<Awaited<string>>().toEqualTypeOf<string>();
      expectTypeOf<Awaited<number>>().toEqualTypeOf<number>();
    });
  });
});
