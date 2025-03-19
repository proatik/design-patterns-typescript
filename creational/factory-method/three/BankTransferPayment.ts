import { Payment } from "./Payment";

export class BankTransferPayment implements Payment {
  private bankAccountNumber: string;

  constructor(bankAccountNumber: string) {
    this.bankAccountNumber = bankAccountNumber;
  }

  processPayment(amount: number): void {
    console.log(`Bank transfer: $${amount}`);
  }
}
