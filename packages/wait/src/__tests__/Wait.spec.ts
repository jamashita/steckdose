import { wait } from '../Wait';

describe('Wait', () => {
  describe('wait', () => {
    it('must pass a certain milli seconds', async () => {
      const ms: number = 1000;
      const threshold: number = 50;

      const start: number = Date.now();

      await wait(ms);

      const end: number = Date.now();

      expect(end - start).toBeLessThanOrEqual(ms + threshold);
    });
  });
});
