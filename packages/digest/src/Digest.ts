import bcrypt from 'bcrypt';

export class Digest {
  public static compare(str: string, hash: string): Promise<boolean> {
    return bcrypt.compare(str, hash);
  }

  public static async generate(str: string, rounds: number = 15): Promise<string> {
    const salt: string = await bcrypt.genSalt(rounds);

    return bcrypt.hash(str, salt);
  }

  private constructor() {
    // NOOP
  }
}
