import { describe, it, expectTypeOf } from 'vitest';
import {
  GetReturnType,
  GetParameters,
  GetFirstParameter,
  UnwrapPromise,
  UnwrapArray,
  GetConstructorParameters,
  DeepAwaited,
  GetObjectValues,
  GetInstanceType,
  GetProperty,
} from './challenge';

describe('Challenge 16: Type Inference with infer', () => {
  describe('GetReturnType', () => {
    it('should extract return type from functions', () => {
      type Fn1 = () => string;
      type Fn2 = (x: number) => boolean;
      type Fn3 = () => { name: string };

      expectTypeOf<GetReturnType<Fn1>>().toEqualTypeOf<string>();
      expectTypeOf<GetReturnType<Fn2>>().toEqualTypeOf<boolean>();
      expectTypeOf<GetReturnType<Fn3>>().toEqualTypeOf<{ name: string }>();
    });

    it('should return never for non-functions', () => {
      expectTypeOf<GetReturnType<string>>().toEqualTypeOf<never>();
      expectTypeOf<GetReturnType<number>>().toEqualTypeOf<never>();
    });
  });

  describe('GetParameters', () => {
    it('should extract all parameter types', () => {
      type Fn1 = (a: string, b: number) => void;
      type Fn2 = (x: boolean) => void;
      type Fn3 = () => void;

      expectTypeOf<GetParameters<Fn1>>().toEqualTypeOf<[string, number]>();
      expectTypeOf<GetParameters<Fn2>>().toEqualTypeOf<[boolean]>();
      expectTypeOf<GetParameters<Fn3>>().toEqualTypeOf<[]>();
    });
  });

  describe('GetFirstParameter', () => {
    it('should extract first parameter type', () => {
      type Fn1 = (a: string, b: number) => void;
      type Fn2 = (x: boolean) => void;

      expectTypeOf<GetFirstParameter<Fn1>>().toEqualTypeOf<string>();
      expectTypeOf<GetFirstParameter<Fn2>>().toEqualTypeOf<boolean>();
    });

    it('should return undefined for no parameters', () => {
      type Fn = () => void;
      expectTypeOf<GetFirstParameter<Fn>>().toEqualTypeOf<undefined>();
    });
  });

  describe('UnwrapPromise', () => {
    it('should extract type from Promise', () => {
      expectTypeOf<UnwrapPromise<Promise<string>>>().toEqualTypeOf<string>();
      expectTypeOf<UnwrapPromise<Promise<number>>>().toEqualTypeOf<number>();
      expectTypeOf<UnwrapPromise<Promise<{ id: number }>>>().toEqualTypeOf<{ id: number }>();
    });

    it('should return type as-is for non-Promise', () => {
      expectTypeOf<UnwrapPromise<string>>().toEqualTypeOf<string>();
      expectTypeOf<UnwrapPromise<number>>().toEqualTypeOf<number>();
    });
  });

  describe('UnwrapArray', () => {
    it('should extract element type from arrays', () => {
      expectTypeOf<UnwrapArray<string[]>>().toEqualTypeOf<string>();
      expectTypeOf<UnwrapArray<number[]>>().toEqualTypeOf<number>();
      expectTypeOf<UnwrapArray<Array<boolean>>>().toEqualTypeOf<boolean>();
    });

    it('should return never for non-arrays', () => {
      expectTypeOf<UnwrapArray<string>>().toEqualTypeOf<never>();
      expectTypeOf<UnwrapArray<number>>().toEqualTypeOf<never>();
    });
  });

  describe('GetConstructorParameters', () => {
    it('should extract constructor parameter types', () => {
      class MyClass {
        constructor(public name: string, public age: number) {}
      }

      class NoParams {
        constructor() {}
      }

      expectTypeOf<GetConstructorParameters<typeof MyClass>>().toEqualTypeOf<[string, number]>();
      expectTypeOf<GetConstructorParameters<typeof NoParams>>().toEqualTypeOf<[]>();
    });
  });

  describe('DeepAwaited', () => {
    it('should unwrap nested Promises', () => {
      expectTypeOf<DeepAwaited<Promise<string>>>().toEqualTypeOf<string>();
      expectTypeOf<DeepAwaited<Promise<Promise<string>>>>().toEqualTypeOf<string>();
      expectTypeOf<DeepAwaited<Promise<Promise<Promise<number>>>>>().toEqualTypeOf<number>();
    });

    it('should return type as-is for non-Promise', () => {
      expectTypeOf<DeepAwaited<string>>().toEqualTypeOf<string>();
      expectTypeOf<DeepAwaited<number>>().toEqualTypeOf<number>();
    });
  });

  describe('GetObjectValues', () => {
    it('should extract all value types as union', () => {
      type Obj1 = { a: string; b: number };
      type Obj2 = { x: boolean; y: string; z: number };

      expectTypeOf<GetObjectValues<Obj1>>().toEqualTypeOf<string | number>();
      expectTypeOf<GetObjectValues<Obj2>>().toEqualTypeOf<boolean | string | number>();
    });
  });

  describe('GetInstanceType (advanced)', () => {
    it('should extract instance type from class', () => {
      class MyClass {
        name = 'test';
      }

      expectTypeOf<GetInstanceType<typeof MyClass>>().toEqualTypeOf<MyClass>();
    });
  });

  describe('GetProperty (advanced)', () => {
    it('should extract property type', () => {
      type User = { name: string; age: number; active: boolean };

      expectTypeOf<GetProperty<User, 'name'>>().toEqualTypeOf<string>();
      expectTypeOf<GetProperty<User, 'age'>>().toEqualTypeOf<number>();
      expectTypeOf<GetProperty<User, 'active'>>().toEqualTypeOf<boolean>();
    });
  });
});
