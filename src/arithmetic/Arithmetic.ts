import { Kind } from '@jamashita/anden/type';
import { ArithmeticError } from './ArithmeticError.js';

export class Arithmetic {
  public static gcd(greater: number, less: number): number {
    if (less < 0 || greater < 0) {
      throw new ArithmeticError(`less AND greater MUST NOT BE NEGATIVE: ${greater}, ${less}`);
    }
    if (less > greater) {
      throw new ArithmeticError(`less MUST BE LESS THAN OR EQUAL TO greater: ${greater}, ${less}`);
    }
    if (Kind.isNaN(greater) || Kind.isNaN(less)) {
      throw new ArithmeticError(`greater AND less MUST NOT BE NaN: ${greater}, ${less}`);
    }
    if (less === 0) {
      return greater;
    }

    return Arithmetic.gcd(less, greater % less);
  }

  public static lcm(greater: number, less: number): number {
    return greater * less / Arithmetic.gcd(greater, less);
  }

  public static negate(num: number): number {
    return 0 - num;
  }
}
