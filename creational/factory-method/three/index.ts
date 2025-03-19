import { FinancialInfo } from "./FinancialInfo";
import { PayPalPaymentFactory } from "./PayPalPaymentFactory";
import { CreditCardPaymentFactory } from "./CreditCardPaymentFactory";
import { BankTransferPaymentFactory } from "./BankTransferPaymentFactory";

function main() {
  const userInfo = new FinancialInfo(
    "1234-5678-9012-3456",
    "user@example.com",
    "987654321"
  );

  console.log("\n=== Credit Card Payment ===\n");
  let factory = new CreditCardPaymentFactory();
  let payment = factory.createPayment(userInfo);
  payment.processPayment(100.0);

  console.log("\n=== PayPal Payment ===\n");
  factory = new PayPalPaymentFactory();
  payment = factory.createPayment(userInfo);
  payment.processPayment(200.0);

  console.log("\n=== Bank Transfer Payment ===\n");
  factory = new BankTransferPaymentFactory();
  payment = factory.createPayment(userInfo);
  payment.processPayment(300.0);
}

main();
