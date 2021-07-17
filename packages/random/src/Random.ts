import { RandomError } from './Error/RandomError.js';
import { MersenneTwister } from './MersenneTwister.js';

const today: Date = new Date();
const seed: number = today.getDate();
const mersenne: MersenneTwister = new MersenneTwister(seed);

export class Random {
  public static integer(min: number, max: number): number {
    if (min > max) {
      throw new RandomError(`MIN IS GREATER THAN MAX: GIVEN: min = ${min}, MAX = ${max}`);
    }
    if (min === max) {
      return min;
    }

    return Math.floor(mersenne.decimal() * (max + 1 - min)) + min;
  }

  private constructor() {
    // NOOP
  }
}
