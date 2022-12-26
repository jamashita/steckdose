import { RuntimeError } from '@jamashita/anden';

export class JSONAError extends RuntimeError {
  public constructor(cause?: Error) {
    super('JSONAError', cause);
  }
}
