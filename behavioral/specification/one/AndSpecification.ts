import { Specification } from "./Specification";

export class AndSpecification implements Specification {
  private spec1: Specification;
  private spec2: Specification;

  constructor(spec1: Specification, spec2: Specification) {
    this.spec1 = spec1;
    this.spec2 = spec2;
  }

  public isSatisfiedBy(number: number): boolean {
    return this.spec1.isSatisfiedBy(number) && this.spec2.isSatisfiedBy(number);
  }

  public and(other: Specification): Specification {
    return new AndSpecification(this, other);
  }
}
