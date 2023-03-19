import { Kind } from '@jamashita/anden/type';
import { Random, RandomError } from '../random/index.js';
import { ArithmeticError } from './ArithmeticError.js';

export class Arithmetic {

  /**
   * returns min <= x < max
   * @param min
   * @param max
   */
  public static float(min: number, max: number): number {
    try {
      return Random.float(min, max);
    }
    catch (e: unknown) {
      if (e instanceof RandomError) {
        throw new ArithmeticError(e.message, e);
      }

      throw e;
    }
  }

  public static gcd(greater: number, less: number): number {
    if (!Kind.isInteger(greater)) {
      throw new ArithmeticError(`greater MUST BE INTEGER: ${greater}`);
    }
    if (!Kind.isInteger(less)) {
      throw new ArithmeticError(`less MUST BE INTEGER: ${less}`);
    }
    if (less < 0 || greater < 0) {
      throw new ArithmeticError(`less AND greater MUST NOT BE NEGATIVE: ${greater}, ${less}`);
    }
    if (less > greater) {
      throw new ArithmeticError(`less MUST BE LESS THAN OR EQUAL TO greater: ${greater}, ${less}`);
    }
    if (less === 0) {
      return greater;
    }

    return Arithmetic.gcd(less, greater % less);
  }

  /**
   * returns min <= x <= max
   * @param min
   * @param max
   */
  public static integer(min: number, max: number): number {
    try {
      return Random.integer(min, max);
    }
    catch (e: unknown) {
      if (e instanceof RandomError) {
        throw new ArithmeticError(e.message, e);
      }

      throw e;
    }
  }

  public static lcm(greater: number, less: number): number {
    if (greater === 0 || less === 0) {
      return 0;
    }

    return greater / Arithmetic.gcd(greater, less) * less;
  }

  public static negate(num: number): number {
    return 0 - num;
  }

  /**
   * returns 0 <= x < 1
   */
  public static random(): number {
    return Random.random();
  }
}
