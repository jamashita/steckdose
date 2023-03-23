import { AnyFunction, Kind, Nullable } from '@jamashita/anden/type';
import { Random } from '../random/index.js';

type NoReturn<T extends AnyFunction> = (args: Parameters<T>) => void;

export class Delay {
  public static debounce<T extends AnyFunction>(callback: T, delay: number): NoReturn<T> {
    let id: Nullable<NodeJS.Timeout> = null;

    return (...args: Array<unknown>) => {
      if (!Kind.isNull(id)) {
        clearTimeout(id);
      }

      id = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  public static randomWait(minMS: number, maxMS: number): Promise<void> {
    const u: number = Random.integer(minMS, maxMS);

    return Delay.wait(u);
  }

  public static throttle<T extends AnyFunction>(callback: T, delay: number): NoReturn<T> {
    let id: Nullable<NodeJS.Timeout> = null;

    return (...args: Array<unknown>) => {
      if (Kind.isNull(id)) {
        callback(...args);
        id = setTimeout(() => {
          id = null;
        }, delay);
      }
    };
  }

  public static wait(ms: number): Promise<void> {
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
