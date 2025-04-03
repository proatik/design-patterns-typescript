import { Specification } from "./Specification";
import { AndSpecification } from "./AndSpecification";

export class RangeSpecification implements Specification {
  private min: number;
  private max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  public isSatisfiedBy(number: number): boolean {
    return number >= this.min && number <= this.max;
  }

  public and(other: Specification): Specification {
    return new AndSpecification(this, other);
  }
}
