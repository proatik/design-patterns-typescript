import { DiscountCalculator } from "./DiscountCalculator";

function main() {
  const context = {
    isVIP: true,
    totalAmount: 600,
    hasCoupon: true,
  };

  const discountCalculator = new DiscountCalculator();

  const totalDiscount = discountCalculator.calculateDiscount(context);

  const finalAmount = context.totalAmount - totalDiscount;

  console.log(`Total Amount     : $${context.totalAmount}`);
  console.log(`Total Discount   : $${totalDiscount}`);
  console.log(`Final Amount     : $${finalAmount}`);
}

main();
