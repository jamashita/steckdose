const N: number = 624;
const M: number = 397;
const MATRIX_A: number = 0x9908b0df;
const UPPER_MASK: number = 0x80000000;
const LOWER_MASK: number = 0x7fffffff;

export class MersenneTwister {
  private readonly mt: Array<number>;
  private mti: number;

  public constructor(seed: number) {
    this.mt = new Array<number>(N);
    this.mti = N + 1;
    this.initSeed(seed);
  }

  // [0, 1)
  public decimal(): number {
    return this.integer() * (1.0 / 4294967296.0);
  }

  private initSeed(seed: number): void {
    let s: number = seed;

    // eslint-disable-next-line no-bitwise
    this.mt[0] = s >>> 0;

    for (this.mti = 1; this.mti < N; this.mti++) {
      // eslint-disable-next-line no-bitwise,@typescript-eslint/no-non-null-assertion,@typescript-eslint/no-extra-parens
      s = this.mt[this.mti - 1]! ^ (this.mt[this.mti - 1]! >>> 30);
      // eslint-disable-next-line no-bitwise,no-mixed-operators,@typescript-eslint/no-extra-parens
      this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253) + this.mti;
      // eslint-disable-next-line no-bitwise
      this.mt[this.mti] >>>= 0;
    }
  }

  // [0, 0xffffffff]
  public integer(): number {
    let y: number = 0;
    const mag01: Array<number> = new Array<number>(0x0, MATRIX_A);

    if (this.mti >= N) {
      let kk: number = 0;

      if (this.mti === N + 1) {
        this.initSeed(5489);
      }

      for (kk = 0; kk < N - M; kk++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,no-bitwise,@typescript-eslint/no-extra-parens
        y = (this.mt[kk]! & UPPER_MASK) | (this.mt[kk + 1]! & LOWER_MASK);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,no-bitwise,@typescript-eslint/no-extra-parens
        this.mt[kk] = this.mt[kk + M]! ^ (y >>> 1) ^ mag01[y & 0x1]!;
      }
      for (; kk < N - 1; kk++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,no-bitwise,@typescript-eslint/no-extra-parens
        y = (this.mt[kk]! & UPPER_MASK) | (this.mt[kk + 1]! & LOWER_MASK);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,no-bitwise,@typescript-eslint/no-extra-parens
        this.mt[kk] = this.mt[kk + (M - N)]! ^ (y >>> 1) ^ mag01[y & 0x1]!;
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,no-bitwise,@typescript-eslint/no-extra-parens
      y = (this.mt[N - 1]! & UPPER_MASK) | (this.mt[0]! & LOWER_MASK);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion,no-bitwise,@typescript-eslint/no-extra-parens
      this.mt[N - 1] = this.mt[M - 1]! ^ (y >>> 1) ^ mag01[y & 0x1]!;

      this.mti = 0;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    y = this.mt[this.mti++]!;

    // eslint-disable-next-line @typescript-eslint/no-extra-parens,no-bitwise
    y ^= (y >>> 11);
    // eslint-disable-next-line @typescript-eslint/no-extra-parens,no-bitwise
    y ^= (y << 7) & 0x9d2c5680;
    // eslint-disable-next-line @typescript-eslint/no-extra-parens,no-bitwise
    y ^= (y << 15) & 0xefc60000;
    // eslint-disable-next-line @typescript-eslint/no-extra-parens,no-bitwise
    y ^= (y >>> 18);

    // eslint-disable-next-line no-bitwise
    return y >>> 0;
  }
}
