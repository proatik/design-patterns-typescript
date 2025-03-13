import { ShoppingCart } from "./ShoppingCart";
import { PayPalPayment } from "./PayPalPayment";
import { CreditCardPayment } from "./CreditCardPayment";

function main() {
  const cart = new ShoppingCart();

  const creditCard = new CreditCardPayment({
    name: "John Doe",
    cardNumber: "1234567890123456",
  });
  cart.setPaymentStrategy(creditCard);
  cart.checkout(100);

  const payPal = new PayPalPayment({
    name: "Alex Pou",
    email: "alexpou@example.com",
  });
  cart.setPaymentStrategy(payPal);
  cart.checkout(200);
}

main();
