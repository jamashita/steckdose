import { Random } from '../random/index.js';
import type { Opportunity } from './Opportunity.js';

export class DecimalOpportunity implements Opportunity {
  private readonly probability: number;

  public constructor(probability: number) {
    this.probability = probability;
  }

  public happens(): boolean {
    return Random.random() < this.probability;
  }
}
