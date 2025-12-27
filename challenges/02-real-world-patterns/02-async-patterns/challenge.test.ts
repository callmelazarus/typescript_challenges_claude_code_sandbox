import { describe, it, expect } from 'vitest';
import {
  fetchUser,
  fetchUserWithError,
  fetchMultipleUsers,
  retryOperation,
} from './challenge';

describe('Challenge 6: Async Patterns with TypeScript', () => {
  describe('fetchUser', () => {
    it('should fetch a user by id', async () => {
      const user = await fetchUser(1);
      expect(user).toEqual({
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
      });
    });

    it('should throw for non-existent users', async () => {
      await expect(fetchUser(999)).rejects.toThrow();
    });
  });

  describe('fetchUserWithError', () => {
    it('should return Ok for valid users', async () => {
      const result = await fetchUserWithError(1);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.name).toBe('Alice');
      }
    });

    it('should return Err for negative ids', async () => {
      const result = await fetchUserWithError(-1);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBeTruthy();
      }
    });

    it('should return Err for non-existent users', async () => {
      const result = await fetchUserWithError(999);
      expect(result.success).toBe(false);
    });
  });

  describe('fetchMultipleUsers', () => {
    it('should fetch multiple users in parallel', async () => {
      const users = await fetchMultipleUsers([1, 2, 3]);
      expect(users).toHaveLength(3);
      expect(users[0]?.name).toBe('Alice');
      expect(users[1]?.name).toBe('Bob');
      expect(users[2]?.name).toBe('Charlie');
    });

    it('should handle empty array', async () => {
      const users = await fetchMultipleUsers([]);
      expect(users).toEqual([]);
    });

    it('should fetch single user', async () => {
      const users = await fetchMultipleUsers([2]);
      expect(users).toHaveLength(1);
      expect(users[0]?.name).toBe('Bob');
    });
  });

  describe('retryOperation', () => {
    it('should succeed on first try', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        return 'success';
      };

      const result = await retryOperation(fn, 3);
      expect(result).toBe('success');
      expect(attempts).toBe(1);
    });

    it('should retry on failure and eventually succeed', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        if (attempts < 3) {
          throw new Error('Temporary failure');
        }
        return 'success';
      };

      const result = await retryOperation(fn, 3);
      expect(result).toBe('success');
      expect(attempts).toBe(3);
    });

    it('should throw after max retries', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        throw new Error('Permanent failure');
      };

      await expect(retryOperation(fn, 3)).rejects.toThrow('Permanent failure');
      expect(attempts).toBe(3);
    });

    it('should work with zero retries', async () => {
      let attempts = 0;
      const fn = async () => {
        attempts++;
        throw new Error('Failure');
      };

      await expect(retryOperation(fn, 0)).rejects.toThrow();
      expect(attempts).toBe(0);
    });
  });
});
