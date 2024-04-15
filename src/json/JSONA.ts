import type { ObjectLiteral, Reject, Resolve } from '@jamashita/anden/type';
import { JSONAError } from './JSONAError.js';

export namespace JSONA {
  export const parse = <T extends ObjectLiteral = ObjectLiteral>(text: string): Promise<T> => {
    return new Promise((resolve: Resolve<T>, reject: Reject) => {
      queueMicrotask(() => {
        try {
          resolve(JSON.parse(text) as T);
        } catch (err: unknown) {
          if (err instanceof Error) {
            reject(new JSONAError(err));

            return;
          }

          reject(err);
        }
      });
    });
  };

  export const stringify = (value: ObjectLiteral): Promise<string> => {
    return new Promise((resolve: Resolve<string>, reject: Reject) => {
      queueMicrotask(() => {
        try {
          resolve(JSON.stringify(value));
        } catch (err: unknown) {
          if (err instanceof Error) {
            reject(new JSONAError(err));

            return;
          }

          reject(err);
        }
      });
    });
  };
}
