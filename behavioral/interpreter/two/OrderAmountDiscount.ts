import { Expression } from "./Expression";

export class OrderAmountDiscount implements Expression {
  private discount: number;

  constructor() {
    this.discount = 0.1;
  }

  public interpret(context: any): number {
    return context.totalAmount > 500 ? context.totalAmount * this.discount : 0;
  }
}
