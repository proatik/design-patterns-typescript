import { Expression } from "./Expression";

export class CouponDiscount implements Expression {
  private discount: number;

  constructor() {
    this.discount = 0.15;
  }

  public interpret(context: any): number {
    return context.hasCoupon ? context.totalAmount * this.discount : 0;
  }
}
