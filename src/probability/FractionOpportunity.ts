import { Random } from '../random/index.js';
import { Opportunity } from './Opportunity.js';

export class FractionOpportunity implements Opportunity {
  private readonly numerator: number;
  private readonly denominator: number;

  public constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  public happens(): boolean {
    return Random.random() * this.denominator < this.numerator;
  }
}
