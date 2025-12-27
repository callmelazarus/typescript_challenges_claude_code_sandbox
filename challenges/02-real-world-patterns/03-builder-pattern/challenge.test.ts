import { describe, it, expect } from 'vitest';
import { QueryBuilder } from './challenge';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

describe('Challenge 7: Builder Pattern', () => {
  describe('QueryBuilder', () => {
    it('should build a query with select', () => {
      const query = new QueryBuilder<User>()
        .select(['id', 'name'])
        .build();

      expect(query.select).toEqual(['id', 'name']);
    });

    it('should build a query with where clause', () => {
      const query = new QueryBuilder<User>()
        .where({ role: 'admin' })
        .build();

      expect(query.where).toEqual({ role: 'admin' });
    });

    it('should build a query with orderBy', () => {
      const query = new QueryBuilder<User>()
        .orderBy('name')
        .build();

      expect(query.orderBy).toBe('name');
    });

    it('should build a query with limit', () => {
      const query = new QueryBuilder<User>()
        .limit(10)
        .build();

      expect(query.limit).toBe(10);
    });

    it('should chain multiple methods', () => {
      const query = new QueryBuilder<User>()
        .select(['id', 'name', 'email'])
        .where({ role: 'admin' })
        .orderBy('name')
        .limit(5)
        .build();

      expect(query).toEqual({
        select: ['id', 'name', 'email'],
        where: { role: 'admin' },
        orderBy: 'name',
        limit: 5,
      });
    });

    it('should allow partial where conditions', () => {
      const query = new QueryBuilder<User>()
        .where({ role: 'admin', name: 'Alice' })
        .build();

      expect(query.where).toEqual({ role: 'admin', name: 'Alice' });
    });

    it('should build empty query when no methods called', () => {
      const query = new QueryBuilder<User>().build();
      expect(query).toEqual({});
    });

    it('should allow method chaining in any order', () => {
      const query = new QueryBuilder<User>()
        .limit(20)
        .where({ role: 'user' })
        .select(['id'])
        .orderBy('id')
        .build();

      expect(query.limit).toBe(20);
      expect(query.where).toEqual({ role: 'user' });
      expect(query.select).toEqual(['id']);
      expect(query.orderBy).toBe('id');
    });
  });
});
