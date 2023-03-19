import { Arithmetic } from '../Arithmetic.js';
import { ArithmeticError } from '../ArithmeticError.js';

describe('Arithmetic', () => {
  describe('gcd', () => {
    it('throws ArithmeticError when the first argument is less than 0', () => {
      expect(() => {
        Arithmetic.gcd(-1, 24);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is less than 0', () => {
      expect(() => {
        Arithmetic.gcd(16, -1);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is less than the second argument', () => {
      expect(() => {
        Arithmetic.gcd(16, 24);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is NaN', () => {
      expect(() => {
        Arithmetic.gcd(NaN, 24);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is NaN', () => {
      expect(() => {
        Arithmetic.gcd(16, NaN);
      }).toThrow(ArithmeticError);
    });

    it('returns the greatest common divisor of two positive integers', () => {
      expect(Arithmetic.gcd(12, 8)).toBe(4);
      expect(Arithmetic.gcd(25, 15)).toBe(5);
      expect(Arithmetic.gcd(45, 35)).toBe(5);
      expect(Arithmetic.gcd(9, 3)).toBe(3);
      expect(Arithmetic.gcd(100, 64)).toBe(4);
    });

    it('returns the number itself when the other number is 0', () => {
      expect(Arithmetic.gcd(123, 0)).toBe(123);
      expect(Arithmetic.gcd(456, 0)).toBe(456);
    });

    it('returns the number itself when both numbers are equal', () => {
      expect(Arithmetic.gcd(123, 123)).toBe(123);
    });
  });

  describe('lcm', () => {
    it('throws ArithmeticError when either argument is less than 0', () => {
      expect(() => {
        Arithmetic.lcm(2, -5);
      }).toThrow(ArithmeticError);
      expect(() => {
        Arithmetic.lcm(-2, 5);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is less than the second argument', () => {
      expect(() => {
        Arithmetic.lcm(2, 5);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when either argument is NaN', () => {
      expect(() => {
        Arithmetic.lcm(2, NaN);
      }).toThrow(ArithmeticError);
      expect(() => {
        Arithmetic.lcm(NaN, 5);
      }).toThrow(ArithmeticError);
    });

    it('returns the least common multiple of two numbers', () => {
      expect(Arithmetic.lcm(8, 6)).toEqual(24);
      expect(Arithmetic.lcm(23, 17)).toEqual(391);
      expect(Arithmetic.lcm(18, 12)).toEqual(36);
      expect(Arithmetic.lcm(9, 4)).toEqual(36);
    });

    it('throws ArithmeticError if either argument is not a positive number', () => {
      expect(() => {
        Arithmetic.lcm(2, -5);
      }).toThrow(ArithmeticError);
      expect(() => {
        Arithmetic.lcm(-2, 5);
      }).toThrow(ArithmeticError);
    });
  });

  describe('negate', () => {
    it('returns the negative number of the argument', () => {
      expect(Arithmetic.negate(123)).toBe(-123);
      expect(Arithmetic.negate(-123)).toBe(123);
    });

    it('returns 0 when the argument is 0', () => {
      expect(Arithmetic.negate(0)).toBe(0);
    });

    it('returns NaN when the argument is NaN', () => {
      expect(Arithmetic.negate(NaN)).toBe(NaN);
    });
  });
});
