import { describe, it, expect } from 'vitest';
import { delay, fetchData, fetchWithError, getData, handleError, parallel } from './challenge';

describe('Challenge 0.5: Async Fundamentals', () => {
  describe('delay', () => {
    it('should delay for specified milliseconds', async () => {
      const start = Date.now();
      await delay(50);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(45); // Allow small variance
    });
  });

  describe('fetchData', () => {
    it('should return data from URL', async () => {
      const result = await fetchData('https://api.example.com');
      expect(result).toBe('Data from https://api.example.com');
    });
  });

  describe('fetchWithError', () => {
    it('should resolve when shouldFail is false', async () => {
      const result = await fetchWithError(false);
      expect(result).toBe('Success');
    });

    it('should reject when shouldFail is true', async () => {
      await expect(fetchWithError(true)).rejects.toThrow();
    });
  });

  describe('getData', () => {
    it('should fetch data using async/await', async () => {
      const result = await getData();
      expect(result).toBe('Data from https://api.example.com');
    });
  });

  describe('handleError', () => {
    it('should handle error and return message', async () => {
      const result = await handleError();
      expect(result).toBe('Error handled');
    });
  });

  describe('parallel', () => {
    it('should fetch multiple URLs in parallel', async () => {
      const urls = ['url1', 'url2', 'url3'];
      const results = await parallel(urls);
      expect(results).toEqual([
        'Data from url1',
        'Data from url2',
        'Data from url3',
      ]);
    });

    it('should handle empty array', async () => {
      const results = await parallel([]);
      expect(results).toEqual([]);
    });
  });
});
