import { describe, it, expectTypeOf } from 'vitest';
import {
  MyPick,
  MyOmit,
  MyExclude,
  MyExtract,
  MyRecord,
  MyReturnType,
  StrictOmit,
  Merge,
  PartialBy,
  RequireAtLeastOne,
  Mutable,
  PromiseType,
  DeepPartial,
  Prettify,
  UnionToIntersection,
  Getters,
  RemovePrefix,
} from './challenge';

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

describe('Challenge 18: Building Utility Types', () => {
  describe('MyPick', () => {
    it('should pick specified properties', () => {
      type Result = MyPick<User, 'id' | 'name'>;
      expectTypeOf<Result>().toEqualTypeOf<{ id: number; name: string }>();
    });
  });

  describe('MyOmit', () => {
    it('should omit specified properties', () => {
      type Result = MyOmit<User, 'email' | 'age'>;
      expectTypeOf<Result>().toEqualTypeOf<{ id: number; name: string }>();
    });
  });

  describe('MyExclude', () => {
    it('should exclude types from union', () => {
      type Result = MyExclude<'a' | 'b' | 'c', 'a'>;
      expectTypeOf<Result>().toEqualTypeOf<'b' | 'c'>();

      type Result2 = MyExclude<string | number | boolean, boolean>;
      expectTypeOf<Result2>().toEqualTypeOf<string | number>();
    });
  });

  describe('MyExtract', () => {
    it('should extract types from union', () => {
      type Result = MyExtract<'a' | 'b' | 'c', 'a' | 'c'>;
      expectTypeOf<Result>().toEqualTypeOf<'a' | 'c'>();

      type Result2 = MyExtract<string | number | boolean, number | boolean>();
      expectTypeOf<Result2>().toEqualTypeOf<number | boolean>();
    });
  });

  describe('MyRecord', () => {
    it('should create record type', () => {
      type Result = MyRecord<'a' | 'b', number>;
      expectTypeOf<Result>().toEqualTypeOf<{ a: number; b: number }>();
    });
  });

  describe('MyReturnType', () => {
    it('should extract return type', () => {
      type Fn = () => string;
      expectTypeOf<MyReturnType<Fn>>().toEqualTypeOf<string>();

      type Fn2 = (x: number) => boolean;
      expectTypeOf<MyReturnType<Fn2>>().toEqualTypeOf<boolean>();
    });
  });

  describe('StrictOmit', () => {
    it('should omit with strict key checking', () => {
      type Result = StrictOmit<User, 'email'>;
      expectTypeOf<Result>().toEqualTypeOf<{ id: number; name: string; age: number }>();

      // @ts-expect-error - 'invalid' is not a key of User
      type Invalid = StrictOmit<User, 'invalid'>;
    });
  });

  describe('Merge', () => {
    it('should merge types with U overriding T', () => {
      type A = { a: string; b: number };
      type B = { b: string; c: boolean };
      type Result = Merge<A, B>;

      expectTypeOf<Result>().toEqualTypeOf<{ a: string; b: string; c: boolean }>();
    });
  });

  describe('PartialBy', () => {
    it('should make specific keys optional', () => {
      type Result = PartialBy<User, 'email' | 'age'>;

      const user1: Result = { id: 1, name: 'Alice' }; // email and age are optional
      const user2: Result = { id: 2, name: 'Bob', email: 'bob@example.com' };

      // @ts-expect-error - id is still required
      const user3: Result = { name: 'Charlie' };
    });
  });

  describe('RequireAtLeastOne', () => {
    it('should require at least one property', () => {
      type Optional = {
        a?: string;
        b?: number;
        c?: boolean;
      };

      type Result = RequireAtLeastOne<Optional>;

      const valid1: Result = { a: 'hello' };
      const valid2: Result = { b: 42 };
      const valid3: Result = { a: 'hello', b: 42 };

      // @ts-expect-error - at least one property required
      const invalid: Result = {};
    });
  });

  describe('Mutable', () => {
    it('should remove readonly modifiers', () => {
      type ReadonlyUser = {
        readonly id: number;
        readonly name: string;
      };

      type Result = Mutable<ReadonlyUser>;
      const user: Result = { id: 1, name: 'Alice' };
      user.id = 2; // Should work
      user.name = 'Bob'; // Should work
    });
  });

  describe('PromiseType', () => {
    it('should unwrap Promise type', () => {
      expectTypeOf<PromiseType<Promise<string>>>().toEqualTypeOf<string>();
      expectTypeOf<PromiseType<Promise<number>>>().toEqualTypeOf<number>();
    });

    it('should return type as-is for non-Promise', () => {
      expectTypeOf<PromiseType<string>>().toEqualTypeOf<string>();
      expectTypeOf<PromiseType<number>>().toEqualTypeOf<number>();
    });
  });

  describe('DeepPartial', () => {
    it('should make nested properties optional', () => {
      type Nested = {
        user: {
          name: string;
          profile: {
            bio: string;
          };
        };
      };

      type Result = DeepPartial<Nested>;

      const obj: Result = {}; // All properties optional
      const obj2: Result = { user: { profile: {} } }; // Partial at any level
    });
  });

  describe('Prettify', () => {
    it('should expand type for better display', () => {
      type Complex = { a: string } & { b: number };
      type Result = Prettify<Complex>;

      expectTypeOf<Result>().toEqualTypeOf<{ a: string; b: number }>();
    });
  });

  describe('UnionToIntersection', () => {
    it('should convert union to intersection', () => {
      type Union = { a: string } | { b: number };
      type Result = UnionToIntersection<Union>;

      expectTypeOf<Result>().toEqualTypeOf<{ a: string } & { b: number }>();
    });
  });

  describe('Getters', () => {
    it('should create getter methods', () => {
      type Person = { name: string; age: number };
      type Result = Getters<Person>;

      expectTypeOf<Result>().toEqualTypeOf<{
        getName: () => string;
        getAge: () => number;
      }>();
    });
  });

  describe('RemovePrefix', () => {
    it('should remove prefix from keys', () => {
      type Prefixed = {
        prefixName: string;
        prefixAge: number;
      };

      type Result = RemovePrefix<Prefixed, 'prefix'>;

      expectTypeOf<Result>().toEqualTypeOf<{
        Name: string;
        Age: number;
      }>();
    });
  });
});
