import { FractionOpportunity } from '../FractionOpportunity.js';

describe('FractionOpportunity', () => {
  describe('happens', () => {
    it('returns true with the given opportunity', () => {
      const attempts: number = 10_000_000;
      const opportunity: FractionOpportunity = new FractionOpportunity(1, 2);
      const results: Array<boolean> = Array.from({ length: attempts }, () => {
        return opportunity.happens();
      });
      const trueCount: number = results.filter((x: boolean) => {
        return x;
      }).length;

      expect(trueCount / attempts).toBeCloseTo(0.5, 1);
    });
  });
});
