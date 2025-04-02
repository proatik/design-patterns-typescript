import { Expression } from "./Expression";

export class Add implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(leftExpression: Expression, rightExpression: Expression) {
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  public interpret(): number {
    return this.leftExpression.interpret() + this.rightExpression.interpret();
  }
}
