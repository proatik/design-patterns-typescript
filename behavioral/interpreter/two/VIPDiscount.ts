import { Expression } from "./Expression";

export class VIPDiscount implements Expression {
  private discount: number;

  constructor() {
    this.discount = 0.2;
  }

  public interpret(context: any): number {
    return context.isVIP ? context.totalAmount * this.discount : 0;
  }
}
