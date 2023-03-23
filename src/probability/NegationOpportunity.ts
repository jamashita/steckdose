import { Opportunity } from './Opportunity.js';

export class NegationOpportunity implements Opportunity {
  private readonly opportunity: Opportunity;

  public constructor(opportunity: Opportunity) {
    this.opportunity = opportunity;
  }

  public happens(): boolean {
    return !this.opportunity.happens();
  }
}
