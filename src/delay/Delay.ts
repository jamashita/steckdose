import { type AnyFunction, Kind, type Nullable } from '@jamashita/anden/type';
import { Random } from '../random/index.js';

type NoReturn<T extends AnyFunction> = (args: Parameters<T>) => void;

export namespace Delay {
  export const debounce = <T extends AnyFunction>(callback: T, delay: number): NoReturn<T> => {
    let id: Nullable<NodeJS.Timeout> = null;

    return (...args: Array<unknown>) => {
      if (!Kind.isNull(id)) {
        clearTimeout(id);
      }

      id = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  export const randomWait = (minMS: number, maxMS: number): Promise<void> => {
    const u: number = Random.integer(minMS, maxMS);

    return Delay.wait(u);
  };

  export const throttle = <T extends AnyFunction>(callback: T, delay: number): NoReturn<T> => {
    let id: Nullable<NodeJS.Timeout> = null;

    return (...args: Array<unknown>) => {
      if (Kind.isNull(id)) {
        callback(...args);
        id = setTimeout(() => {
          id = null;
        }, delay);
      }
    };
  };

  export const wait = (ms: number): Promise<void> => {
    // biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
    return new Promise((resolve: (value: void) => void) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  };
}
