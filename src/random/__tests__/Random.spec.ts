import { sequence } from '@jamashita/anden/helper';
import { Random } from '../Random.js';
import { RandomError } from '../RandomError.js';

describe('Random', () => {
  describe('float', () => {
    it('throws RandomError when min is NaN', () => {
      expect(() => {
        Random.float(Number.NaN, 1.2);
      }).toThrow(RandomError);
    });

    it('throws RandomError when max is NaN', () => {
      expect(() => {
        Random.float(1.2, Number.NaN);
      }).toThrow(RandomError);
    });

    it('throws RandomError when min > max', () => {
      expect(() => {
        Random.float(1.2, 0);
      }).toThrow(RandomError);
    });

    it('returns specified value when min = max', () => {
      expect(Random.float(98.1, 98.1)).toBe(98.1);
    });

    it('returns the same value when min == max', () => {
      for (let i = 0; i < 100; i++) {
        expect(Random.float(10_000.08, 10_000.08)).toBe(10_000.08);
      }
    });

    it('returns [min, max] range of value', () => {
      const min: number = 1.006;
      const max: number = 10.3;

      const arr: Array<Promise<void>> = sequence(10_000)
        .map(() => {
          return Promise.resolve(Random.float(min, max));
        })
        .map(async (promise: Promise<number>) => {
          const v: number = await promise;

          expect(v).toBeGreaterThanOrEqual(min);
          expect(v).toBeLessThan(max);
        });

      return Promise.all(arr);
    });
  });

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

    it('throws RandomError when min is NaN', () => {
      expect(() => {
        Random.integer(Number.NaN, 1);
      }).toThrow(RandomError);
    });

    it('throws RandomError when max is NaN', () => {
      expect(() => {
        Random.integer(0, Number.NaN);
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
      for (let i = 0; i < 100; i++) {
        expect(Random.integer(10_000, 10_000)).toBe(10_000);
      }
    });

    it('returns [min, max] range of value', () => {
      const min: number = 1;
      const max: number = 100;

      const arr: Array<Promise<void>> = sequence(10_000)
        .map(() => {
          return Promise.resolve(Random.integer(min, max));
        })
        .map(async (promise: Promise<number>) => {
          const v: number = await promise;

          expect(v).toBeGreaterThanOrEqual(min);
          expect(v).toBeLessThanOrEqual(max);
        });

      return Promise.all(arr);
    });
  });

  describe('pick', () => {
    it('picks a random element from the iterable', () => {
      const iterable: Array<number> = [1, 2, 3, 4, 5];

      for (let i = 0; i < 10_000; i++) {
        expect(iterable).toContain(Random.pick(iterable));
      }
    });

    it('throws RandomError when iterable is empty', () => {
      expect(() => {
        Random.pick([]);
      }).toThrow(RandomError);
    });
  });

  describe('random', () => {
    it('returns 0 <= x < 1', () => {
      const arr: Array<Promise<void>> = sequence(10_000)
        .map(() => {
          return Promise.resolve(Random.random());
        })
        .map(async (promise: Promise<number>) => {
          const v: number = await promise;

          expect(v).toBeGreaterThanOrEqual(0);
          expect(v).toBeLessThan(1);
        });

      return Promise.all(arr);
    });
  });

  describe('string', () => {
    it('returns specified length alphabetical string', () => {
      const length: number = 10;
      const arr: Array<Promise<void>> = sequence(10_000)
        .map(() => {
          return Promise.resolve(Random.string(length));
        })
        .map(async (promise: Promise<string>) => {
          const v: string = await promise;

          expect(v.length).toBe(length);
          expect(v).toMatch(/[a-zA-Z]+/u);
        });

      return Promise.all(arr);
    });
  });
});
