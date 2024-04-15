import { Kind } from '@jamashita/anden/type';
import MersenneTwister from 'mersenne-twister';
import { RandomError } from './RandomError.js';

const POOL: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const mersenne: MersenneTwister = new MersenneTwister();

export namespace Random {
  /**
   * returns min <= x < max
   * @param min
   * @param max
   */
  export const float = (min: number, max: number): number => {
    if (Kind.isNaN(min) || Kind.isNaN(max)) {
      throw new RandomError(`MIN OR MAX IS NaN: GIVEN: min = ${min}, max = ${max}`);
    }
    if (min > max) {
      throw new RandomError(`MIN IS GREATER THAN MAX: GIVEN: min = ${min}, max = ${max}`);
    }
    if (min === max) {
      return min;
    }

    return Random.random() * (max - min) + min;
  };

  /**
   * returns min <= x <= max
   * @param min
   * @param max
   */
  export const integer = (min: number, max: number): number => {
    if (!Kind.isInteger(min) || !Kind.isInteger(max)) {
      throw new RandomError(`MIN OR MAX IS NOT INTEGER: GIVEN: min = ${min}, max = ${max}`);
    }
    if (min > max) {
      throw new RandomError(`MIN IS GREATER THAN MAX: GIVEN: min = ${min}, max = ${max}`);
    }
    if (min === max) {
      return min;
    }

    return Math.floor(Random.random() * (max + 1 - min)) + min;
  };

  export const pick = <T>(iterable: Iterable<T>): T => {
    const array: Array<T> = [...iterable];

    if (array.length === 0) {
      throw new RandomError('ITERABLE IS EMPTY');
    }

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    return array[Random.integer(0, array.length - 1)]!;
  };

  /**
   * returns 0 <= x < 1
   */
  export const random = (): number => {
    return mersenne.random();
  };

  /**
   * TODO can split by codepoint
   * @param length
   * @param pool
   */
  export const string = (length: number, pool: string = POOL): string => {
    const l: number = pool.length;
    let str = '';

    for (let i = 0; i < length; i++) {
      const n: number = Random.integer(0, l - 1);

      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      str = `${str}${pool[n]!}`;
    }

    return str;
  };
}
