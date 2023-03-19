import { Kind } from '@jamashita/anden/type';
import { Random, RandomError } from '../random/index.js';
import { ArithmeticError } from './ArithmeticError.js';

export class Arithmetic {

  public static average(iterable: Iterable<number>): number {
    const arr: Array<number> = [...iterable];

    if (arr.length === 0) {
      throw new ArithmeticError('ITERABLE MUST NOT BE EMPTY');
    }

    return arr.reduce((num1: number, num2: number) => {
      return num1 + num2;
    }, 0) / arr.length;
  }

  public static combination(n: number, m: number): number {
    if (n === m || m === 0) {
      return 1;
    }

    const d: number = n - m;

    if (d < m) {
      return Arithmetic.permutation(n, d) / Arithmetic.factorial(d);
    }

    return Arithmetic.permutation(n, m) / Arithmetic.factorial(m);
  }

  public static deviation(iterable: Iterable<number>): number {
    const va: number = Arithmetic.variance(iterable);

    return Math.sqrt(va);
  }

  /**
   * n! = n * (n - 1) * (n - 2) * ... * 1
   * @param n
   */
  public static factorial(n: number): number {
    if (!Kind.isInteger(n)) {
      throw new ArithmeticError(`n MUST BE INTEGER: ${n}`);
    }
    if (n < 0) {
      throw new ArithmeticError(`n MUST NOT BE NEGATIVE: ${n}`);
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * Arithmetic.factorial(n - 1);
  }

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
    if (!Kind.isInteger(greater) || !Kind.isInteger(less)) {
      throw new ArithmeticError(`greater AND less MUST BE INTEGER: ${greater}, ${less}`);
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

  public static inverse(num: number): number {
    if (Kind.isNaN(num)) {
      throw new ArithmeticError('NaN IS NOT INVERTIBLE');
    }
    if (num === 0) {
      throw new ArithmeticError('DIVIDED BY ZERO');
    }

    return 1 / num;
  }

  public static lcm(greater: number, less: number): number {
    if (greater === 0 || less === 0) {
      return 0;
    }

    return greater / Arithmetic.gcd(greater, less) * less;
  }

  public static median(iterable: Iterable<number>): number {
    const arr: Array<number> = [...iterable];

    if (arr.length === 0) {
      throw new ArithmeticError('ITERABLE MUST NOT BE EMPTY');
    }

    const sorted: Array<number> = arr.sort((num1: number, num2: number) => {
      return num1 - num2;
    });

    if (sorted.length % 2 === 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,@typescript-eslint/no-extra-parens
      return (sorted[sorted.length / 2]! + sorted[(sorted.length / 2) - 1]!) / 2;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return sorted[Math.floor(sorted.length / 2)]!;
  }

  public static negate(num: number): number {
    return 0 - num;
  }

  public static permutation(n: number, m: number): number {
    if (!Kind.isInteger(n) || !Kind.isInteger(m)) {
      throw new ArithmeticError(`n AND m MUST BE INTEGER: ${n}, ${m}`);
    }
    if (n < 0 || m < 0) {
      throw new ArithmeticError(`n AND m MUST NOT BE NEGATIVE: ${n}, ${m}`);
    }
    if (n < m) {
      throw new ArithmeticError(`n MUST BE GREATER THAN OR EQUAL TO m: ${n}, ${m}`);
    }

    let prod: number = 1;

    for (let i: number = n; i > n - m; i--) {
      prod *= i;
    }

    return prod;
  }

  /**
   * returns 0 <= x < 1
   */
  public static random(): number {
    return Random.random();
  }

  public static variance(iterable: Iterable<number>): number {
    const avg: number = Arithmetic.average(iterable);
    const arr: Array<number> = [...iterable];

    return arr.reduce((num1: number, num2: number) => {
      // eslint-disable-next-line @typescript-eslint/no-extra-parens
      return num1 + ((num2 - avg) * (num2 - avg));
    }, 0) / arr.length;
  }
}
