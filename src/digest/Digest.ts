import bcrypt from 'bcrypt';

export class Digest {
  private readonly rounds: number;

  public constructor(rounds: number) {
    this.rounds = rounds;
  }

  public compare(str: string, hash: string): Promise<boolean> {
    return bcrypt.compare(str, hash);
  }

  public async generate(str: string): Promise<string> {
    const salt: string = await bcrypt.genSalt(this.rounds);

    return bcrypt.hash(str, salt);
  }
}
