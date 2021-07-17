import { sequence } from '@jamashita/anden-helper';
import { RandomError } from '../Error/RandomError.js';
import { Random } from '../Random.js';

describe('Random', () => {
  describe('integer', () => {
    it('may throw error when min > max', () => {
      expect.assertions(1);

      expect(() => {
        Random.integer(1, 0);
      }).toThrow(RandomError);
    });

    it('returns the same value when min == max', () => {
      expect.assertions(100);

      for (let i: number = 0; i < 100; i++) {
        expect(Random.integer(10_000, 10_000)).toBe(10_000);
      }
    });

    it('returns [min, max] range of value', async () => {
      expect.assertions(20_000);

      const min: number = 1;
      const max: number = 100;

      const arr: Array<Promise<void>> = sequence(10_000).map<Promise<number>>(() => {
        return Promise.resolve<number>(Random.integer(min, max));
      }).map(async (promise: Promise<number>) => {
        const v: number = await promise;

        expect(v).toBeGreaterThanOrEqual(min);
        expect(v).toBeLessThanOrEqual(max);
      });

      return Promise.resolve(arr);
    });
  });
});
