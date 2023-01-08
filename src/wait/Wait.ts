import { Random } from '../random/index.js';

export class Wait {
  public static approximatelyFor(minMS: number, maxMS: number): Promise<void> {
    const u: number = Random.integer(minMS, maxMS);

    return Wait.for(u);
  }

  public static for(ms: number): Promise<void> {
    return new Promise((resolve: (value: (void)) => void) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  private constructor() {
    // NOOP
  }
}
