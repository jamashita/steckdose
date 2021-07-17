import { ObjectLiteral, Reject, Resolve } from '@jamashita/anden-type';
import { JSONAError } from './Error/JSONAError.js';

export class JSONA {
  public static parse<T extends ObjectLiteral = ObjectLiteral>(text: string): Promise<T> {
    return new Promise<T>((resolve: Resolve<T>, reject: Reject) => {
      setTimeout(() => {
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
      }, 0);
    });
  }

  public static stringify(value: ObjectLiteral): Promise<string> {
    return new Promise<string>((resolve: Resolve<string>, reject: Reject) => {
      setTimeout(() => {
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
      }, 0);
    });
  }

  private constructor() {
    // NOOP
  }
}
