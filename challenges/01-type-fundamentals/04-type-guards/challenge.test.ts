import { describe, it, expect } from 'vitest';
import { isString, isUser, isAPIError, handleStatus } from './challenge';

describe('Challenge 4: Custom Type Guards', () => {
  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString('123')).toBe(true);
    });

    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });

    it('should narrow types correctly', () => {
      const value: unknown = 'test';
      if (isString(value)) {
        // TypeScript knows value is a string here
        const upper: string = value.toUpperCase();
        expect(upper).toBe('TEST');
      }
    });
  });

  describe('isUser', () => {
    it('should return true for valid user objects', () => {
      const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
      expect(isUser(user)).toBe(true);
    });

    it('should return false for objects missing properties', () => {
      expect(isUser({ id: 1, name: 'Alice' })).toBe(false);
      expect(isUser({ name: 'Alice', email: 'alice@example.com' })).toBe(false);
      expect(isUser({ id: 1, email: 'alice@example.com' })).toBe(false);
    });

    it('should return false for objects with wrong types', () => {
      expect(isUser({ id: '1', name: 'Alice', email: 'alice@example.com' })).toBe(false);
      expect(isUser({ id: 1, name: 123, email: 'alice@example.com' })).toBe(false);
      expect(isUser({ id: 1, name: 'Alice', email: true })).toBe(false);
    });

    it('should return false for non-objects', () => {
      expect(isUser(null)).toBe(false);
      expect(isUser(undefined)).toBe(false);
      expect(isUser('user')).toBe(false);
      expect(isUser(123)).toBe(false);
    });

    it('should narrow types correctly', () => {
      const value: unknown = { id: 1, name: 'Alice', email: 'alice@example.com' };
      if (isUser(value)) {
        // TypeScript knows value is a User here
        const name: string = value.name;
        expect(name).toBe('Alice');
      }
    });
  });

  describe('isAPIError', () => {
    it('should return true for valid API errors', () => {
      const error = { message: 'Not found', statusCode: 404 };
      expect(isAPIError(error)).toBe(true);
    });

    it('should return false for objects missing properties', () => {
      expect(isAPIError({ message: 'Error' })).toBe(false);
      expect(isAPIError({ statusCode: 500 })).toBe(false);
    });

    it('should return false for objects with wrong types', () => {
      expect(isAPIError({ message: 123, statusCode: 404 })).toBe(false);
      expect(isAPIError({ message: 'Error', statusCode: '500' })).toBe(false);
    });

    it('should return false for non-objects', () => {
      expect(isAPIError(null)).toBe(false);
      expect(isAPIError(undefined)).toBe(false);
      expect(isAPIError(new Error('Standard error'))).toBe(false);
    });

    it('should narrow types correctly', () => {
      const error: unknown = { message: 'Server error', statusCode: 500 };
      if (isAPIError(error)) {
        // TypeScript knows error is an APIError here
        const code: number = error.statusCode;
        expect(code).toBe(500);
      }
    });
  });

  describe('handleStatus (exhaustive checking example)', () => {
    it('should handle all status types', () => {
      expect(handleStatus('pending')).toBe('Status is pending');
      expect(handleStatus('active')).toBe('Status is active');
      expect(handleStatus('completed')).toBe('Status is completed');
    });
  });
});
