import { MersenneTwister } from '../MersenneTwister.js';

describe('MersenneTwister', () => {
  describe('integer', () => {
    it('always produces different value', () => {
      expect.assertions(100);

      const today: Date = new Date();
      const seed: number = today.getDate();
      const mersenne: MersenneTwister = new MersenneTwister(seed);
      let prev: number = mersenne.integer();

      for (let i: number = 0; i < 100; i++) {
        const curr: number = mersenne.integer();

        expect(curr).not.toBe(prev);
        prev = curr;
      }
    });
  });

  describe('decimal', () => {
    it('always produces different value', () => {
      expect.assertions(100);

      const today: Date = new Date();
      const seed: number = today.getDate();
      const mersenne: MersenneTwister = new MersenneTwister(seed);
      let prev: number = mersenne.decimal();

      for (let i: number = 0; i < 100; i++) {
        const curr: number = mersenne.decimal();

        expect(curr).not.toBe(prev);
        prev = curr;
      }
    });

    it('[0, 1)', () => {
      expect.assertions(200);

      const today: Date = new Date();
      const seed: number = today.getDate();
      const mersenne: MersenneTwister = new MersenneTwister(seed);

      for (let i: number = 0; i < 100; i++) {
        const value: number = mersenne.decimal();

        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(1);
      }
    });
  });
});
