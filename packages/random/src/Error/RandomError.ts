import { RuntimeError } from '@jamashita/anden-error';

export class RandomError extends RuntimeError<'RandomError'> {
  public readonly noun: 'RandomError' = 'RandomError';

  public constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}
