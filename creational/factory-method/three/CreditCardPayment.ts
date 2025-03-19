import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
  private creditCardNumber: string;

  constructor(creditCardNumber: string) {
    this.creditCardNumber = creditCardNumber;
  }

  processPayment(amount: number): void {
    console.log(`Credit card: $${amount}`);
  }
}
