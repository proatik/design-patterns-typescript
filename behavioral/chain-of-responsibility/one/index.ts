import { EvenHandler } from "./EvenHandler";
import { PositiveHandler } from "./PositiveHandler";
import { DivisibleBy3Handler } from "./DivisibleBy3Handler";

function main() {
  const even = new EvenHandler();
  const positive = new PositiveHandler();
  const divisibleBy3 = new DivisibleBy3Handler();

  positive.setNext(even);
  even.setNext(divisibleBy3);

  positive.handle(-2);
  positive.handle(4);
  positive.handle(6);
}

main();
