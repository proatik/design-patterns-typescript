import { Pizza } from "./Pizza";

export class PizzaBuilder {
  private dough: string = "";
  private sauce: string = "";
  private topping: string = "";

  setDough(dough: string): this {
    this.dough = dough;
    return this;
  }

  setSauce(sauce: string): this {
    this.sauce = sauce;
    return this;
  }

  setTopping(topping: string): this {
    this.topping = topping;
    return this;
  }

  getDough(): string {
    return this.dough;
  }

  getSauce(): string {
    return this.sauce;
  }

  getTopping(): string {
    return this.topping;
  }

  build(): Pizza {
    return Pizza.buildPizza(this);
  }
}
