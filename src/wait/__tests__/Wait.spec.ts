import { Wait } from '../Wait.js';

describe('Wait', () => {
  describe('for', () => {
    it('must pass a certain milli seconds', async () => {
      const ms: number = 1000;
      const threshold: number = 50;

      const start: number = Date.now();

      await Wait.for(ms);

      const end: number = Date.now();

      expect(end - start).toBeLessThanOrEqual(ms + threshold);
    });
  });
});
