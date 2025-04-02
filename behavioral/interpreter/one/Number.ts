import { Expression } from "./Expression";

export class Number implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  public interpret(): number {
    return this.number;
  }
}
