import { Payment } from "./Payment";
import { FinancialInfo } from "./FinancialInfo";
import { PaymentFactory } from "./PaymentFactory";
import { BankTransferPayment } from "./BankTransferPayment";

export class BankTransferPaymentFactory extends PaymentFactory {
  createPayment(info: FinancialInfo): Payment {
    return new BankTransferPayment(info.bankAccountNumber);
  }
}
