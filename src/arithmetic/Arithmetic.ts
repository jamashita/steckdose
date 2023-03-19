import { ArithmeticError } from './ArithmeticError.js';

export class Arithmetic {
  public static gcd(num1: number, num2: number): number {
    if (num2 > num1) {
      throw new ArithmeticError(`num2 MUST BE LESS THAN OR EQUAL TO num1: ${num1}, ${num2}`);
    }
    if (num2 === 0) {
      return num1;
    }

    return Arithmetic.gcd(num1, num1 % num2);
  }

  public static negate(num: number): number {
    return 0 - num;
  }
}
