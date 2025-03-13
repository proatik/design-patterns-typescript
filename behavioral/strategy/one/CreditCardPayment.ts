import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  private name: string;
  private cardNumber: string;

  constructor({ name, cardNumber }: { name: string; cardNumber: string }) {
    this.name = name;
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    const paddedCardNumber = this.cardNumber.slice(-4).padStart(16, "*");

    console.log(`\nPayment processed: $${amount} paid with credit card`);
    console.log(`Card holder: ${this.name}`);
    console.log(`Card number: ${paddedCardNumber}\n`);
  }
}
