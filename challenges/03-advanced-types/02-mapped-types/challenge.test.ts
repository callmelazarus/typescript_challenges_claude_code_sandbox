import { describe, it, expect, expectTypeOf } from 'vitest';
import {
  MyReadonly,
  Mutable,
  Optional,
  MyRequired,
  Nullable,
  DeepReadonly,
  pick,
  mapValues,
  PartialBy,
  RequiredBy,
} from './challenge';

type User = {
  id: number;
  name: string;
  email: string;
};

describe('Challenge 14: Mapped Types', () => {
  describe('MyReadonly type', () => {
    it('should make all properties readonly', () => {
      type ReadonlyUser = MyReadonly<User>;
      const user: ReadonlyUser = { id: 1, name: 'Alice', email: 'alice@example.com' };

      // @ts-expect-error - should not be able to assign to readonly property
      user.name = 'Bob';

      expectTypeOf<ReadonlyUser>().toEqualTypeOf<{
        readonly id: number;
        readonly name: string;
        readonly email: string;
      }>();
    });
  });

  describe('Mutable type', () => {
    it('should remove readonly from all properties', () => {
      type ReadonlyUser = {
        readonly id: number;
        readonly name: string;
      };
      type MutableUser = Mutable<ReadonlyUser>;

      const user: MutableUser = { id: 1, name: 'Alice' };
      user.name = 'Bob'; // Should work

      expectTypeOf<MutableUser>().toEqualTypeOf<{
        id: number;
        name: string;
      }>();
    });
  });

  describe('Optional type', () => {
    it('should make all properties optional', () => {
      type OptionalUser = Optional<User>;

      const user1: OptionalUser = {};
      const user2: OptionalUser = { id: 1 };
      const user3: OptionalUser = { id: 1, name: 'Alice', email: 'alice@example.com' };

      expectTypeOf<OptionalUser>().toEqualTypeOf<{
        id?: number;
        name?: string;
        email?: string;
      }>();
    });
  });

  describe('MyRequired type', () => {
    it('should make all properties required', () => {
      type PartialUser = {
        id?: number;
        name?: string;
      };
      type RequiredUser = MyRequired<PartialUser>;

      // @ts-expect-error - all fields should be required
      const user1: RequiredUser = { id: 1 };

      const user2: RequiredUser = { id: 1, name: 'Alice' }; // Should work

      expectTypeOf<RequiredUser>().toEqualTypeOf<{
        id: number;
        name: string;
      }>();
    });
  });

  describe('Nullable type', () => {
    it('should add null to all property types', () => {
      type NullableUser = Nullable<User>;

      const user: NullableUser = {
        id: null,
        name: 'Alice',
        email: null,
      };

      expectTypeOf<NullableUser>().toEqualTypeOf<{
        id: number | null;
        name: string | null;
        email: string | null;
      }>();
    });
  });

  describe('DeepReadonly type', () => {
    it('should make nested objects readonly', () => {
      type NestedUser = {
        id: number;
        profile: {
          name: string;
          settings: {
            theme: string;
          };
        };
      };

      type DeepReadonlyUser = DeepReadonly<NestedUser>;

      const user: DeepReadonlyUser = {
        id: 1,
        profile: {
          name: 'Alice',
          settings: {
            theme: 'dark',
          },
        },
      };

      // @ts-expect-error - top level should be readonly
      user.id = 2;

      // @ts-expect-error - nested should be readonly
      user.profile.name = 'Bob';

      // @ts-expect-error - deeply nested should be readonly
      user.profile.settings.theme = 'light';
    });
  });

  describe('pick function', () => {
    it('should pick specified properties', () => {
      const user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
      const picked = pick(user, ['id', 'name']);

      expect(picked).toEqual({ id: 1, name: 'Alice' });
      expect(picked).not.toHaveProperty('email');
    });

    it('should have correct type', () => {
      const user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
      const picked = pick(user, ['id', 'name']);

      expectTypeOf(picked).toEqualTypeOf<{ id: number; name: string }>();
    });

    it('should work with single property', () => {
      const user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
      const picked = pick(user, ['id']);

      expect(picked).toEqual({ id: 1 });
      expectTypeOf(picked).toEqualTypeOf<{ id: number }>();
    });
  });

  describe('mapValues function', () => {
    it('should transform all values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = mapValues(obj, (x) => x * 2);

      expect(result).toEqual({ a: 2, b: 4, c: 6 });
    });

    it('should handle type transformations', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = mapValues(obj, (x) => x.toString());

      expect(result).toEqual({ a: '1', b: '2', c: '3' });
      expectTypeOf(result).toEqualTypeOf<{ a: string; b: string; c: string }>();
    });

    it('should work with different value types', () => {
      const obj = { name: 'Alice', age: 30, active: true };
      const result = mapValues(obj, () => 'mapped');

      expect(result).toEqual({ name: 'mapped', age: 'mapped', active: 'mapped' });
    });
  });

  describe('PartialBy (advanced)', () => {
    it('should make specific keys optional', () => {
      type PartialEmailUser = PartialBy<User, 'email'>;

      const user1: PartialEmailUser = { id: 1, name: 'Alice' }; // email is optional
      const user2: PartialEmailUser = { id: 1, name: 'Alice', email: 'alice@example.com' };

      // @ts-expect-error - id is still required
      const user3: PartialEmailUser = { name: 'Alice' };
    });
  });

  describe('RequiredBy (advanced)', () => {
    it('should make specific keys required', () => {
      type PartialUser = {
        id?: number;
        name?: string;
        email?: string;
      };
      type RequiredEmailUser = RequiredBy<PartialUser, 'email'>;

      // @ts-expect-error - email is now required
      const user1: RequiredEmailUser = { id: 1, name: 'Alice' };

      const user2: RequiredEmailUser = { email: 'alice@example.com' }; // id and name still optional
    });
  });
});
