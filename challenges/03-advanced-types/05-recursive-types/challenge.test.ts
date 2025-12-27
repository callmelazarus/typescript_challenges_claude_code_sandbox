import { describe, it, expectTypeOf } from 'vitest';
import {
  DeepPartial,
  DeepRequired,
  DeepReadonly,
  JSONValue,
  Flatten,
  DeepFlatten,
  PathsToStringProps,
} from './challenge';

describe('Challenge 17: Recursive Types', () => {
  describe('DeepPartial', () => {
    it('should make all properties optional recursively', () => {
      type Nested = {
        user: {
          name: string;
          profile: {
            bio: string;
          };
        };
      };

      type Result = DeepPartial<Nested>;

      expectTypeOf<Result>().toEqualTypeOf<{
        user?: {
          name?: string;
          profile?: {
            bio?: string;
          };
        };
      }>();
    });
  });

  describe('DeepRequired', () => {
    it('should make all properties required recursively', () => {
      type Nested = {
        user?: {
          name?: string;
          profile?: {
            bio?: string;
          };
        };
      };

      type Result = DeepRequired<Nested>;

      expectTypeOf<Result>().toEqualTypeOf<{
        user: {
          name: string;
          profile: {
            bio: string;
          };
        };
      }>();
    });
  });

  describe('DeepReadonly', () => {
    it('should make all properties readonly recursively', () => {
      type Nested = {
        user: {
          name: string;
          profile: {
            bio: string;
          };
        };
      };

      type Result = DeepReadonly<Nested>;

      const obj: Result = {
        user: {
          name: 'Alice',
          profile: {
            bio: 'Developer',
          },
        },
      };

      // @ts-expect-error - should not be able to modify
      obj.user.name = 'Bob';

      // @ts-expect-error - should not be able to modify nested
      obj.user.profile.bio = 'Designer';
    });
  });

  describe('JSONValue', () => {
    it('should accept valid JSON values', () => {
      const str: JSONValue = 'hello';
      const num: JSONValue = 42;
      const bool: JSONValue = true;
      const nul: JSONValue = null;
      const arr: JSONValue = [1, 2, 3];
      const obj: JSONValue = { name: 'Alice', age: 30 };

      expectTypeOf(str).toMatchTypeOf<JSONValue>();
      expectTypeOf(num).toMatchTypeOf<JSONValue>();
      expectTypeOf(bool).toMatchTypeOf<JSONValue>();
      expectTypeOf(nul).toMatchTypeOf<JSONValue>();
      expectTypeOf(arr).toMatchTypeOf<JSONValue>();
      expectTypeOf(obj).toMatchTypeOf<JSONValue>();
    });

    it('should accept nested JSON', () => {
      const nested: JSONValue = {
        user: {
          name: 'Alice',
          scores: [1, 2, 3],
          meta: {
            active: true,
          },
        },
      };

      expectTypeOf(nested).toMatchTypeOf<JSONValue>();
    });
  });

  describe('Flatten', () => {
    it('should flatten one level of arrays', () => {
      expectTypeOf<Flatten<number[][]>>().toEqualTypeOf<number[]>();
      expectTypeOf<Flatten<string[][]>>().toEqualTypeOf<string[]>();
    });

    it('should return type as-is for non-arrays', () => {
      expectTypeOf<Flatten<number>>().toEqualTypeOf<number>();
      expectTypeOf<Flatten<string>>().toEqualTypeOf<string>();
    });
  });

  describe('DeepFlatten', () => {
    it('should completely flatten nested arrays', () => {
      expectTypeOf<DeepFlatten<number[][]>>().toEqualTypeOf<number>();
      expectTypeOf<DeepFlatten<string[][][]>>().toEqualTypeOf<string>();
    });

    it('should return type as-is for non-arrays', () => {
      expectTypeOf<DeepFlatten<number>>().toEqualTypeOf<number>();
      expectTypeOf<DeepFlatten<string>>().toEqualTypeOf<string>();
    });
  });

  describe('PathsToStringProps (advanced)', () => {
    it('should generate paths to string properties', () => {
      type Obj = {
        user: {
          name: string;
          age: number;
        };
        title: string;
      };

      type Paths = PathsToStringProps<Obj>;

      // Should include "user.name" and "title"
      expectTypeOf<'user.name'>().toMatchTypeOf<Paths>();
      expectTypeOf<'title'>().toMatchTypeOf<Paths>();

      // Should NOT include "user.age" (not a string)
      // Note: This is hard to test negatively with expectTypeOf
    });
  });
});
