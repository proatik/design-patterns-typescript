import { PizzaBuilder } from "./PizzaBuilder";

export class Pizza {
  private dough: string;
  private sauce: string;
  private topping: string;

  private constructor(builder: PizzaBuilder) {
    this.dough = builder.getDough();
    this.sauce = builder.getSauce();
    this.topping = builder.getTopping();
  }

  toString(): string {
    return `Pizza with ${this.dough} dough, ${this.sauce} sauce, and ${this.topping} topping.`;
  }

  static buildPizza(builder: PizzaBuilder): Pizza {
    return new Pizza(builder);
  }
}
