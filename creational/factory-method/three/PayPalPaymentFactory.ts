import { Payment } from "./Payment";
import { PayPalPayment } from "./PayPalPayment";
import { FinancialInfo } from "./FinancialInfo";
import { PaymentFactory } from "./PaymentFactory";

export class PayPalPaymentFactory extends PaymentFactory {
  createPayment(info: FinancialInfo): Payment {
    return new PayPalPayment(info.payPalEmail);
  }
}
