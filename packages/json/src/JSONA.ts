import { ObjectLiteral, Reject, Resolve } from '@jamashita/anden-type';
import { JSONAError } from './JSONAError';

export class JSONA {
  public static parse<T extends ObjectLiteral = ObjectLiteral>(text: string): Promise<T> {
    return new Promise((resolve: Resolve<T>, reject: Reject) => {
      queueMicrotask(() => {
        try {
          resolve(JSON.parse(text) as T);
        }
        catch (err: unknown) {
          if (err instanceof Error) {
            reject(new JSONAError(err));

            return;
          }

          reject(err);
        }
      });
    });
  }

  public static stringify(value: ObjectLiteral): Promise<string> {
    return new Promise((resolve: Resolve<string>, reject: Reject) => {
      queueMicrotask(() => {
        try {
          resolve(JSON.stringify(value));
        }
        catch (err: unknown) {
          if (err instanceof Error) {
            reject(new JSONAError(err));

            return;
          }

          reject(err);
        }
      });
    });
  }

  private constructor() {
    // NOOP
  }
}
