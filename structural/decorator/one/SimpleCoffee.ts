import { Coffee } from "./Coffee";

export class SimpleCoffee implements Coffee {
  getDescription(): string {
    return "Simple coffee";
  }

  getCost(): number {
    return 5.0;
  }
}
