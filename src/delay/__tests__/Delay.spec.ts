import { Mock } from 'vitest';
import { Delay } from '../Delay.js';

describe('Delay', () => {
  describe('debounce', () => {
    it('only calls the callback once after multiple calls within the delay period', async () => {
      const fn: Mock = vi.fn();
      const debounced: Function = Delay.debounce(fn, 100);

      debounced();
      debounced();
      debounced();

      expect(fn).not.toHaveBeenCalled();

      await Delay.wait(100);

      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('calls the callback function twice when it is repeatedly called after the specified delay time', async () => {
      const fn: Mock = vi.fn();
      const debounced: Function = Delay.debounce(fn, 100);

      debounced();
      await Delay.wait(150);
      debounced();
      await Delay.wait(150);

      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  describe('throttle', () => {
    it('calls the callback function once when it is repeatedly called', () => {
      const fn: Mock = vi.fn();
      const throttled: Function = Delay.throttle(fn, 100);

      for (let i: number = 0; i < 10; i++) {
        throttled();
      }

      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('calls the callback function after the specified delay time', async () => {
      const fn: Mock = vi.fn();
      const throttled: Function = Delay.throttle(fn, 100);

      throttled();
      await Delay.wait(150);

      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('calls the callback function twice when it is repeatedly called after the specified delay time', async () => {
      const fn: Mock = vi.fn();
      const throttled: Function = Delay.throttle(fn, 100);

      throttled();
      await Delay.wait(150);
      throttled();
      await Delay.wait(150);

      expect(fn).toHaveBeenCalledTimes(2);
    });
  });

  describe('wait', () => {
    it('must pass a certain milli seconds', async () => {
      const ms: number = 1000;
      const threshold: number = 50;

      const start: number = Date.now();

      await Delay.wait(ms);

      const end: number = Date.now();

      expect(end - start).toBeLessThanOrEqual(ms + threshold);
    });
  });
});
