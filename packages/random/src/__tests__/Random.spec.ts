import { sequence } from '@jamashita/anden-helper';
import { Random } from '../Random';
import { RandomError } from '../RandomError';

describe('Random', () => {
  describe('integer', () => {
    it('throws RandomError when min is not integer', () => {
      expect(() => {
        Random.integer(0.1, 1);
      }).toThrow(RandomError);
    });

    it('throws RandomError when max is not integer', () => {
      expect(() => {
        Random.integer(0, 1.1);
      }).toThrow(RandomError);
    });

    it('throws RandomError when min > max', () => {
      expect(() => {
        Random.integer(1, 0);
      }).toThrow(RandomError);
    });

    it('returns specified value when min = max', () => {
      expect(Random.integer(98, 98)).toBe(98);
    });

    it('returns the same value when min == max', () => {
      for (let i: number = 0; i < 100; i++) {
        expect(Random.integer(10_000, 10_000)).toBe(10_000);
      }
    });

    it('returns [min, max] range of value', async () => {
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
