export class Tokenizer implements Iterable<string> {
  private readonly tokens: Array<string>;

  public constructor(str: string, delimiter: string) {
    const tokens: Array<string> = str.split(delimiter);

    this.tokens = tokens.filter((t: string) => {
      return t !== '';
    });
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return this.tokens[Symbol.iterator]();
  }

  public count(): number {
    return this.tokens.length;
  }

  public getTokens(): Array<string> {
    return [...this.tokens];
  }

  public iterator(): IterableIterator<string> {
    return this[Symbol.iterator]();
  }
}
