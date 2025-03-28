import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  getDescription(): string {
    return super.getDescription() + ", Milk";
  }

  getCost(): number {
    return super.getCost() + 1.5;
  }
}
