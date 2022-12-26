import { Kind } from '@jamashita/anden/type';
import MersenneTwister from 'mersenne-twister';
import { RandomError } from './RandomError.js';

const mersenne: MersenneTwister = new MersenneTwister();

export class Random {

  /**
   * returns min <= x <= max
   * @param min
   * @param max
   */
  public static integer(min: number, max: number): number {
    if (!Kind.isInteger(min)) {
      throw new RandomError(`MIN IS NOT INTEGER: GIVEN: ${min}`);
    }
    if (!Kind.isInteger(max)) {
      throw new RandomError(`MAX IS NOT INTEGER: GIVEN: ${max}`);
    }
    if (min > max) {
      throw new RandomError(`MIN IS GREATER THAN MAX: GIVEN: min = ${min}, max = ${max}`);
    }
    if (min === max) {
      return min;
    }

    return Math.floor(mersenne.random() * (max + 1 - min)) + min;
  }

  private constructor() {
    // NOOP
  }
}
