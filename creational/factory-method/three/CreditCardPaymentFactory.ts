import { Payment } from "./Payment";
import { FinancialInfo } from "./FinancialInfo";
import { PaymentFactory } from "./PaymentFactory";
import { CreditCardPayment } from "./CreditCardPayment";

export class CreditCardPaymentFactory extends PaymentFactory {
  createPayment(info: FinancialInfo): Payment {
    return new CreditCardPayment(info.creditCardNumber);
  }
}
