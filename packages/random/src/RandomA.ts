import cryptoRandomString from 'crypto-random-string';
import { randomInt } from 'd3-random';

export class RandomA {
  public static string(length: number, pool?: string): Promise<string> {
    return Promise.resolve<string>(cryptoRandomString({
      length,
      characters: pool
    }));
  }

  public static integer(min: number, max: number): Promise<number> {
    return Promise.resolve<number>(randomInt(min, max)());
  }

  private constructor() {
    // NOOP
  }
}
