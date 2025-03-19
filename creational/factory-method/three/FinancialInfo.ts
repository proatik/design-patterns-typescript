export class FinancialInfo {
  payPalEmail: string;
  creditCardNumber: string;
  bankAccountNumber: string;

  constructor(
    creditCardNumber: string,
    payPalEmail: string,
    bankAccountNumber: string
  ) {
    this.creditCardNumber = creditCardNumber;
    this.payPalEmail = payPalEmail;
    this.bankAccountNumber = bankAccountNumber;
  }
}
