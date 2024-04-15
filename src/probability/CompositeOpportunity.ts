import { ExhaustiveError } from '@jamashita/anden';
import type { Opportunity } from './Opportunity.js';

type CompositeOperator = 'and' | 'or' | 'xor';

export class CompositeOpportunity implements Opportunity {
  private readonly left: Opportunity;
  private readonly right: Opportunity;
  private readonly operator: CompositeOperator;

  public constructor(left: Opportunity, right: Opportunity, operator: CompositeOperator) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  public happens(): boolean {
    const leftHappens: boolean = this.left.happens();
    const rightHappens: boolean = this.right.happens();

    switch (this.operator) {
      case 'and': {
        return leftHappens && rightHappens;
      }
      case 'or': {
        return leftHappens || rightHappens;
      }
      case 'xor': {
        return (leftHappens || rightHappens) && !(leftHappens && rightHappens);
      }
      default: {
        throw new ExhaustiveError(this.operator);
      }
    }
  }
}
