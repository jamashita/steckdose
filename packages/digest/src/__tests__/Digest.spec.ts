import { Digest } from '../Digest';

describe('Digest', () => {
  describe('compare', () => {
    it('returns true even if the hashes are different', async () => {
      const digest: Digest = new Digest();

      const password: string = 'The quick brown fox jumps over the lazy dog';
      const hash1: string = await digest.generate(password);
      const hash2: string = await digest.generate(password);

      const [compared1, compared2]: [boolean, boolean] = await Promise.all([
        digest.compare(password, hash1),
        digest.compare(password, hash2)
      ]);

      expect(compared1).toBe(true);
      expect(compared2).toBe(true);
    }, 30_000);
  });

  describe('generate', () => {
    it('generates different hashes', async () => {
      const digest: Digest = new Digest();

      const password: string = 'The quick brown fox jumps over the lazy dog';
      const [hash1, hash2]: [string, string] = await Promise.all([
        digest.generate(password),
        digest.generate(password)
      ]);

      expect(hash1).not.toBe(hash2);
    }, 30_000);
  });
});
