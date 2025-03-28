import { Coffee } from "./Coffee";
import { CoffeeDecorator } from "./CoffeeDecorator";

export class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  getDescription(): string {
    return super.getDescription() + ", Sugar";
  }

  getCost(): number {
    return super.getCost() + 0.5;
  }
}
