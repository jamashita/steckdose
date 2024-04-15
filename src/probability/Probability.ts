import { CompositeOpportunity } from './CompositeOpportunity.js';
import { NegationOpportunity } from './NegationOpportunity.js';
import type { Opportunity } from './Opportunity.js';

export class Probability implements Opportunity {
  private readonly opportunity: Opportunity;

  public constructor(opportunity: Opportunity) {
    this.opportunity = opportunity;
  }

  public and(other: Probability): Probability {
    return new Probability(new CompositeOpportunity(this.opportunity, other.opportunity, 'and'));
  }

  public happens(): boolean {
    return this.opportunity.happens();
  }

  public not(): Probability {
    return new Probability(new NegationOpportunity(this.opportunity));
  }

  public or(other: Probability): Probability {
    return new Probability(new CompositeOpportunity(this.opportunity, other.opportunity, 'or'));
  }

  public xor(other: Probability): Probability {
    return new Probability(new CompositeOpportunity(this.opportunity, other.opportunity, 'xor'));
  }
}
