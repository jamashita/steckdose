import { RandomA } from '../RandomA';

describe('RandomA', () => {
  describe('string', () => {
    it('length is fixed', async () => {
      expect.assertions(10000);

      const length: number = 10;

      const promises: Array<Promise<string>> = Array.from(Array(10_000)).map<Promise<string>>(() => {
        return RandomA.string(length);
      });
      const strs: Array<string> = await Promise.all<string>(promises);

      strs.forEach((str: string) => {
        expect(str).toHaveLength(length);
      });
    });
  });

  describe('integer', () => {
    it('value is over min and below max', async () => {
      expect.assertions(20000);

      const min: number = 0;
      const max: number = 100;

      const promises: Array<Promise<number>> = Array.from(Array(10_000)).map<Promise<number>>(() => {
        return RandomA.integer(min, max);
      });
      const nums: Array<number> = await Promise.all<number>(promises);

      nums.forEach((num: number) => {
        expect(num).toBeLessThanOrEqual(max);
        expect(num).toBeGreaterThanOrEqual(min);
      });
    });
  });
});
