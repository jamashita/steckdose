import { CompositeOpportunity } from '../CompositeOpportunity.js';
import { DecimalOpportunity } from '../DecimalOpportunity.js';
import { FractionOpportunity } from '../FractionOpportunity.js';

describe('CompositeOpportunity', () => {
  describe('happens', () => {
    it('returns true with the given opportunity: and', () => {
      const attempts: number = 10_000_000;
      const opportunity: CompositeOpportunity = new CompositeOpportunity(new FractionOpportunity(1, 3), new DecimalOpportunity(0.5), 'and');
      const results: Array<boolean> = Array.from({ length: attempts }, () => {
        return opportunity.happens();
      });
      const trueCount: number = results.filter((x: boolean) => {
        return x;
      }).length;

      expect(trueCount / attempts).toBeCloseTo(0.16667, 3);
    });

    it('returns true with the given opportunity: or', () => {
      const attempts: number = 10_000_000;
      const opportunity: CompositeOpportunity = new CompositeOpportunity(new FractionOpportunity(1, 3), new DecimalOpportunity(0.5), 'or');
      const results: Array<boolean> = Array.from({ length: attempts }, () => {
        return opportunity.happens();
      });
      const trueCount: number = results.filter((x: boolean) => {
        return x;
      }).length;

      expect(trueCount / attempts).toBeCloseTo(0.66667, 3);
    });

    it('returns true with the given opportunity: xor', () => {
      const attempts: number = 10_000_000;
      const opportunity: CompositeOpportunity = new CompositeOpportunity(new FractionOpportunity(1, 3), new DecimalOpportunity(0.5), 'xor');
      const results: Array<boolean> = Array.from({ length: attempts }, () => {
        return opportunity.happens();
      });
      const trueCount: number = results.filter((x: boolean) => {
        return x;
      }).length;

      expect(trueCount / attempts).toBeCloseTo(0.5, 3);
    });
  });
});
