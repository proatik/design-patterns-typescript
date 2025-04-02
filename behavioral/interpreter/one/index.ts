import { Add } from "./Add";
import { Number } from "./Number";
import { Subtract } from "./Subtract";

function main() {
  const five = new Number(5);
  const two = new Number(2);
  const three = new Number(3);

  const addExpression = new Add(five, two);
  const subtractExpression = new Subtract(addExpression, three);

  console.log(`(5 + 2) - 3 = ${subtractExpression.interpret()}`);
}

main();
