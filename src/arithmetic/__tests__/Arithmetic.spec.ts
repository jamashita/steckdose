import { Arithmetic } from '../Arithmetic.js';
import { ArithmeticError } from '../ArithmeticError.js';

describe('Arithmetic', () => {
  describe('average', () => {
    it('throws ArithmeticError when the iterable is empty', () => {
      expect(() => {
        Arithmetic.average([]);
      }).toThrow(ArithmeticError);
    });

    it('returns the average of the iterable', () => {
      expect(Arithmetic.average([1, 2, 3])).toBe(2);
      expect(Arithmetic.average([1, 2, 3, 4])).toBe(2.5);
      expect(Arithmetic.average([1, 2, 3, 4, 5])).toBe(3);
    });
  });

  describe('combination', () => {
    it('throws ArithmeticError when the first argument is NaN', () => {
      expect(() => {
        Arithmetic.combination(Number.NaN, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is NaN', () => {
      expect(() => {
        Arithmetic.combination(24, Number.NaN);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is not an integer', () => {
      expect(() => {
        Arithmetic.combination(24.1, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is not an integer', () => {
      expect(() => {
        Arithmetic.combination(24, 16.1);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is less than 0', () => {
      expect(() => {
        Arithmetic.combination(-24, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is less than 0', () => {
      expect(() => {
        Arithmetic.combination(24, -16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is less than the second argument', () => {
      expect(() => {
        Arithmetic.combination(16, 24);
      }).toThrow(ArithmeticError);
    });

    it('returns 1 when the second argument is 0', () => {
      expect(Arithmetic.combination(5, 0)).toBe(1);
    });

    it('returns 1 when the first argument is equal to the second argument', () => {
      expect(Arithmetic.combination(5, 5)).toBe(1);
    });

    it('returns the combination of the two arguments', () => {
      expect(Arithmetic.combination(5, 0)).toBe(1);
      expect(Arithmetic.combination(5, 1)).toBe(5);
      expect(Arithmetic.combination(5, 2)).toBe(10);
      expect(Arithmetic.combination(5, 3)).toBe(10);
      expect(Arithmetic.combination(5, 4)).toBe(5);
      expect(Arithmetic.combination(5, 5)).toBe(1);
    });
  });

  describe('deviation', () => {
    it('throws ArithmeticError when the iterable is empty', () => {
      expect(() => {
        Arithmetic.deviation([]);
      }).toThrow(ArithmeticError);
    });

    it('returns the deviation of the iterable', () => {
      expect(Arithmetic.deviation([1, 2, 3])).toBe(Math.sqrt(2 / 3));
      expect(Arithmetic.deviation([1, 2, 3, 4])).toBe(Math.sqrt(1.25));
      expect(Arithmetic.deviation([1, 2, 3, 4, 5])).toBe(Math.sqrt(2));
    });
  });

  describe('gcd', () => {
    it('throws ArithmeticError when the first argument is NaN', () => {
      expect(() => {
        Arithmetic.gcd(Number.NaN, 24);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is NaN', () => {
      expect(() => {
        Arithmetic.gcd(16, Number.NaN);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is not an integer', () => {
      expect(() => {
        Arithmetic.gcd(24.1, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is not an integer', () => {
      expect(() => {
        Arithmetic.gcd(24, 16.1);
      }).toThrow(ArithmeticError);
    });

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

  describe('inverse', () => {
    it('throws ArithmeticError when the first argument is NaN', () => {
      expect(() => {
        Arithmetic.inverse(Number.NaN);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is 0', () => {
      expect(() => {
        Arithmetic.inverse(0);
      }).toThrow(ArithmeticError);
    });

    it('returns the inverse of the number', () => {
      expect(Arithmetic.inverse(2)).toBe(0.5);
      expect(Arithmetic.inverse(0.5)).toBe(2);
      expect(Arithmetic.inverse(0.25)).toBe(4);
    });
  });

  describe('lcm', () => {
    it('returns 0 when either argument is 0', () => {
      expect(Arithmetic.lcm(0, 5)).toBe(0);
      expect(Arithmetic.lcm(2, 0)).toBe(0);
      expect(Arithmetic.lcm(0, 0)).toBe(0);
    });

    it('throws ArithmeticError when the first argument is not an integer', () => {
      expect(() => {
        Arithmetic.lcm(5.1, 2);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is not an integer', () => {
      expect(() => {
        Arithmetic.lcm(5, 2.1);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is NaN', () => {
      expect(() => {
        Arithmetic.lcm(Number.NaN, 5);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is NaN', () => {
      expect(() => {
        Arithmetic.lcm(5, Number.NaN);
      }).toThrow(ArithmeticError);
    });

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
        Arithmetic.lcm(2, Number.NaN);
      }).toThrow(ArithmeticError);
      expect(() => {
        Arithmetic.lcm(Number.NaN, 5);
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

  describe('median', () => {
    it('throws ArithmeticError when the argument is an empty array', () => {
      expect(() => {
        Arithmetic.median([]);
      }).toThrow(ArithmeticError);
    });

    it('returns the median of an array of numbers', () => {
      expect(Arithmetic.median([1, 2, 3, 4, 5])).toBe(3);
      expect(Arithmetic.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
      expect(Arithmetic.median([1, 2, 3, 4, 5, 6, 7])).toBe(4);
      expect(Arithmetic.median([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5);
      expect(Arithmetic.median([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(5);
      expect(Arithmetic.median([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
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
      expect(Arithmetic.negate(Number.NaN)).toBe(Number.NaN);
    });
  });

  describe('permutation', () => {
    it('throws ArithmeticError when the first argument is NaN', () => {
      expect(() => {
        Arithmetic.permutation(Number.NaN, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is NaN', () => {
      expect(() => {
        Arithmetic.permutation(24, Number.NaN);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is not an integer', () => {
      expect(() => {
        Arithmetic.permutation(24.1, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is not an integer', () => {
      expect(() => {
        Arithmetic.permutation(24, 16.1);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is less than 0', () => {
      expect(() => {
        Arithmetic.permutation(-24, 16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the second argument is less than 0', () => {
      expect(() => {
        Arithmetic.permutation(24, -16);
      }).toThrow(ArithmeticError);
    });

    it('throws ArithmeticError when the first argument is less than the second argument', () => {
      expect(() => {
        Arithmetic.permutation(16, 24);
      }).toThrow(ArithmeticError);
    });

    it('returns the permutation of the two arguments', () => {
      expect(Arithmetic.permutation(5, 0)).toBe(1);
      expect(Arithmetic.permutation(5, 1)).toBe(5);
      expect(Arithmetic.permutation(5, 2)).toBe(20);
      expect(Arithmetic.permutation(5, 3)).toBe(60);
      expect(Arithmetic.permutation(5, 4)).toBe(120);
      expect(Arithmetic.permutation(5, 5)).toBe(120);
    });
  });

  describe('variance', () => {
    it('throws ArithmeticError when the argument is an empty array', () => {
      expect(() => {
        Arithmetic.variance([]);
      }).toThrow(ArithmeticError);
    });

    it('returns the variance of an array of numbers', () => {
      expect(Arithmetic.variance([1, 2, 3, 4, 5])).toBe(2);
      expect(Arithmetic.variance([1, 2, 3, 4, 5, 6])).toBe(2.9166666666666665);
      expect(Arithmetic.variance([1, 2, 3, 4, 5, 6, 7])).toBe(4);
      expect(Arithmetic.variance([1, 2, 3, 4, 5, 6, 7, 8])).toBe(5.25);
      expect(Arithmetic.variance([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(6.666666666666667);
      expect(Arithmetic.variance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(8.25);
    });
  });
});
