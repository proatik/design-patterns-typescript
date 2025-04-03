import { Specification } from "./Specification";
import { AndSpecification } from "./AndSpecification";

export class EvenSpecification implements Specification {
  public isSatisfiedBy(number: number): boolean {
    return number % 2 === 0;
  }

  public and(other: Specification): Specification {
    return new AndSpecification(this, other);
  }
}
