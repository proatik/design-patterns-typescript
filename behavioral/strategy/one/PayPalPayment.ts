import { PaymentStrategy } from "./PaymentStrategy";

export class PayPalPayment implements PaymentStrategy {
  private name: string;
  private email: string;

  constructor({ name, email }: { email: string; name: string }) {
    this.name = name;
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`\nPayment processed: $${amount} paid with PayPal`);
    console.log(`Account holder: ${this.name}`);
    console.log(`PayPal account: ${this.email}\n`);
  }
}
