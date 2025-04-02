import { Expression } from "./Expression";
import { VIPDiscount } from "./VIPDiscount";
import { CouponDiscount } from "./CouponDiscount";
import { OrderAmountDiscount } from "./OrderAmountDiscount";

export class DiscountCalculator {
  private expressions: Expression[];

  constructor() {
    this.expressions = [
      new VIPDiscount(),
      new OrderAmountDiscount(),
      new CouponDiscount(),
    ];
  }

  public calculateDiscount(context: any): number {
    let totalDiscount = 0;

    for (let expression of this.expressions) {
      totalDiscount += expression.interpret(context);
    }

    return totalDiscount;
  }
}
