import { Opportunity } from './Opportunity.js';

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
    switch (this.operator) {
      case 'and': {
        return this.left.happens() && this.right.happens();
      }
      case 'or': {
        return this.left.happens() || this.right.happens();
      }
      case 'xor':
      default: {
        const leftHappens: boolean = this.left.happens();
        const rightHappens: boolean = this.right.happens();

        return (leftHappens || rightHappens) && !(leftHappens && rightHappens);
      }
    }
  }
}
