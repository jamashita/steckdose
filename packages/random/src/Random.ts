import MersenneTwister from 'mersenne-twister';
import { RandomError } from './Error/RandomError';

const mersenne: MersenneTwister = new MersenneTwister();

export class Random {
  public static integer(min: number, max: number): number {
    if (min > max) {
      throw new RandomError(`MIN IS GREATER THAN MAX: GIVEN: min = ${min}, MAX = ${max}`);
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
