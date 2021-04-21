import { randomInt } from 'd3-random';
import { RandomError } from './Error/RandomError';

export class Random {
  public static integer(min: number, max: number): number {
    if (min > max) {
      throw new RandomError(`MIN IS GREATER THAN MAX: GIVEN: min = ${min}, MAX = ${max}`);
    }
    if (min === max) {
      return min;
    }

    return randomInt(min, max)();
  }

  private constructor() {
    // NOOP
  }
}
