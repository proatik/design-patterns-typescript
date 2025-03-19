import { Payment } from "./Payment";

export class PayPalPayment implements Payment {
  private payPalEmail: string;

  constructor(payPalEmail: string) {
    this.payPalEmail = payPalEmail;
  }

  processPayment(amount: number): void {
    console.log(`PayPal: $${amount}`);
  }
}
