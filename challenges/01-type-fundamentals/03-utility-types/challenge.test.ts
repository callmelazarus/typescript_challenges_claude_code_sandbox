import { describe, it, expect } from 'vitest';
import { updateUser, getUserSummary, createConfig, createStatusMap } from './challenge';
import type { User } from './challenge';

describe('Challenge 3: Built-in Utility Types', () => {
  describe('updateUser', () => {
    const user: User = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      age: 30,
      role: 'user',
    };

    it('should update a single field', () => {
      const updated = updateUser(user, { name: 'Alicia' });
      expect(updated).toEqual({
        id: 1,
        name: 'Alicia',
        email: 'alice@example.com',
        age: 30,
        role: 'user',
      });
    });

    it('should update multiple fields', () => {
      const updated = updateUser(user, { name: 'Alicia', age: 31 });
      expect(updated).toEqual({
        id: 1,
        name: 'Alicia',
        email: 'alice@example.com',
        age: 31,
        role: 'user',
      });
    });

    it('should work with empty updates', () => {
      const updated = updateUser(user, {});
      expect(updated).toEqual(user);
    });
  });

  describe('getUserSummary', () => {
    it('should extract only id and name', () => {
      const user: User = {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        age: 30,
        role: 'user',
      };
      const summary = getUserSummary(user);
      expect(summary).toEqual({ id: 1, name: 'Alice' });
    });

    it('should work with different users', () => {
      const user: User = {
        id: 42,
        name: 'Bob',
        email: 'bob@example.com',
        age: 25,
        role: 'admin',
      };
      const summary = getUserSummary(user);
      expect(summary).toEqual({ id: 42, name: 'Bob' });
    });
  });

  describe('createConfig', () => {
    it('should use defaults when no overrides provided', () => {
      const config = createConfig({});
      expect(config).toEqual({
        apiUrl: 'https://api.example.com',
        timeout: 5000,
        retries: 3,
        debug: false,
      });
    });

    it('should merge overrides with defaults', () => {
      const config = createConfig({ debug: true, timeout: 10000 });
      expect(config).toEqual({
        apiUrl: 'https://api.example.com',
        timeout: 10000,
        retries: 3,
        debug: true,
      });
    });

    it('should allow overriding all fields', () => {
      const config = createConfig({
        apiUrl: 'https://custom.api.com',
        timeout: 3000,
        retries: 5,
        debug: true,
      });
      expect(config).toEqual({
        apiUrl: 'https://custom.api.com',
        timeout: 3000,
        retries: 5,
        debug: true,
      });
    });
  });

  describe('createStatusMap', () => {
    it('should create a map with boolean values', () => {
      const map = createStatusMap(['pending', 'active', 'completed']);
      expect(map).toEqual({
        pending: false,
        active: false,
        completed: false,
      });
    });

    it('should handle empty array', () => {
      const map = createStatusMap([]);
      expect(map).toEqual({});
    });

    it('should handle single status', () => {
      const map = createStatusMap(['active']);
      expect(map).toEqual({ active: false });
    });
  });
});
