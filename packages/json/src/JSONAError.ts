import { RuntimeError } from '@jamashita/anden-error';

export class JSONAError extends RuntimeError {
  public constructor(cause?: Error) {
    super('JSONAError', cause);
  }
}
