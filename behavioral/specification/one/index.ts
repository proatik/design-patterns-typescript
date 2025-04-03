import { EvenSpecification } from "./EvenSpecification";
import { RangeSpecification } from "./RangeSpecification";

function main() {
  const evenSpec = new EvenSpecification();
  const rangeSpec = new RangeSpecification(10, 20);

  const evenAndInRangeSpec = evenSpec.and(rangeSpec);

  const number = 24;

  console.log("Even: " + evenSpec.isSatisfiedBy(number));
  console.log("In range 10-20: " + rangeSpec.isSatisfiedBy(number));
  console.log(
    "Even and in range 10-20: " + evenAndInRangeSpec.isSatisfiedBy(number)
  );
}

main();
