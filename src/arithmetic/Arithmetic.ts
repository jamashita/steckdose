import { Kind } from '@jamashita/anden/type';
import { Random, RandomError } from '../random/index.js';
import { ArithmeticError } from './ArithmeticError.js';

export namespace Arithmetic {
  export const average = (iterable: Iterable<number>): number => {
    const arr: Array<number> = [...iterable];

    if (arr.length === 0) {
      throw new ArithmeticError('ITERABLE MUST NOT BE EMPTY');
    }

    return (
      arr.reduce((num1: number, num2: number) => {
        return num1 + num2;
      }, 0) / arr.length
    );
  };

  export const combination = (n: number, m: number): number => {
    if (n === m || m === 0) {
      return 1;
    }

    const d: number = n - m;

    if (d < m) {
      return Arithmetic.permutation(n, d) / Arithmetic.factorial(d);
    }

    return Arithmetic.permutation(n, m) / Arithmetic.factorial(m);
  };

  export const deviation = (iterable: Iterable<number>): number => {
    const va: number = Arithmetic.variance(iterable);

    return Math.sqrt(va);
  };

  /**
   * n! = n * (n - 1) * (n - 2) * ... * 1
   * @param n
   */
  export const factorial = (n: number): number => {
    if (!Kind.isInteger(n)) {
      throw new ArithmeticError(`n MUST BE INTEGER: ${n as unknown as string}`);
    }
    if (n < 0) {
      throw new ArithmeticError(`n MUST NOT BE NEGATIVE: ${n}`);
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * Arithmetic.factorial(n - 1);
  };

  /**
   * returns min <= x < max
   * @param min
   * @param max
   */
  export const float = (min: number, max: number): number => {
    try {
      return Random.float(min, max);
    } catch (e: unknown) {
      if (e instanceof RandomError) {
        throw new ArithmeticError(e.message, e);
      }

      throw e;
    }
  };

  export const gcd = (n: number, m: number): number => {
    if (!Kind.isInteger(n) || !Kind.isInteger(m)) {
      throw new ArithmeticError(`greater AND less MUST BE INTEGER: ${n}, ${m}`);
    }
    if (m < 0 || n < 0) {
      throw new ArithmeticError(`less AND greater MUST NOT BE NEGATIVE: ${n}, ${m}`);
    }
    if (m > n) {
      throw new ArithmeticError(`less MUST BE LESS THAN OR EQUAL TO greater: ${n}, ${m}`);
    }
    if (m === 0) {
      return n;
    }

    return Arithmetic.gcd(m, n % m);
  };

  /**
   * returns min <= x <= max
   * @param min
   * @param max
   */
  export const integer = (min: number, max: number): number => {
    try {
      return Random.integer(min, max);
    } catch (e: unknown) {
      if (e instanceof RandomError) {
        throw new ArithmeticError(e.message, e);
      }

      throw e;
    }
  };

  export const inverse = (num: number): number => {
    if (Kind.isNaN(num)) {
      throw new ArithmeticError('NaN IS NOT INVERTIBLE');
    }
    if (num === 0) {
      throw new ArithmeticError('DIVIDED BY ZERO');
    }

    return 1 / num;
  };

  export const lcm = (n: number, m: number): number => {
    if (n === 0 || m === 0) {
      return 0;
    }

    return (n / Arithmetic.gcd(n, m)) * m;
  };

  export const median = (iterable: Iterable<number>): number => {
    const arr: Array<number> = [...iterable];

    if (arr.length === 0) {
      throw new ArithmeticError('ITERABLE MUST NOT BE EMPTY');
    }

    const sorted: Array<number> = arr.sort((num1: number, num2: number) => {
      return num1 - num2;
    });

    if (sorted.length % 2 === 0) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      return (sorted[sorted.length / 2]! + sorted[sorted.length / 2 - 1]!) / 2;
    }

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    return sorted[Math.floor(sorted.length / 2)]!;
  };

  export const negate = (num: number): number => {
    return 0 - num;
  };

  export const permutation = (n: number, m: number): number => {
    if (!Kind.isInteger(n) || !Kind.isInteger(m)) {
      throw new ArithmeticError(`n AND m MUST BE INTEGER: ${n}, ${m}`);
    }
    if (n < 0 || m < 0) {
      throw new ArithmeticError(`n AND m MUST NOT BE NEGATIVE: ${n}, ${m}`);
    }
    if (n < m) {
      throw new ArithmeticError(`n MUST BE GREATER THAN OR EQUAL TO m: ${n}, ${m}`);
    }

    let prod = 1;

    for (let i: number = n; i > n - m; i--) {
      prod *= i;
    }

    return prod;
  };

  /**
   * returns 0 <= x < 1
   */
  export const random = (): number => {
    return Random.random();
  };

  export const variance = (iterable: Iterable<number>): number => {
    const avg: number = Arithmetic.average(iterable);
    const arr: Array<number> = [...iterable];

    return (
      arr.reduce((num1: number, num2: number) => {
        return num1 + (num2 - avg) * (num2 - avg);
      }, 0) / arr.length
    );
  };
}
