import { Payment } from "./Payment";
import { FinancialInfo } from "./FinancialInfo";

export abstract class PaymentFactory {
  abstract createPayment(info: FinancialInfo): Payment;
}
