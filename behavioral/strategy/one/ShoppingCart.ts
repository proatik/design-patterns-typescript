import { PaymentStrategy } from "./PaymentStrategy";

export class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}
